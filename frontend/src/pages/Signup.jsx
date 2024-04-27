import Email from "../components/Form/Email";
import Password from "../components/Form/Password";
import Name from "../components/Form/Name";
import Gender from "../components/Form/Gender";
import BloodGroup from "../components/Form/BloodGroup";
import SectionTitle from "../components/SectionTitle";
import banner from "/signup.jpg"; // Corrected the image file path
import { Card, CardBody, Image, Button, Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import MainToast from "../components/MainToast";

const Signup = () => {
  const [loading, setLoading] = useState();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password2: "",
    gender: "Male",
    blood_group: "A+",
  });
  const [fieldError, setFieldError] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password2: "",
    gender: "",
    blood_group: "",
  });
  const [nonFieldError, setNonFieldError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFieldError({ ...fieldError, [e.target.name]: "" });
    setNonFieldError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://sour-libby-thzone.koyeb.app/api/v1/auth/register/",
        formData
      );
      if (res.status === 201) {
        console.log(res);
      }
    } catch (e) {
      console.log(e.response.data.non_field_errors);
      setFieldError(e.response.data);
      if (e.response.data.non_field_errors) {
        setNonFieldError(e.response.data.non_field_errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {nonFieldError && <MainToast body={nonFieldError} type="danger" />}
      <SectionTitle title="Register Here" />
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div
              className="h-full bg-right dark:opacity-80 rounded-lg bg-cover bg-no-repeat col-span-6 md:col-span-4"
              style={{ backgroundImage: `url(${banner})` }}
            ></div>

            <form
              action=""
              className="col-span-6 md:col-span-8"
              onSubmit={handleSubmit}
            >
              <Email
                onChange={handleChange}
                error={fieldError.email && fieldError.email}
              />
              <Name
                placeholder="username"
                name="username"
                label="Username"
                onChange={handleChange}
                error={fieldError.username && fieldError.username}
              />
              <div className="grid grid-cols-2 gap-5">
                <Name
                  placeholder="Jhon"
                  name="first_name"
                  label="First Name"
                  onChange={handleChange}
                  error={fieldError.first_name && fieldError.first_name}
                />
                <Name
                  placeholder="Doe"
                  name="last_name"
                  label="Last Name"
                  onChange={handleChange}
                  error={fieldError.last_name && fieldError.last_name}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Gender
                  onChange={handleChange}
                  error={fieldError.gender && fieldError.gender}
                />
                <BloodGroup
                  onChange={handleChange}
                  error={fieldError.blood_group && fieldError.blood_group}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Password
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  error={fieldError.password && fieldError.password}
                />
                <Password
                  name="password2"
                  label="Confirm Password"
                  onChange={handleChange}
                  error={fieldError.password2 && fieldError.password2}
                />
              </div>
              <Button type="submit" className="my-2">
                {loading ? <Spinner /> : "Register"}
              </Button>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Signup;
