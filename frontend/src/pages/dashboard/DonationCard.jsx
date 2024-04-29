import { Button, Card } from "flowbite-react";

const DonationCard = ({ item }) => {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Need <span className="text-red-500">{item.blood_group}</span> blood
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          Posted By: {item.created_by.username}
        </p>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          Location : {item.location}
        </p>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          Details : {item.description}
        </p>
      </h5>
      
    </Card>
  );
};

export default DonationCard;
