import { Label, TextInput } from "flowbite-react";

const Password = ({ID,Name,Value, error}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={ID} value={Value} />
      </div>
      <TextInput id={ID} name={Name} type="password" shadow />
      <p className="text-red-600 text-sm italic pt-2">{error}</p>
    </div>
  );
};

export default Password;
