import { Label, TextInput } from "flowbite-react";
import React from "react";

const Password = ({ name, label, onChange, error }) => {
  return (
    <div>
      <div className="mb-2 block w-full">
        <Label htmlFor={name} value={label} />
      </div>
      <TextInput id={name} type="password" name={name} onChange={onChange} />
      <p className="text-red-600 text-sm italic pb-2">{error}</p>
    </div>
  );
};

export default Password;
