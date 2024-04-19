import { useEffect, useState } from "react";
import Donor from "../Components/Donor";
import { useGetAllUserQuery } from "../features/userProfile";

const Donors = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const [isActiveDonor, setIsActiveDonor] = useState(false);
  return (
    <div className="flex flex-col gap-6 flex-wrap md:flex-row py-5 px-8">
      {data?.map((user, index) => (
        <Donor key={index} user={user} />
      ))}
    </div>
  );
};

export default Donors;
