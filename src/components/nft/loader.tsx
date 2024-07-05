import React from 'react';
import LoaderItem from './loaderItem';

const NFTLoader = () => {
    return (
        <React.Fragment>
            {
                new Array (30).fill("").map((item: string, index: number) => (
                    <LoaderItem key={'nft_loader_' + index}/>
                ))
            }
        </React.Fragment>
    )
}

export default NFTLoader;