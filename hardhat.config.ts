import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    xdcTestnet: {
      chainId: 51,
      url: 'https://rpc.apothem.network',
      accounts: [
        // Inserir PK aqui
      ]
    },
    xdc: {
      chainId: 50,
      url: 'https://rpc.xdcrpc.com',
      accounts: [
        // Inserir PK aqui
      ]
    }
  }
};

export default config;
