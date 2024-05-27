"use client";
import React from "react";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  AvatarComponent
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/constants/wagmiConfig";

const queryClient = new QueryClient();

const RainbowProvider = ({ children }: { children: React.ReactNode }) => {

  

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowProvider;
