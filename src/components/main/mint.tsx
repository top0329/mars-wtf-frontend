"use client"
import React from 'react';
import { Textarea, CircularProgress } from "@nextui-org/react";
import { Icon } from '@iconify/react/dist/iconify.js';
const acceptables = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
import useToastr from '@/hooks/useToastr';
import { uploadToIPFS, uploadToPinata } from '@/utils/methods';
import MintSuccessModal from './mintSuccessModal';
import { SERVER_URL, chains, contracts } from '@/constants/config';
import { Contract, providers, utils } from 'ethers';
import useActiveWeb3 from '@/hooks/useActiveWeb3';
// rainbow modal
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useBalance } from "wagmi";
import { NFT } from '@/types/utils';
import axios from 'axios';

interface IProps {
    close: () => void,
    intialize: () => void,
    data: NFT
}

const FreeMint = ({ close, data, intialize }: IProps) => {
    //hooks
    const { showToast } = useToastr();
    //states
    const [loading, setLoading] = React.useState<boolean>(false);
    const [percent, setPercent] = React.useState<number>(0);
    const [step, setStep] = React.useState<number>(2);
    const [txHash, setTxHash] = React.useState<string>("");
    // nft information
    const [nftNumber, setNftNumber] = React.useState<number>(0);
    const [currentFee, setCurrentFee] = React.useState<number>(0);
    const [myFreeMintCount, setMyFreeMintCount] = React.useState<number>(0);
    const [myFeeMintCount, setMyFeeMintCount] = React.useState<number>(0);
    // web3
    const { address, isConnected, isConnecting, isReconnecting, connector, chainId, signer } = useActiveWeb3();// hook address, isconnected, inConnecting
    const _balance = useBalance({ address });
    // modal hook
    const { openConnectModal } = useConnectModal ();

    const initialize = async (_address?: string, _provider?: any) => {
        const chainId = 11155111;
        const _chain = chains[chainId];
        // web3 provider
        const provider = _provider ?? new providers.JsonRpcProvider(_chain.rpc);
        const { address: contractAddress, abi } = contracts[chainId].nft;
        const _contract = new Contract(contractAddress, abi, provider);
        
        if (!_address) {
            const [
                _tokenNumber,
                _mintFee
            ] = await Promise.all([
                _contract.tokenNumber (),
                _contract.getCurrentMintFee ()
            ]);
            setNftNumber (Number(_tokenNumber));
            setCurrentFee (Number(utils.formatEther(_mintFee)));
        } else {
            const [
                _tokenNumber,
                _mintFee,
                _myFreeMintCount,
                _myFeeMintCount
            ] = await Promise.all([
                _contract.tokenNumber (),
                _contract.getCurrentMintFee (),
                _contract.freeCreations(_address),
                _contract.feeCreations(_address)
            ]);
            setNftNumber (Number(_tokenNumber));
            setCurrentFee (Number(utils.formatEther(_mintFee)));
            setMyFreeMintCount (Number(_myFreeMintCount));
            setMyFeeMintCount (Number(_myFeeMintCount));
        }
    }
    
    React.useEffect(() => {
        if (address && signer) {
            initialize (address, signer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address, signer]);


    React.useEffect(() => {
        initialize ();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    const onMint = async (_signer: any) => {
        try {
            setLoading(true);
            // upload metadata to IPFS
            setStep (1);
            setPercent (0);
            const _metaData = JSON.stringify({
                name: data.name,
                description: data.description,
                assetType: "image",
                image: data.image,
            });
            const _metaURL = await uploadToIPFS(
                new File(
                    [
                        _metaData
                    ], "metadata.json"
                ),
                ({ loaded, total }: { loaded: number; total: number }) => {
                    console.log({ loaded, total })
                    setPercent(Math.floor((loaded * 100) / total));
                }
            ).catch(err => {
                console.log(err);
                throw "Project Data upload failed to IPFS. Please retry.";
            });
            console.log({ _metaURL });
            // mint NFT
            setStep (2);
            setPercent (0);
            const { address: contractAddress, abi } = contracts[Number(chainId)].nft;
            const _contract = new Contract(contractAddress, abi, signer);
            const _currentMintFee = await _contract.getCurrentMintFee();
            console.log({
                _currentMintFee: Number(_currentMintFee),
                _balance: _balance.data?.value
            })
            if (Number(_currentMintFee) > Number(_balance.data?.value)) {
                throw showToast ("You dont have enough ETH to pay for mint fee", "warning");
            }
            const _tx = await _contract.mint(_metaURL, { value: _currentMintFee });
            await _tx.wait ();
            setTxHash (_tx.hash);
            showToast ("Mars NFT has been minted successfully", "success");
            // refresh
            await axios.put(`${SERVER_URL}/nft/mint/${data._id}`);
            intialize ();
        } catch (err) {
            if (String(err).includes("user rejected transaction")) {
                showToast ("Rject the transaction", "warning");
            }
            setLoading(false);
        }
    }

    const handleMintButtonClick = () => {
        if (loading) {
            return;
        }  {
            onMint(signer);
        }
    }

    const _renderCircleProgress = (rate: number) => (
        rate > 0 ?
        <div className='relative'>
            <CircularProgress
                classNames={{
                    // svg: "w-16 h-16 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                }}
                value={rate}
                strokeWidth={3}
                // showValueLabel={true}
                size='lg'
            />
            <span className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-sans'>{Math.floor(rate)}%</span>
        </div> : 
        <CircularProgress
            classNames={{
                // svg: "w-16 h-16 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
            }}
            className='spin'
            strokeWidth={3}
            size='lg'
        />
    )

    React.useEffect(() => {
        if (txHash) {
            setLoading (false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [txHash]);

    const _renderProgress = () => (
        <div className='fixed top-0 left-0 flex items-center justify-center md:pt-0 pt-24 overflow-y-scroll right-0 bottom-0 z-40 px-1 md:px-4'>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-white/1 backdrop-filter backdrop-blur-[15px] z-50'></div>
            <div className='w-full lg:w-1/2 w1450:w-2/5 mx-auto z-50'>
                <div className='w-full rounded-2xl bg-gradient-to-br from-[#2D2D2D]/80 to-[#2D2D2D]/10 p-1'>
                    <div className='w-full flex flex-col gap-4 relative text-white rounded-2xl h-full p-5 bg-gradient-to-br from-[#010239] to-[#010239]/80 z-40'>
                        <div className='text-center text-lg md:text-xl'>MINT <span className='text-green-500'>MARS</span> NFT</div>
                        <div className='flex gap-3 items-center'>
                            { 
                                step < 1 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="fluent:document-queue-multiple-24-regular" className='text-4xl'/></span> :
                                step > 1 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="octicon:check-16" className='text-4xl'/></span> :
                                _renderCircleProgress (percent)
                            }
                            <div className='text-xs sm:text-lg'>Uploading Metadata to IPFS ...</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            { 
                                step < 2 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="fluent:document-queue-multiple-24-regular" className='text-4xl'/></span> :
                                step > 2 ? <span className='w-12 h-12 flex items-center justify-center'><Icon icon="octicon:check-16" className='text-4xl'/></span> :
                                _renderCircleProgress (percent)
                            }
                            <div className='text-xs sm:text-lg'>Minting NFT ...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const { mintAvailable, message } = React.useMemo (() => {
        if (nftNumber <= 999 && myFreeMintCount === 1) {
            return {
                mintAvailable: false,
                message: 'Already minted 1 NFT for free'
            }
        } else if (nftNumber > 1000 && myFeeMintCount > 5) {
            return {
                mintAvailable: false,
                message: 'Already minted 5 NFTs with fees'
            }
        } else {
            return {
                mintAvailable: true,
                message: ''
            }
        }
    }, [nftNumber, myFreeMintCount, myFeeMintCount]);

    const _renderMintButton = () => (
        isConnected ?
        <button onClick={handleMintButtonClick} className='bg-[#CB4913] rounded-xl text-sm md:text-xl p-2 w1450:p-4 hover:opacity-60 flex gap-2 justify-center items-center'>
            {loading && <div className='flex justify-center items-center h-1'><Icon icon="eos-icons:three-dots-loading" className='text-6xl flex-none' /></div>}
            MINT
        </button> :
        <button onClick={openConnectModal} className='bg-[#CB4913] rounded-xl text-sm md:text-xl p-2 w1450:p-4 hover:opacity-60 flex gap-2 justify-center items-center'>
            <Icon icon="fluent:wallet-credit-card-24-filled" className='text-2xl'/>
            Connect wallet
        </button>
    )
 
    return (
        <div className='fixed top-0 left-0 md:flex items-center md:pt-0 pt-24 overflow-y-scroll right-0 bottom-0 z-40 px-1 md:px-4'>
            <div onClick={close} className='fixed top-0 left-0 right-0 bottom-0 bg-white/1 backdrop-filter backdrop-blur-[8px] z-30'></div>
            <div className='w-full lg:w-2/3 w1450:w-1/2 mx-auto'>
                <div  className='w-full rounded-2xl bg-gradient-to-br from-[#2D2D2D]/80 to-[#2D2D2D]/10 p-2'>
                    <div className='w-full relative text-white rounded-2xl h-full p-5 bg-gradient-to-br from-[#010239] to-[#010239]/80 z-40'>
                        <h1 className='text-xl md:text-3xl'><span className='text-green-600'>Mars</span> NFT MINT</h1>
                        <div className='grid  sm:grid-cols-2 items-center'>
                            <label className='w-full aspect-square md:pr-14 pt-5 cursor-pointer'>
                                <p className='pb-2 px-2 text-sm'>*minted: {nftNumber}/5000</p>
                                { address && <p className='pb-2 px-2 text-sm -mt-1'>*my minted: {myFreeMintCount + myFeeMintCount}</p> }
                                <div className='bg-[#10113f] w-full h-full rounded-xl flex justify-center items-center p-4'>
                                    <img
                                        src={data.image}
                                        className='rounded-xl w-full h-full'
                                    />
                                </div> 
                            </label>
                            <div className='flex flex-col gap-4 pt-10 sm:pl-4 md:pl-0'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='px-2 text-sm md:text-xl'>NAME</h3>
                                    <input
                                        placeholder='nft name'
                                        className='text-sm w1450:text-lg p-2 w1450:p-3 bg-white/5 rounded-lg w-full outline-white/10 border-none outline-none'
                                        value={data.name}
                                        readOnly
                                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='flex h-full flex-col gap-1'>
                                    <h3 className='px-2 text-sm md:text-xl'>Description</h3>
                                    <Textarea
                                        isRequired
                                        label=""
                                        value={data.description}
                                        readOnly
                                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                                        labelPlacement="outside"
                                        variant="faded"
                                        placeholder="Enter NFT description"
                                        className="w-full"
                                        minRows={6}
                                        classNames={{
                                            inputWrapper: 'bg-white/5 outline-white/10',
                                        }}
                                    />
                                </div>
                                <div className='mt-2'>
                                    MINT Fee:  <span className='text-green-500'>{currentFee}ETH</span> = ${currentFee === 0 ? 0 : 100}
                                </div>
                                {
                                    mintAvailable ? 
                                    _renderMintButton () :
                                    <div className='text-center flex gap-1 items-center break-all text-wrap text-red-600'><Icon icon="mdi:chat-warning" className='text-3xl' hFlip={true}/>{message}</div>
                                    
                                }
                            </div>
                        </div>
                        <img
                            src='/img/martian.png'
                            className='absolute w-[100px]  md:w-[150px] lg:w-[200px] top-0 right-0 -translate-y-1/2 lg:translate-x-1/2 translate-x-1/3'
                        />
                    </div>
                </div>
            </div>

            {loading && _renderProgress()}
            {txHash && <MintSuccessModal close={() => setTxHash("")} hash={txHash} name={data.name} description={data.description} image={data.image}/>}
        </div>
    )
}

export default FreeMint;