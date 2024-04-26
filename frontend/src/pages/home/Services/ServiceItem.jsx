import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import service from "/service.png";
export default function ServiceItem() {
  return (
    <Card className="w-full">
      <Image alt="Card background" className="object-cover rounded-t-lg " src={service} />
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start"></CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardBody>
    </Card>
  );
}
