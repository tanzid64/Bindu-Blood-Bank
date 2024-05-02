import React from "react";
import { Avatar } from "@nextui-org/react";
import { List } from "flowbite-react";
import DonationRequest from "./DonationRequest";
import DonationReport from "./DonationReport";
const ProfileDetails = ({ user }) => {
  return (
    <main className="md:grid grid-cols-5 md:grid-cols-6 gap-4">
      {/* Profile Details */}
      <div className="p-8 max-w-full border border-indigo-300 rounded-2xl hover:shadow-md hover:shadow-indigo-50 md:col-span-2 lg:col-span-2">
        {/* Profile Photo */}
        <figure className="max-w-lg">
          <Avatar
            src={user.image ? user.image : ""}
            className="h-25 w-25 lg:h-20 lg:w-20"
          />
          <figcaption className="mt-2 text-3xl text-center text-white ">
            @{user.username}
          </figcaption>
        </figure>
        {/* Details */}
        <div className="max-w-2xl shadow overflow-hidden sm:rounded-lg mt-2">
          <div className=" py-5 ">
            <h3 className="text-lg leading-6 font-medium text-white">
              User database
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-green-400">
              Successfully donated 0 times through BINDU.
            </p>
            <List unstyled>
              <List.Item>
                Full Name: {user.first_name} {user.last_name}
              </List.Item>
              <List.Item>Email: {user.email}</List.Item>
              <List.Item>Blood Group: {user.blood_group}</List.Item>
              <List.Item>Gender: {user.gender}</List.Item>
              <List.Item>
                Last Donation Date:{" "}
                {user.last_donation_date ? user.last_donation_date : "None"}
              </List.Item>
              <List.Item>
                status: {user.is_available ? "available" : "unavailable"}
              </List.Item>
              <List.Item>Address: {user.address}</List.Item>
            </List>
          </div>
        </div>
      </div>
      <section className="md:col-span-4 lg:col-span-4 mt-4 md:mt-0">
        <DonationRequest />
        <DonationReport />
      </section>
    </main>
  );
};

export default ProfileDetails;
