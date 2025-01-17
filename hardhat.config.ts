require('dotenv').config()
import type { HardhatUserConfig } from "hardhat/types";
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: resolve(__dirname, "./.env") });

task("accounts", "Prints the list of accounts", async (args, { ethers }) => {
  const [operator] = await ethers.getSigners();

  console.log(`Operator address: ${operator.address}`);
});

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "mainnet",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [process.env.OPERATOR_PRIVATE_KEY!],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.OPERATOR_PRIVATE_KEY!],
    },
  },
};

export default config;
