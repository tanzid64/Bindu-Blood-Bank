import { Label, Select } from "flowbite-react";

export default function BloodGroup({error}) {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="bloodGroup" value="Blood Group" />
      </div>
      <Select id="bloodGroup" name="bloodGroup" className="w-full">
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
      </Select>
      <p className="text-red-600 text-sm italic pt-2">{error}</p>
    </div>
  );
}
