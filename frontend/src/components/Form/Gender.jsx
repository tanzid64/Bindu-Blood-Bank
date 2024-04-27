"use client";

import { Label, Select } from "flowbite-react";

export default function Gender({ onChange, error }) {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="gender" value="Gender" />
      </div>
      <Select id="gender" name="gender" onChange={onChange}>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </Select>
      <p className="text-red-600 text-sm italic pb-2">{error}</p>
    </div>
  );
}
