import { Label, TextInput } from 'flowbite-react';
import React from 'react'

const Email = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="email1" value="Email" />
      </div>
      <TextInput
        id="email1"
        type="email"
        placeholder="name@flowbite.com"
        name='email'
      />
    </div>
  );
}

export default Email
