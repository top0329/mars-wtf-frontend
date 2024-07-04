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
import Image from "next/image";

const queryClient = new QueryClient();

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => 
  <Image
    src={'/img/martian.png'}
    width={size}
    height={size}
    alt="avatar"
    className="rounded-full"
  />

const RainbowProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider avatar={CustomAvatar} theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowProvider;
