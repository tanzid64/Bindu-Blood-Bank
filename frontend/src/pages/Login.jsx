import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { useLoginMutation } from "../redux/apiSlices/authApi";
import Password from "../components/Form/Password";
import Email from "../components/Form/Email";
import { Button, Card, CardBody, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { setToast } from "../redux/slices/toastSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [fieldError, setFieldError] = useState({
    email: "",
    password: "",
  });
  const [nonFieldError, setNonFieldError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFieldError({ ...fieldError, [e.target.name]: "" });
    setNonFieldError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setCredentials(res));
      localStorage.setItem("refreshToken", res.refresh_token);
      setFormData({
        email: "",
        password: "",
      });
      setFieldError({
        email: "",
        password: "",
      });
      setNonFieldError("");
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        dispatch(setToast({ message: err.data.detail, type: "error" }));
      } else if (err.status === 400) {
        setFieldError(err.data);
      }
    }
  };
  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            {/* <div
              className="h-full bg-right dark:opacity-80 rounded-lg bg-cover bg-no-repeat col-span-6 md:col-span-4"
              style={{ backgroundImage: `url(${banner})` }}
            ></div> */}

            <form
              action=""
              className="col-span-6 md:col-span-8"
              onSubmit={handleSubmit}
            >
              <Email
                onChange={handleChange}
                error={fieldError.email && fieldError.email}
              />
              <Password
                name="password"
                label="Password"
                onChange={handleChange}
                error={fieldError.password && fieldError.password}
              />
              <Button type="submit" className="my-2">
                {isLoading ? <Spinner /> : "Login"}
              </Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
