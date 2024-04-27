"use client";

import { Label, Select } from "flowbite-react";

export default function BloodGroup({ onChange, error }) {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="bloodGroup" value="Gender" />
      </div>
      <Select id="bloodGroup" name="blood_group" onChange={onChange}>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </Select>
      <p className="text-red-600 text-sm italic pb-2">{error}</p>
    </div>
  );
}
