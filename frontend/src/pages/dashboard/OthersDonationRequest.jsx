import React from "react";
import SectionTitle from "../../components/SectionTitle";
import DonationCard from "./DonationCard";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";

const OthersDonationRequest = ({ data }) => {
  const user = useSelector(selectCurrentUser);
  return (
    <>
      <SectionTitle title="Other's Requests" />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data?.map(
          (item, index) =>
            item.created_by.username != user.username &&
            item.is_accepted == false && (
              <DonationCard item={item} key={index} type="other" />
            )
        )}
      </div>
    </>
  );
};

export default OthersDonationRequest;
