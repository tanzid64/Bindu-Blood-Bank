import { Button, Card } from "flowbite-react";
import { usePostDonationReportMutation } from "../../redux/apiSlices/donationApi";
import { Spinner } from "@nextui-org/spinner";
import { useDispatch } from "react-redux";
import { setToast } from "../../redux/slices/toastSlice";

const DonationCard = ({ item, type }) => {
  const [donate, { isLoading }] = usePostDonationReportMutation();
  const dispatch = useDispatch();
  const handleDonate = async () => {
    console.log(item.id);
    const res = await donate(item.id);
    if (res?.data?.user){
      dispatch(setToast({ message: "Donation Successfull.", type: "success" }));
    }
    if(res?.error?.status===400){
      dispatch(setToast({ message: res.error.data[0], type: "warning" }));
    }
  };
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
      {type === "other" ? (
        <Button onClick={handleDonate}>
          {isLoading ? "Donating..." : "Donate"}{" "}
        </Button>
      ) : (
        <Button onClick={handleDonate}>
          {isLoading ? <Spinner /> : "Mark as Managed"}
        </Button>
      )}
    </Card>
  );
};

export default DonationCard;
