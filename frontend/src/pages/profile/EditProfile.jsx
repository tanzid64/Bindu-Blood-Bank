import { FileInput, Label, TextInput } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  setCredentials,
} from "../../redux/slices/authSlice";
import { Button } from "@nextui-org/react";
import { useUpdateUserProfileMutation } from "../../redux/apiSlices/authApi";
const EditProfile = () => {
  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();
  const { username } = useParams();
  const data = useSelector(selectCurrentUser);
  const [userData, setUserData] = useState({
    username: username,
    email: data?.email,
    first_name: data?.first_name,
    last_name: data?.last_name,
    blood_group: data?.blood_group,
    gender: data?.gender,
    phone: data?.phone,
    address: data?.address,
    is_available: data?.is_available,
    last_donation_date: data?.last_donation_date,
    image: null,
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // const res = userData;
    const res = await updateProfile(userData);
    console.log(res);
    // dispatch(setCredentials({ user_details: userData }));
  };
  const handleOnChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setUserData({ ...userData, image: file });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };


  return (
    <form
      className="flex flex-col gap-5"
      action=""
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
    >
      {/* UserName */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="username3" value="Username" />
        </div>
        <TextInput
          id="username3"
          icon={FaRegUserCircle}
          value={username}
          disabled
        />
      </div>
      {/* Email */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Your email" />
        </div>
        <TextInput
          id="email4"
          type="email"
          icon={HiMail}
          value={userData.email}
          disabled
        />
      </div>
      {/* Profile Picture */}
      <div className="max-w-md">
        <div>
          <Label htmlFor="file-upload-helper-text" value="Profile Picture" />
        </div>
        <FileInput id="file-upload-helper-text" name="image" accept="image/*" />
        <p className="italic">
          Current Profile Picture:{" "}
          <Link className="text-blue-500 pointer" to={data?.image}>
            click here
          </Link>
        </p>
      </div>
      {/* First Name */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="First Name" />
        </div>
        <TextInput
          id="email4"
          type="text"
          icon={MdDriveFileRenameOutline}
          value={userData.first_name}
          name="first_name"
        />
      </div>
      {/* Last Name */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Name" />
        </div>
        <TextInput
          id="email4"
          type="text"
          icon={MdDriveFileRenameOutline}
          value={userData.last_name}
          name="last_name"
        />
      </div>
      {/* Blood Group */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Name" />
        </div>
        <TextInput
          id="email4"
          type="text"
          icon={MdOutlineBloodtype}
          value={userData.blood_group}
          disabled
          name="blood_group"
        />
      </div>
      {/* Gender */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Name" />
        </div>
        <TextInput
          id="email4"
          type="text"
          icon={BsGenderAmbiguous}
          value={userData.gender}
          disabled
          name="gender"
        />
      </div>
      {/* Phone */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Phone" />
        </div>
        <TextInput
          id="email4"
          type="number"
          icon={FaPhoneAlt}
          value={userData.phone}
          name="phone"
        />
      </div>
      {/* Last Donation Date */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Donation Date" />
        </div>
        <TextInput
          id="email4"
          type="date"
          icon={MdDateRange}
          value={userData.last_donation_date}
          name="last_donation_date"
        />
      </div>
      {/* Address */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Name" />
        </div>
        <TextInput
          id="email4"
          type="text"
          icon={FaLocationDot}
          value={userData.address}
          name="address"
        />
      </div>
      <Button className="max-w-md" type="submit">
        Update
      </Button>
    </form>
  );
};

export default EditProfile;
