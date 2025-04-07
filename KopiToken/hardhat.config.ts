import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
// const { SE_POLIA_RPC_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.SE_POLIA_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  }
};

export default config;
