import { Button, Checkbox, Label } from "flowbite-react";
import Gender from "./Gender";
import BloodGroup from "./BloodGroup";
import Username from "./Username";
import Email from "./Email";
import { useState } from "react";
import { useRegisterUserMutation } from "../../Services/userAuthApi";
import Password from "./Password";
import MainAlert from "../../MainAlert";
import Loader from "../../Loader";

// import Link from "next/link";

export default function SignUpForm() {
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const actualData = {
      username: data.get("username"),
      gender: data.get("gender"),
      blood_group: data.get("bloodGroup"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("confirm_password"),
    };
    console.log(actualData);
    const res = await registerUser(actualData);
    console.log(res);
    if (res.data) setSuccess(res.data);
    if (res.error.data) setError(res.error.data);
  };
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <Username error={error.username ? error.username[0] : ""} />
      <Email error={error.email ? error.email : ""} />
      <div className="md:flex items-start justify-between gap-5">
        <Gender error={error.gender ? error.gender[0] : ""} />
        <BloodGroup error={error.blood_group ? error.blood_group[0] : ""} />
      </div>
      <div className="md:flex items-start justify-between gap-5">
        <Password
          ID="password"
          Name="password"
          error={error.password ? error.password[0] : ""}
          Value="Password"
        />
        <Password
          ID="password2"
          Name="confirm_password"
          error={error.password2 ? error.password2[0] : ""}
          Value="Confirm Password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
        </Label>
      </div>
      <Button type="submit">
        {isLoading ? <Loader /> : "Register new account"}
      </Button>
      <MainAlert
        color="failure"
        msg={error.non_field_errors ? error.non_field_errors : ""}
      />
      <MainAlert color="success" msg={success.message ? success.message : ""} />
    </form>
  );
}
