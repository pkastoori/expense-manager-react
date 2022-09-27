import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FormInput } from "../Shared/Form/FormInput";
import { TabTitle } from "../Shared/TabTitle";

const expenseSchema = yup.object({
  name: yup
    .string()
    .required("Name cannot be blank")
    .min(3, "Name must be atleast 3 characters"),
  subCategory: yup.string().required("Sub Category cannot be blank"),
  createdAt: yup.date().required("Created Date cannot be blank"),
});

export default function CategoryForm() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    subCategory: "",
    createdAt: new Date().toISOString().substring(0, 10),
  };

  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    navigate("/");
  };

  return (
    <div>
      <TabTitle title="Add Category" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={expenseSchema}
        className="w-full mt-2"
      >
        {(formik) => {
          return (
            <Form className="w-full mt-2">
              <FormInput name="name" type="text" placeholder="Name" />
              <FormInput
                name="subCategory"
                type="text"
                placeholder="Sub Category"
              />
              <FormInput
                type="date"
                name="createdAt"
                placeholder="Created Date"
              />
              <div className="m-2 p-1 flex justify-center">
                <button
                  type="submit"
                  className="w-1/4 bg-gray-600 text-white rounded-md p-[4px]"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Add
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
