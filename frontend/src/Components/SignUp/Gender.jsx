import { Label, Select } from "flowbite-react";

export default function Gender({error}) {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="gender" value="Gender" />
      </div>
      <Select id="gender" name="gender">
        <option>Male</option>
        <option>Female</option>
      </Select>
      <p className="text-red-600 text-sm italic pt-2">{error}</p>
    </div>
  );
}
