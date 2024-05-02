import { FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  setCredentials,
} from "../../redux/slices/authSlice";
import { Button, Spinner } from "@nextui-org/react";
import { useUpdateUserProfileMutation } from "../../redux/apiSlices/authApi";
import { setToast } from "../../redux/slices/toastSlice";
const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();
  const data = useSelector(selectCurrentUser);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await updateProfile(formData);
    if (res?.data) {
      dispatch(setCredentials({ user_details: res.data }));
      dispatch(
        setToast({ message: `Profile updated successfully.`, type: "success" })
      );
      navigate(`/profile/${data.username}`);
    }
  };

  return (
    <form className="flex flex-col gap-6" action="" onSubmit={handleOnSubmit}>
      <div className="flex flex-col md:flex-row gap-5">
        {/* UserName */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="username3" value="Username" />
          </div>
          <TextInput
            id="username3"
            icon={FaRegUserCircle}
            value={data.username}
            name="username"
            disabled
          />
        </div>
        {/* Profile Picture */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="file-upload-helper-text" value="Profile Picture" />
          </div>
          <FileInput
            id="file-upload-helper-text"
            name="image"
            accept="image/*"
          />
          <p className="italic text-sm">
            Current Profile Picture:{" "}
            <Link className="text-blue-500 pointer" to={data?.image}>
              click here
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Email */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            value={data.email}
            name="email"
            disabled
          />
        </div>
        {/* Phone */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Phone" />
          </div>
          <TextInput
            id="email4"
            type="number"
            icon={FaPhoneAlt}
            value={data.phone}
            name="phone"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* First Name */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="First Name" />
          </div>
          <TextInput
            id="email4"
            type="text"
            icon={MdDriveFileRenameOutline}
            value={data.first_name}
            name="first_name"
          />
        </div>
        {/* Last Name */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Last Name" />
          </div>
          <TextInput
            id="email4"
            type="text"
            icon={MdDriveFileRenameOutline}
            value={data.last_name}
            name="last_name"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Blood Group */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Last Name" />
          </div>
          <TextInput
            id="email4"
            type="text"
            icon={MdOutlineBloodtype}
            value={data.blood_group}
            disabled
            name="blood_group"
          />
        </div>
        {/* Gender */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Last Name" />
          </div>
          <TextInput
            id="email4"
            type="text"
            icon={BsGenderAmbiguous}
            value={data.gender}
            disabled
            name="gender"
          />
        </div>
      </div>
      {/* Address */}
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Name" />
        </div>
        <Textarea
          id="email4"
          type="text"
          icon={FaLocationDot}
          value={data.address}
          name="address"
          row={5}
        />
      </div>
      {/* Last Donation Date */}
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Last Donation Date" />
        </div>
        <TextInput
          id="email4"
          type="date"
          icon={MdDateRange}
          value={data.last_donation_date}
          name="last_donation_date"
        />
      </div>
      <Button className="max-w-sm" type="submit">
        {isLoading ? <Spinner /> : "Update"}
      </Button>
    </form>
  );
};

export default EditProfile;
