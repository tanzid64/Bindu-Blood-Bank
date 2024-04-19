import {  Card } from "flowbite-react";
import profilePicture from "/images/profile_picture.jpg";
const Donor = ({user}) => {
  console.log(user)
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10">
        <img
          alt={`${user.first_name} ${user.last_name}`}
          height="96"
          src={user.image ? user.image : profilePicture}
          // src={user.image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {`${user.first_name} ${user.last_name}`}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add friend
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Donor;
