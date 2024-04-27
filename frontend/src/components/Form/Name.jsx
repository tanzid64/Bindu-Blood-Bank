import { Label, TextInput } from "flowbite-react";
import React from "react";

const Name = ({ name, label, placeholder, onChange, error }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} />
      </div>
      <TextInput
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-red-600 text-sm italic pb-2">{error}</p>
    </div>
  );
};

export default Name;
