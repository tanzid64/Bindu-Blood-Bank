import Email from "../components/Form/Email";
import Password from "../components/Form/Password";
import Name from "../components/Form/Name";
import Gender from "../components/Form/Gender";
import BloodGroup from "../components/Form/BloodGroup";
import SectionTitle from "../components/SectionTitle";
import banner from "/signup.jpg";

import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

const Signup = () => {
  return (
    <>
      <SectionTitle title="Register Here" />
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image  src={banner} alt="NextUI Album Cover" />
            </div>

            <form action="" className="col-span-6 md:col-span-8">
              <Email />
              <div className="grid grid-cols-2 gap-5">
                <Name placeholder="Jhon" name="firstName" label="First Name" />
                <Name placeholder="Doe" name="lastName" label="Last Name" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Gender />
                <BloodGroup />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Password name="password1" label="Password" />
                <Password name="password2" label="Confirm Password" />
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Signup;
