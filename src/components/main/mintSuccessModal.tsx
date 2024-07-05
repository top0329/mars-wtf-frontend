"use client"
import { chains } from '@/constants/wagmiConfig';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

interface IProps {
    name: string,
    description: string,
    image: string,
    hash: string,
    close: () => void
}

const MintSuccessModal = (props: IProps) => {

    const { width, height } = useWindowSize();

    return (
        <div className='fixed top-0 left-0 md:flex items-center md:pt-0 pt-24 overflow-y-scroll right-0 bottom-0 z-40 px-1 md:px-4'>
            <div className='z-50'><Confetti width={width} height={height} recycle={false} /></div>
            <div onClick={props.close} className='fixed top-0 left-0 right-0 bottom-0 bg-white/1 backdrop-filter backdrop-blur-[8px] z-30'></div>
            <div className='w-full xs:w-[500px] mx-auto relative'>
                <div className='w-full rounded-2xl bg-gradient-to-br from-[#2D2D2D]/80 to-[#2D2D2D]/10 p-2'>
                    <div className='w-full relative text-white rounded-2xl h-full p-5 bg-gradient-to-br from-[#010239] to-[#010239]/80 z-40'>
                        <div className='md:text-xl text-sm flex justify-center gap-3 items-center'><Icon icon="icon-park-outline:success-picture" className='text-2xl'/>Mint Success</div>
                        <div className='bg-[#10113f] w-2/3 mx-auto mt-3 rounded-xl flex justify-center items-center p-6'>
                            <img
                                src={props.image}
                                className='rounded-xl w-full h-full'
                            />
                        </div>
                        <div className='mt-5 truncate text-xs sm:text-sm px-0 xs:px-10 cursor-pointer underline hover:opacity-60' onClick={() => window.open(`https://sepolia.etherscan.io/tx/${props.hash}`)}>0x6c0c4610ecd6ed5fd13489b1228f9038a00c420f5ca351115b08a296cad98e84</div>
                    </div>
                </div>
                <img
                    src={"/img/wtf.png"}
                    className='absolute z-50 -top-2 -left-2'
                />
                <Icon onClick={props.close} icon="mingcute:close-fill" className='text-3xl hover:opacity-60 absolute z-50 cursor-pointer top-5 right-5 text-white'/>
            </div>
        </div>
    )
}

export default MintSuccessModal;