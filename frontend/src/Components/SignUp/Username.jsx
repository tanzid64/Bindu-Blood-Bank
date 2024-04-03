import { Label, TextInput } from "flowbite-react";

const Username = ({error}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="username" value="Username" />
      </div>
      <TextInput id="username" type="text" name="username" shadow />
      <p class="text-red-600 text-sm italic pt-2">{error}</p>
    </div>
  );
};

export default Username;
