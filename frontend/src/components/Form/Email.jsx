import { Label, TextInput } from "flowbite-react";
import React from "react";

const Email = ({ onChange, error }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="email1" value="Email" />
      </div>
      <TextInput
        id="email1"
        type="email"
        placeholder="name@flowbite.com"
        name="email"
        onChange={onChange}
      />
      <p className="text-red-600 text-sm italic pb-2">{error}</p>
    </div>
  );
};

export default Email;
