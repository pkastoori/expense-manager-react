import { ErrorMessage, Field } from "formik";
import React from "react";
import { FormError } from "./FormError";

export const FormInput = ({ type, name, placeholder }) => {
  return (
    <div className="m-2 p-2 flex flex-col items-center">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full  outline-none p-2 border-b-2 rounded-lg placeholder:text-gray-600 placeholder:text-xs text-xs"
      />
      <ErrorMessage name={name} component={FormError} />
    </div>
  );
};
