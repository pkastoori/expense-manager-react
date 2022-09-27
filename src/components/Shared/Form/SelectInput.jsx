import { Field } from "formik";

export const SelectInput = ({ name }) => {
  const options = [
    { id: "1", value: "vegetables" },
    { id: "2", value: "fruits" },
    { id: "3", value: "dairy" },
    { id: "4", value: "utilities" },
  ];

  return (
    <div className="m-2 p-2 flex flex-col items-center">
      <Field
        as="select"
        name={name}
        className="w-full outline-none p-2 border-b-2 rounded-lg text-xs"
      >
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.value}
          </option>
        ))}
      </Field>
    </div>
  );
};
