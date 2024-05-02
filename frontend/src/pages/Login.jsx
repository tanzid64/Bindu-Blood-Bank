import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";
import { useLoginMutation } from "../redux/apiSlices/authApi";
import Password from "../components/Form/Password";
import Email from "../components/Form/Email";
import { Button, Card, CardBody, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { setToast } from "../redux/slices/toastSlice";
import SectionTitle from "../components/SectionTitle";

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
      if (err.status === 401) {
        dispatch(setToast({ message: err.data.detail, type: "danger" }));
      } else if (err.status === 400) {
        setFieldError(err.data);
      }
    }
  };
  return (
    <main className="">
      <SectionTitle title="Login Here" />
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full "
        shadow="sm"
      >
        <CardBody>
          <div className="p-10">
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
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 pointer">
              Register Here
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
};

export default Login;
