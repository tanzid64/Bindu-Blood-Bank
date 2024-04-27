import { Label, TextInput } from "flowbite-react";
import React from "react";

const Name = ({name, label, placeholder}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value={label} />
      </div>
      <TextInput
        id="name"
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Name;
