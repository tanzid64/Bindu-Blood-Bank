import {Label, TextInput } from "flowbite-react";

const Email = ({error}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="email2" value="Your email" />
      </div>
      <TextInput
        id="email2"
        name="email"
        type="email"
        placeholder="name@bindu.com"
        shadow
      />
      <p className="text-red-600 text-sm italic pt-2">{error}</p>
    </div>
  );
};

export default Email;
