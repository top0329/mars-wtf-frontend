import React from "react";
import { Web3Context } from "@/providers/web3Provider";

const useActiveWeb3 = () => {
  const context = React.useContext(Web3Context);
  if (!context) {
    throw new Error("");
  } else {
    return context;
  }
};

export default useActiveWeb3;