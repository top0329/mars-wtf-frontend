"use client"
import { chains } from '@/constants/wagmiConfig';
import React from 'react';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

interface IProps {
    close: () => void
}

const BuySuccess = (props: IProps) => {

    const { width, height } = useWindowSize();

    const init = () => {
        setTimeout (() => {
            props.close ();
        }, 10000)
    }

    React.useEffect(() => {
        init ();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='!fixed top-0 right-0 left-0 bottom-0'>
            <div className='!z-50'>
                <Confetti width={width} height={height} recycle={false} />
            </div>
        </div>
    )
}

export default BuySuccess;