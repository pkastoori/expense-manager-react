import { Formik, Form } from "formik";
import * as yup from "yup";
import { FormInput } from "../../components/Shared/Form/FormInput";
import { TabTitle } from "../Shared/TabTitle";

export const SearchForm = () => {
  const initialValues = {
    name: "",
    purchaseDate: "",
  };

  const onSubmit = (values, submitProps) => {
    if (!values.name && !values.purchaseDate) return;
    console.log(values);
    submitProps.resetForm();
  };

  return (
    <div>
      <TabTitle title="Search Expenses" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        className="w-full mt-2"
      >
        {(formik) => {
          return (
            <Form className="w-full mt-2">
              <FormInput name="name" type="text" placeholder="Name" />
              <FormInput
                type="date"
                name="purchaseDate"
                placeholder="Purchase Date"
              />
              <div className="m-2 p-1 flex justify-center">
                <button
                  type="submit"
                  className="w-1/4 bg-gray-600 text-white rounded-md p-[4px]"
                >
                  Search
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
