import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useRouter } from 'next/navigation';
import useActiveWeb3 from '@/hooks/useActiveWeb3';

const WalletConnectButton = () => {

  const router = useRouter ();
  const { isConnected } = useActiveWeb3 ();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);



  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} className="bg-[#E15012] hover:bg-gradient-to-r from-[#eb3d03] to-[#DD5919] xxs:px-2 p-1 px-2 xxs:py-[5px] rounded-md xxs:rounded-lg text-xs xxs:text-[15px] gap-1 xxs:p-3 lg:px-5 lg:py-4 lg:text-2xl lg:rounded-2xl flex lg:gap-2 items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="lg:w-[40px] lg:h-[40px] xxs:w-6 xxs:h-6 h-5 w-5" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M21.1 8.004C21.045 8 20.984 8 20.92 8h-2.525c-2.068 0-3.837 1.628-3.837 3.75s1.77 3.75 3.837 3.75h2.525c.064 0 .125 0 .182-.004a1.755 1.755 0 0 0 1.645-1.628c.004-.06.004-.125.004-.185V9.817c0-.06 0-.125-.004-.185a1.755 1.755 0 0 0-1.645-1.628m-2.928 4.746c.532 0 .963-.448.963-1s-.431-1-.963-1c-.533 0-.964.448-.964 1s.431 1 .964 1"></path><path d="M20.918 17a.22.22 0 0 1 .221.278c-.2.712-.519 1.32-1.03 1.83c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87C2 15.099 2 13.644 2 11.806v-.112C2 9.856 2 8.4 2.153 7.26c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238C7.401 3 8.856 3 10.694 3h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.511.512.83 1.119 1.03 1.831a.22.22 0 0 1-.221.278h-2.524c-2.837 0-5.337 2.24-5.337 5.25s2.5 5.25 5.337 5.25zM7 15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75"></path></g></svg>
                    <span className='hidden xs:inline'>CONNECT</span>
                  </button>
                );
              } if (chain.unsupported) {
                return (
                  <button 
                    onClick={openChainModal} 
                    type="button"
                    className="bg-[#E44C0E] rounded-lg lg:rounded-2xl flex p-1 md:px-2 lg:p-4 items-center gap-1 text-lg lg:text-2xl text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="lg:w-[40px] lg:h-[40px] w-7 h-7" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20m6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9"></path></svg>
                    <p className="pt-[3px] truncate md:inline hidden">Wrong Network</p>
                  </button>
                );
              }
              return (
                <div className="bg-[#E44C0E] rounded-lg lg:rounded-2xl flex p-1 pl-2 lg:p-3 items-center gap-3">
                  <button
                    onClick={openChainModal}
                    className="flex items-center gap-1"
                    type="button"
                  >
                    {chain.hasIcon && chain.iconUrl && 
                      <Image
                        src={chain.iconUrl}
                        width={0}
                        height={0}
                        alt={chain.name ?? 'Chain icon'}  
                        priority={true}    
                        sizes='100vw'
                        className="rounded-full aspect-square w-4 xxs:w-7 lg:w-10 flex-none"
                      />
                    }
                    <div className="text-lg md:inline hidden lg:text-2xl text-white">{chain.name}</div>
                    <Icon icon="bxs:down-arrow" className='text-white md:inline hidden'/>
                  </button>
                  
                <button 
                    onClick={openAccountModal} 
                    type="button"
                    className="flex bg-[#d14115] rounded-lg lg:rounded-xl p-1 xxs:p-[6px] md:px-4 md:py-2 lg:py-4 items-center justify-center"
                >
                    {/* { 
                    user && user.avatar ?
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={user.avatar}
                        width={32}
                        height={32}
                        alt={"wallet avatar"}   
                        // priority={true}    
                        className="rounded-full aspect-square"
                    /> :
                    // <Image
                    //   src={user.avatar}
                    //   width={32}
                    //   height={32}
                    //   alt={"wallet"}   
                    //   priority={true}    
                    //   className="rounded-full"
                    // /> :
                    <Icon icon="flowbite:user-solid" width={32} height={32} className="rounded-full bg-[#46455367] dark:text-black dark:bg-[#868592c4] opacity-50"/>
                    } */}
                    {/* {account.displayName} */}
                    { 
                    account.displayBalance && 
                    <div className="pl-2 pr-3 truncate md:inline hidden dark:text-white text-white">
                        { account.displayBalance.substring(0, account.displayBalance.length - 3) }
                        <span className="text-[#45B26B]">ETH</span>
                    </div>
                    }
                    <Icon icon="bxs:down-arrow" className='text-white hidden md:inline'/>
                    <Icon icon="iconoir:wallet-solid" className='md:hidden inline text-white text-sm xxs:text-xl'/>
                </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletConnectButton;