import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import profilePicture from "/images/profile_picture.jpg";
import { MdCheckCircleOutline } from "react-icons/md";
const Donor = ({ user }) => {
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
              @{user.username}{" "}
              {user.is_available && (
                <MdCheckCircleOutline
                  size={18}
                  className="inline text-blue-700"
                />
              )}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <h4 className="text-small font-semibold leading-none text-default-600">
          Blood Group: {user.blood_group}
        </h4>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className=" text-default-400 text-small">Last Donation:</p>
          <p className="font-semibold text-default-400 text-small">
            {user.last_donation_date ? user.last_donation_date : "None"}
          </p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-green-600 dark:text-green-200 text-small">
            {user.total_donated}
          </p>
          <p className="text-green-600 dark:text-green-200 text-small">
            Times donated
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Donor;
