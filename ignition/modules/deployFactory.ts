import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UniswapV3FactoryModule = buildModule("UniswapV3Factory", (m) => {
    const deployer = '0x835d5e132039987A994c6288777DbF7d1Bb511A5'; // Replace with your deployer's address
    const factory = m.contract("UniswapV3Factory", [], { from: deployer });
    console.log("UniswapV3Factory deployed at:", factory);
    return { factory };
});

export default UniswapV3FactoryModule;