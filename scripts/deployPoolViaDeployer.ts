import { ethers } from "hardhat";
import { calculateTicks } from '../utils';

async function main() {
    const factoryAddress = '0x85368A086a23989ba326Aab2CCEf50DC649f9b39'; // UniswapV3Factory address
    const contractFactory = await ethers.getContractAt("UniswapV3Factory", factoryAddress);
    const token0 = "0x111111267109489dc6f350608d5113B10c0C5cd7";
    const token1 = "0xAa6F3E52cb0571b88E58A93FD1Cc0744254909D2";
    const fee = 3000;

    const poolAddress = contractFactory.getPool(token0, token1, fee)
    const contractPool = await ethers.getContractAt("UniswapV3Pool", poolAddress);

    const price = 2; // token1/token0
    const sqrtPrice = Math.sqrt(price);
    const sqrtPriceX96 = BigInt(sqrtPrice * 2 ** 96);

    const tickRange = 10; // tickRange số lượng khoảng tick muốn mở rộng (ví dụ: 10 => +-10 ticks)
    const tickSpacing = contractPool.tickSpacing();
    const { tickLower, tickUpper, currentTick } = calculateTicks(price, tickSpacing, tickRange);
    console.log(`Current Tick: ${currentTick}`);
    console.log(`Tick Lower: ${tickLower}`);
    console.log(`Tick Upper: ${tickUpper}`);
    // const tx = await contractPool.initialize(sqrtPriceX96);
    // await tx.wait()
    console.log("Transaction sent to initialize pool. Waiting for confirmation...");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });