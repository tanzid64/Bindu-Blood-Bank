"use client";

import { Label, Select } from "flowbite-react";

export default function BloodGroup() {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Gender" />
      </div>
      <Select id="countries" required>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </Select>
    </div>
  );
}
