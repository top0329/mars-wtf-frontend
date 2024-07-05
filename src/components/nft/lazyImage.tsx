"use client"
import React from 'react';
import Image from 'next/image';
import {Button, Skeleton} from "@nextui-org/react";

interface IProps {
    src: string,
    className?: string
}

const LazyImage = ({ src, className }: IProps) => {

    const [loaded, setLoaded] = React.useState<boolean>(false);

    return (
        <>
            <Image
                src={src}
                key={src}
                width={0}
                alt=""
                height={0}
                onLoad={() => setLoaded(true)}
                sizes="100vw"
                layout="fill"
                objectFit="cover"
                priority={false}
                className={`w-full nft duration-400 transition-all`}
            />
            <Skeleton className={`rounded-lg absolute top-0 left-0 w-full dark:bg-[#363639] bg-gray-400 ${loaded && 'hidden'} ${className}`}>
                <div className={`dark:bg-gray-700 bg-gray-400 aspect-square w-full h-full rounded-[19px]`}></div>
            </Skeleton>
        </>
    )
}

export default LazyImage;