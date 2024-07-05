"use client";

import React from "react";
import {Button, Image, Skeleton} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import LazyImage from "./lazyImage";

import {cn} from "@/utils/cn";
import { NFT } from "@/types/utils";

export type PlaceListItemColor = {
  name: string;
  hex: string;
};

export type PlaceListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
  onMint: (_nft: NFT) => void;
} & NFT;

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    {name, _id, isLoading, onMint, description, image, removeWrapper, className, ...props},
    ref,
  ) => {
    const [isLiked, setIsLiked] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-none flex-col gap-3",
          {
            "rounded-none bg-background shadow-none": removeWrapper,
          },
          className,
        )}
        {...props}
      >
        <Button
          isIconOnly
          className="absolute right-3 top-3 z-20 bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
          radius="full"
          size="sm"
          variant="flat"
          onPress={() => setIsLiked(!isLiked)}
        >
          <Icon
            className={cn("text-default-900/50", {
              "text-danger-400": isLiked,
            })}
            icon="solar:heart-bold"
            width={16}
          />
        </Button>

        <div className='w-full aspect-square relative overflow-hidden rounded-2xl flex items-center cursor-pointer mint-item'>
          <LazyImage
            src={image}
          />
          <Button onClick={() => onMint ({ _id, name, description, image })} className="mint-btn hidden rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            mint
          </Button>
        </div>
        

        <div className="mt-1 flex flex-col gap-2 px-1">
          {isLoading ? (
            <div className="my-1 flex flex-col gap-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-4 w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-small font-medium text-default-700">{name}</h3>
                {/* {rating !== undefined ? (
                  <div className="flex items-center gap-1">
                    <Icon className="text-default-500" icon="solar:star-bold" width={16} />
                    <span className="text-small text-default-500">{rating}</span>
                  </div>
                ) : null} */}
              </div>
              {description ? <p className="text-small text-default-500 line-clamp-3">{description}</p> : null}
              {/* <p className="text-small font-medium text-default-500">${price}</p> */}
            </>
          )}
        </div>
      </div>
    );
  },
);

PlaceListItem.displayName = "PlaceListItem";

export default PlaceListItem;
