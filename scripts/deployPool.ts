import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with:", deployer.address);

    // const balance = await deployer.getBalance();
    // console.log("Deployer balance:", ethers.utils.formatEther(balance), "ETH");

    // Deploy UniswapV3Factory
    const pool = await ethers.getContractFactory("UniswapV3Pool");
    // If you have constructor arguments, pass them here
    const factory = await pool.deploy(); // Deploy the contract
    console.log("Transaction hash:", factory.deploymentTransaction()?.hash);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });