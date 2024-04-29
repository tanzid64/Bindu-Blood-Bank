import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ProfileDetails from "./ProfileDetails";
import { useParams } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/apiSlices/authApi";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/spinner";

const Profile = () => {
  const { username } = useParams();
  const { data, error, isLoading } = useGetUserProfileQuery(username);
  // const user = useSelector(selectCurrentUser);

  return (
    <>
      {isLoading ? (
        <div
          className={isLoading && `flex items-center justify-center min-h-96`}
        >
          <Spinner />
        </div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <ProfileDetails user={data} />
      )}
    </>
  );
};

export default Profile;
