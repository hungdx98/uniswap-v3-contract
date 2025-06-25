import "@nomicfoundation/hardhat-ignition-ethers";
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';
import 'hardhat-typechain';

dotenv.config();

import { task } from "hardhat/config";

// Custom task to list accounts
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }

});

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 88,
      initialBaseFeePerGas: 0, // Set to 0 to avoid pending block issues
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    bnb: {
      chainId: 56,
      url: 'https://bsc.drpc.org',
    },
    viction: {
      chainId: 88,
      url: 'https://rpc.viction.xyz',
      accounts: { mnemonic: process.env.MNEMONIC },
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: process.env.ETHERSCAN_API_KEY,
      apiKey: {
        goerli: "",
        viction: "tomoscan2023",
      },
      customChains: [
        {
          network: "viction",
          chainId: 88, // for mainnet
          urls: {
            apiURL: "https://www.vicscan.xyz/api/contract/hardhat/verify", // for mainnet
            browserURL: "https://vicscan.xyz", // for mainnet
  
          }
        }
      ]
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
    customChains: [
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io"
        }
      }
    ]
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  } 
}
