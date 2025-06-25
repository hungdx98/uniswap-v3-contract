import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UniswapV3PoolDeployerModule = buildModule("UniswapV3PoolDeployer", (m) => {
    const pool = m.contract("UniswapV3PoolDeployer");
    console.log("UniswapV3PoolDeployer:", pool);
    return { pool };
});


export default UniswapV3PoolDeployerModule;