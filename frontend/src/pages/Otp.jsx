import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useConfirmEmailMutation } from "../redux/apiSlices/authApi";
import { setToast } from "../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitOtp, { isLoading }] = useConfirmEmailMutation();
  const [otp, setOtp] = useState("");
  const handleOnChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    const res = await submitOtp(otp);
    console.log(res);
    if (res?.data?.message) {
      console.log(res.data.message);
      dispatch(setToast({ message: `${res.data.message}`, type: "success" }));
      Navigate("/login");
    } else if (res?.error.data) {
      dispatch(setToast({ message: res.error.data.error, type: "danger" }));
    }
  };
  return (
    <div className="flex items-center justify-center min-h-96">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="otp" value="OTP" />
        </div>
        <TextInput
          id="otp"
          type="number"
          name="otp"
          onChange={handleOnChange}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Otp;
