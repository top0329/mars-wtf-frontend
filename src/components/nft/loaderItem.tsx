"use client";

import React from "react";
import { Skeleton } from "@nextui-org/react";
import { cn } from "@/utils/cn";

export type PlaceListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
};

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    { removeWrapper, className, ...props },
    ref,
  ) => {

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
        <div className='w-full aspect-square relative overflow-hidden rounded-2xl flex items-center'>
          <Skeleton className={`rounded-lg absolute top-0 left-0 w-full dark:bg-[#363639] bg-gray-400`}>
              <div className={`dark:bg-gray-700 bg-gray-400 aspect-square w-full h-full rounded-[19px]`}></div>
          </Skeleton>
        </div>

        <div className="mt-1 flex flex-col gap-2 px-1">
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
        </div>
      </div>
    );
  },
);

PlaceListItem.displayName = "PlaceListItem";

export default PlaceListItem;
