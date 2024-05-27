"use client";
import React from "react";
import dynamic from "next/dynamic";

const RainbowProvider = dynamic(() => import("@/providers/rainbowProvider"), { ssr: false });
const ActiveWeb3Provider = dynamic(() => import("@/providers/web3Provider"), { ssr: false });
const ToastProvider = dynamic(() => import("@/providers/toastProvider"), { ssr: false });

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <RainbowProvider>
      <ToastProvider>
        <ActiveWeb3Provider>
          {children}
        </ActiveWeb3Provider>
      </ToastProvider>
    </RainbowProvider>
  );
};

export default ThemeClient;
