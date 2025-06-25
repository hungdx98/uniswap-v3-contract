const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with:", deployer.address);

    // const balance = await deployer.getBalance();
    // console.log("Deployer balance:", ethers.utils.formatEther(balance), "ETH");

    // Deploy UniswapV3Factory
    const Factory = await ethers.getContractFactory("UniswapV3Factory");
    console.log("Deploying UniswapV3Factory...", Factory);
    // If you have constructor arguments, pass them here
    const factory = await Factory.deploy(); // Deploy the contract
    console.log("Transaction hash:", factory.deployTransaction.hash);

    await factory.deployed(); // Wait for the deployment to be mined
    console.log("UniswapV3Factory deployed at:", factory.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });