import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { useState } from "react";

const DonorCard = ({user}) => {

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={user.image ? user.image : ""}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user.first_name} {user.last_name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user.username}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small no-scrollbar">
        <p>Blood Group: {user.blood_group}</p>
        <p className="">
          Total Donated: {user.total_donated} times
        </p>
      </CardBody>
      <CardFooter className="gap-3 justify-center">
        <div className="flex gap-1">
          <p className="text-red-400 text-small">Last Donation Date:</p>
          <p className="font-semibold text-red-400 text-small">
            {user.last_donation_date ? user.last_donation_date : "None"}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}


export default DonorCard;
