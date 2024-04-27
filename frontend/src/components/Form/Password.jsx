import { Label, TextInput } from 'flowbite-react';
import React from 'react'

const Password = ({name, label}) => {
  return (
    <div>
      <div className="mb-2 block w-full">
        <Label htmlFor="password1" value={label} />
      </div>
      <TextInput id="password1" type="password" name={name} className=''/>
    </div>
  );
}

export default Password