"use client";

import { Label, Select } from "flowbite-react";

export default function Gender() {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Gender" />
      </div>
      <Select id="countries" required>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </Select>
    </div>
  );
}
