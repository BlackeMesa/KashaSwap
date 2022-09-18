import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS_CONTRACT; 

console.log(ROUTER_ADDRESS);
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.REACT_APP_NETWORK_ADDRESS,
  },
};
console.log(DAPP_CONFIG);