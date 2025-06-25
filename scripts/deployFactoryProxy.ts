import { ethers } from "hardhat";

async function DeployFactoryProxy() {
    // Deploy UniswapV3Pool logic
    const Pool = await ethers.getContractFactory("UniswapV3Pool");
    const poolLogic = await Pool.deploy();
    const poolAddress = await poolLogic.getAddress()
    console.log("✅ Pool Logic deployed to:", await poolLogic.getAddress());

    // Deploy factory with poolLogic address
    // const Factory = await ethers.getContractFactory("UniswapV3Factory");
    // const factory = await upgrades.deployProxy(Factory, [poolAddress], {
    //     initializer: "initialize",
    // });

    // console.log("✅ Factory Proxy deployed to:", factory.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });