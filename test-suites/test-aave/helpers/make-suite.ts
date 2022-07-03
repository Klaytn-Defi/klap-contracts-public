import { evmRevert, evmSnapshot, DRE } from '../../../helpers/misc-utils';
import { Contract, Signer } from 'ethers';
import {
  getLendingPool,
  getLendingPoolAddressesProvider,
  getAaveProtocolDataProvider,
  getAToken,
  getMintableERC20,
  getLendingPoolConfiguratorProxy,
  getPriceOracle,
  getLendingPoolAddressesProviderRegistry,
  getWETHMocked,
  getWETHGateway,
  getUniswapLiquiditySwapAdapter,
  getUniswapRepayAdapter,
  getFlashLiquidationAdapter,
  getParaSwapLiquiditySwapAdapter,
  getChefIncentivesController,
  getMultiRewarder,
  getGeistToken,
  getMultiFeeDistribution,
  getVe,
  getTreasury,
  getLPToken,
  getMasterChef,
} from '../../../helpers/contracts-getters';
import { eEthereumNetwork, eNetwork, tEthereumAddress } from '../../../helpers/types';
import { LendingPool } from '../../../types/LendingPool';
import { AaveProtocolDataProvider } from '../../../types/AaveProtocolDataProvider';
import { MintableErc20 } from '../../../types/MintableERC20';
import { AToken } from '../../../types/AToken';
import { LendingPoolConfigurator } from '../../../types/LendingPoolConfigurator';
import { upgrades } from 'hardhat';

import chai from 'chai';
// @ts-ignore
import bignumberChai from 'chai-bignumber';
import { almostEqual } from './almost-equal';
import { PriceOracle } from '../../../types/PriceOracle';
import { LendingPoolAddressesProvider } from '../../../types/LendingPoolAddressesProvider';
import { LendingPoolAddressesProviderRegistry } from '../../../types/LendingPoolAddressesProviderRegistry';
import { getEthersSigners } from '../../../helpers/contracts-helpers';
import { UniswapLiquiditySwapAdapter } from '../../../types/UniswapLiquiditySwapAdapter';
import { UniswapRepayAdapter } from '../../../types/UniswapRepayAdapter';
import { ParaSwapLiquiditySwapAdapter } from '../../../types/ParaSwapLiquiditySwapAdapter';
import { getParamPerNetwork } from '../../../helpers/contracts-helpers';
import { Weth9Mocked } from '../../../types/WETH9Mocked';
import { WethGateway } from '../../../types/WETHGateway';
import { solidity } from 'ethereum-waffle';
import { AaveConfig } from '../../../markets/aave';
import {
  ChefIncentivesController,
  FlashLiquidationAdapter,
  KlapToken,
  Lperc20,
  MasterChef,
  MultiFeeDistribution,
  MultiRewarder,
  Treasury,
  Ve,
} from '../../../types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { usingTenderly } from '../../../helpers/tenderly-utils';

chai.use(bignumberChai());
chai.use(almostEqual());
chai.use(solidity);

export interface SignerWithAddress {
  signer: Signer;
  address: tEthereumAddress;
}
export interface TestEnv {
  deployer: SignerWithAddress;
  users: SignerWithAddress[];
  pool: LendingPool;
  configurator: LendingPoolConfigurator;
  oracle: PriceOracle;
  helpersContract: AaveProtocolDataProvider;
  weth: Weth9Mocked;
  aWETH: AToken;
  dai: MintableErc20;
  geistToken: KlapToken;
  masterchef: MasterChef;
  lpToken: Lperc20;
  aDai: AToken;
  usdc: MintableErc20;
  aave: MintableErc20;
  addressesProvider: LendingPoolAddressesProvider;
  uniswapLiquiditySwapAdapter: UniswapLiquiditySwapAdapter;
  uniswapRepayAdapter: UniswapRepayAdapter;
  registry: LendingPoolAddressesProviderRegistry;
  chefIncentivesController: ChefIncentivesController;
  multiRewarder: MultiRewarder;
  multiFee: MultiFeeDistribution;
  wethGateway: WethGateway;
  flashLiquidationAdapter: FlashLiquidationAdapter;
  paraswapLiquiditySwapAdapter: ParaSwapLiquiditySwapAdapter;
  ve: Ve;
  treasury: Treasury;
  upgradeProxy: (address: string, contractFactory: any) => Promise<Contract> | void;
}

let buidlerevmSnapshotId: string = '0x1';
const setBuidlerevmSnapshotId = (id: string) => {
  buidlerevmSnapshotId = id;
};

