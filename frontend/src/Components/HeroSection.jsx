import { Button, Flowbite } from "flowbite-react";
import banner from "/images/banner.png";
const HeroSection = () => {
  return (
    <Flowbite>
      <div className="flex flex-col-reverse md:flex-row lg:justify-around ">
        <div className="place-self-center md:p-5 text-center md:text-left">
          <h1 className="max-w-2xl lg:w-full mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-700 dark:text-white">
            Give a priceless donation
          </h1>
          <p className=" lg:w-full mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
            The most generous donation is a blood donation. The most generous
            donation is a blood donation.
          </p>
          <p className=" lg:w-full mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
            Total active users:
            <br />
            Total donated:
          </p>

          <Button className="inline-flex items-center justify-center mr-3">
            Get Started
          </Button>
          <Button className="inline-flex items-center justify-center mr-3">
            Dashboard
          </Button>
        </div>
        {/* Image */}
        <div className="p-5 md:pt-5 md:col-span-2 text-center">
          <img src={banner} alt="" className="w-[35rem]" />
        </div>
      </div>
    </Flowbite>
  );
};

export default HeroSection;
