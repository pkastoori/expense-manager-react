import { Field } from "formik";

export const SelectInput = ({ name, options }) => {
  return (
    <div className="m-2 p-2 flex flex-col items-center">
      <Field
        as="select"
        name={name}
        className="w-full outline-none p-2 border-b-2 rounded-lg text-xs"
      >
        {options?.map((option) => (
          <option value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </Field>
    </div>
  );
};
