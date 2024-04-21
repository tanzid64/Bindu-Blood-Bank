import React, { useState } from "react";
import Password from "./SignUp/Password";
import Email from "./SignUp/Email";
import { Button } from "flowbite-react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../Redux/apiSlice/userAuthApi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(actualData);
    const res = await loginUser(actualData);
    // console.log(res);
    if (res.data) {
      const data = res.data;
      console.log(data);
      dispatch(setUserData(data));
      toast.success(res.data.message);
      navigate("/");
    } else if (res.error.status === 401) {
      const error = res.error.data;
      if (error.non_field_errors) {
        // toast.error(error.non_field_errors[0]);
      }
      // setError(res.error.data);
    }
  };
  return (
    <form
      className="flex max-w-md flex-col gap-4 p-2 md:p-0"
      onSubmit={handleSubmit}
    >
      <Email error={error.email ? error.email : ""} />

      <Password
        ID="password"
        Name="password"
        error={error.password ? error.password[0] : ""}
        Value="Password"
      />
      <Button type="submit" disabled={isLoading && true}>
        {isLoading ? <Loader /> : "Login"}
      </Button>
    </form>
  );
};

export default Login;
