import { useState, useCallback } from "react";
import { TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Switch } from "@nextui-org/react";

const Filter = ({ onFilterChange }) => {
  const [filterData, setFilterData] = useState({
    bloodGroup: "",
    search: "",
    availableDonor: "",
  });

  const handleFilterChange = useCallback(
    (fieldName, value) => {
      if (fieldName === "availableDonor" && typeof value === "object") {
        value = value.target.checked ? true : "";
      }
      setFilterData((prevFilterData) => ({
        ...prevFilterData,
        [fieldName]: value,
      }));
      onFilterChange({ [fieldName]: value });
    },
    [onFilterChange]
  );

  return (
    <form className="my-5 flex items-center gap-3">
      <div className="max-w-24">
        <Select
          id="bloodGroup"
          name="bloodGroup"
          className="w-full"
          onChange={(e) => handleFilterChange("bloodGroup", e.target.value)}
        >
          <option value="">None</option>
          <option value="A%2B">A+</option>
          <option value="A-">A-</option>
          <option value="B%2B">B+</option>
          <option value="B-">B-</option>
          <option value="AB%2B">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O%2B">O+</option>
          <option value="O-">O-</option>
        </Select>
      </div>
      <div className="">
        <TextInput
          id="base"
          type="text"
          sizing="md"
          className="mx-2 inline-block"
          placeholder="Search by name or email"
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>
      <div className="">
        <Switch
          defaultSelected
          onChange={(e) => handleFilterChange("availableDonor", e)}
          name="availableDonor"
        >
          Available Donor
        </Switch>
      </div>
    </form>
  );
};

export default Filter;
