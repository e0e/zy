import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-deploy";

//import "./tasks";
//import "./tasks/functionSignature";
//import "./tasks/storageStructure";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers:[
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },     
        },
      },
      {
        version: "0.8.19",
      },      
    ],
  }, 
  namedAccounts: {
    deployer: {
      default: 0,
      localhost: 0,
    },
  },
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://localhost:8545",
    },
    bnbtest: {
      url: process.env.BNBTest_URL,
      accounts:
        process.env.BNBTest_PRIVATE_KEY !== undefined
          ? [process.env.BNBTest_PRIVATE_KEY]
          : [],  
        chainId: 97,     
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
