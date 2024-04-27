import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Button } from "@nextui-org/react";
import { HiCheckCircle } from "react-icons/hi";

const DeveloperZone = () => {
  return (
    <>
      <SectionTitle title="FrontEnd" />
      <section>
        <HiCheckCircle className="inline" /> Technology: HTML, Tailwind CSS,
        React JS, React-Router-Dom, Redux Toolkit
      </section>
      <section>
        <HiCheckCircle className="inline mr-2" />
        Component Library: Flowbite-React, Next UI, ShadCn/ui, React-icons{" "}
      </section>
      <Button className="mt-5">Source Code</Button>
      <SectionTitle title="BackEnd" />
      <section>
        <HiCheckCircle className="inline mr-2" /> Technology: Python, Django
        Rest Framework, JWT Authentication, Cloudinary Storage, Supabase
        Postgresql Database
      </section>
      <Button className="mt-5">Source Code</Button>
    </>
  );
};

export default DeveloperZone;