const testEnv: TestEnv = {
  deployer: {} as SignerWithAddress,
  users: [] as SignerWithAddress[],
  pool: {} as LendingPool,
  configurator: {} as LendingPoolConfigurator,
  helpersContract: {} as AaveProtocolDataProvider,
  oracle: {} as PriceOracle,
  weth: {} as Weth9Mocked,
  aWETH: {} as AToken,
  dai: {} as MintableErc20,
  aDai: {} as AToken,
  usdc: {} as MintableErc20,
  aave: {} as MintableErc20,
  addressesProvider: {} as LendingPoolAddressesProvider,
  uniswapLiquiditySwapAdapter: {} as UniswapLiquiditySwapAdapter,
  uniswapRepayAdapter: {} as UniswapRepayAdapter,
  flashLiquidationAdapter: {} as FlashLiquidationAdapter,
  paraswapLiquiditySwapAdapter: {} as ParaSwapLiquiditySwapAdapter,
  registry: {} as LendingPoolAddressesProviderRegistry,
  wethGateway: {} as WethGateway,
  chefIncentivesController: {} as ChefIncentivesController,
  multiRewarder: {} as MultiRewarder,
  masterchef: {} as MasterChef,
  geistToken: {} as KlapToken,
  lpToken: {} as Lperc20,
  multiFee: {} as MultiFeeDistribution,
  ve: {} as Ve,
  treasury: {} as Treasury,
  upgradeProxy: () => {},
} as TestEnv;

export async function initializeMakeSuite() {
  const [_deployer, ...restSigners] = await getEthersSigners();
  const deployer: SignerWithAddress = {
    address: await _deployer.getAddress(),
    signer: _deployer,
  };

  for (const signer of restSigners) {
    testEnv.users.push({
      signer,
      address: await signer.getAddress(),
    });
  }
  testEnv.deployer = deployer;
  testEnv.pool = await getLendingPool();
  testEnv.multiFee = await getMultiFeeDistribution();

  testEnv.configurator = await getLendingPoolConfiguratorProxy();

  testEnv.addressesProvider = await getLendingPoolAddressesProvider();

  if (process.env.FORK) {
    testEnv.registry = await getLendingPoolAddressesProviderRegistry(
      getParamPerNetwork(AaveConfig.ProviderRegistry, process.env.FORK as eNetwork)
    );
  } else {
    testEnv.registry = await getLendingPoolAddressesProviderRegistry();
    testEnv.oracle = await getPriceOracle();
  }

  testEnv.helpersContract = await getAaveProtocolDataProvider();

  const allTokens = await testEnv.helpersContract.getAllATokens();
  const aDaiAddress = allTokens.find((aToken) => aToken.symbol === 'aDAI')?.tokenAddress;

  const aWEthAddress = allTokens.find((aToken) => aToken.symbol === 'aWETH')?.tokenAddress;

  const reservesTokens = await testEnv.helpersContract.getAllReservesTokens();

  const daiAddress = reservesTokens.find((token) => token.symbol === 'DAI')?.tokenAddress;
  const usdcAddress = reservesTokens.find((token) => token.symbol === 'USDC')?.tokenAddress;
  const aaveAddress = reservesTokens.find((token) => token.symbol === 'AAVE')?.tokenAddress;
  const wethAddress = reservesTokens.find((token) => token.symbol === 'WETH')?.tokenAddress;

  if (!aDaiAddress || !aWEthAddress) {
    process.exit(1);
  }
  if (!daiAddress || !usdcAddress || !aaveAddress || !wethAddress) {
    process.exit(1);
  }

  testEnv.masterchef = await getMasterChef();
  testEnv.geistToken = await getGeistToken();
  testEnv.lpToken = await getLPToken();
  testEnv.aDai = await getAToken(aDaiAddress);
  testEnv.aWETH = await getAToken(aWEthAddress);

  testEnv.dai = await getMintableERC20(daiAddress);
  testEnv.usdc = await getMintableERC20(usdcAddress);
  testEnv.aave = await getMintableERC20(aaveAddress);
  testEnv.weth = await getWETHMocked(wethAddress);
  testEnv.wethGateway = await getWETHGateway();

  testEnv.uniswapLiquiditySwapAdapter = await getUniswapLiquiditySwapAdapter();
  testEnv.uniswapRepayAdapter = await getUniswapRepayAdapter();
  testEnv.flashLiquidationAdapter = await getFlashLiquidationAdapter();
  testEnv.chefIncentivesController = await getChefIncentivesController();
  testEnv.multiRewarder = await getMultiRewarder();
  testEnv.paraswapLiquiditySwapAdapter = await getParaSwapLiquiditySwapAdapter();
  testEnv.ve = await getVe();
  testEnv.treasury = await getTreasury();
  testEnv.upgradeProxy = upgrades.upgradeProxy;
}

const setSnapshot = async () => {
  const hre = DRE as HardhatRuntimeEnvironment;
  if (usingTenderly()) {
    setBuidlerevmSnapshotId((await hre.tenderlyNetwork.getHead()) || '0x1');
    return;
  }
  setBuidlerevmSnapshotId(await evmSnapshot());
};

const revertHead = async () => {
  const hre = DRE as HardhatRuntimeEnvironment;
  if (usingTenderly()) {
    await hre.tenderlyNetwork.setHead(buidlerevmSnapshotId);
    return;
  }
  await evmRevert(buidlerevmSnapshotId);
};

export function makeSuite(name: string, tests: (testEnv: TestEnv) => void) {
  describe(name, () => {
    before(async () => {
      await setSnapshot();
    });
    tests(testEnv);
    after(async () => {
      await revertHead();
    });
  });
}
