import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";
import { Avatar } from "flowbite-react";

export default function DonorSkeleton() {
  return (
    <Card className="max-w-[340px]">
      <div className="flex items-center justify-between gap-5 px-5 pt-5">
        <Skeleton className="rounded-full h-12 w-14">
          <div className=" rounded-full bg-secondary"></div>
        </Skeleton>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-1 rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton className="w-3/6 rounded-lg">
            <div className="h-3 rounded-lg bg-secondary"></div>
          </Skeleton>
        </div>
      </div>
      <div className="p-5">
        <Skeleton className="w-3/4 rounded-lg">
          <div className="h-3 rounded-lg bg-secondary"></div>
        </Skeleton>
        <div className="flex gap-4 p-3 pb-0">
          <Skeleton className="w-3/4 rounded-lg">
            <div className="h-3 rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton className="w-3/4 rounded-lg">
            <div className="h-3 rounded-lg bg-secondary"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
{/* <div className="flex flex-col gap-3">
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-full w-40 h-40">
          <div className="h-24 rounded-lg bg-secondary"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary "></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
        </div>
      </Card>
    </div> */}