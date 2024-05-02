import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import SectionTitle from "../../components/SectionTitle";
import { usePostContactMsgMutation } from "../../redux/apiSlices/contactApi";
import { setToast } from "../../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "@nextui-org/spinner";

const ContactUs = () => {
  const [postMessage, { isLoading }] = usePostContactMsgMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      description: e.target.description.value,
    };
    const res = await postMessage(data);
    if (res?.data) {
      dispatch(
        setToast({
          message: `Message Submitted. We will contact you through email.`,
          type: "success",
        })
      );
      e.target.reset();
    }
  };
  return (
    <>
      <SectionTitle title="Contact Us" />
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Your Name" />
          </div>
          <TextInput id="fullName" name="name" />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Name" />
          </div>
          <TextInput id="email" name="email" />
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Message" />
          </div>
          <Textarea
            rows={5}
            id="description"
            name="description"
            minLength={20}
          />
        </div>
        <Button type="submit" className="mt-5">
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default ContactUs;
