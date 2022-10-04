import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FormInput } from "../Shared/Form/FormInput";
import { SelectInput } from "../Shared/Form/SelectInput";
import { TabTitle } from "../Shared/TabTitle";
import { useCategoriesStore } from "../../store/categoryStore";

const expenseSchema = yup.object({
  name: yup
    .string()
    .required("Name cannot be blank")
    .min(3, "Name must be atleast 3 characters"),
  price: yup
    .number()
    .required("Price cannot be blank")
    .min(1, "Price should be greater than 1"),
  quantity: yup.string().required("Quantity cannot be blank"),
  purchaseDate: yup.date().required("Purchase Date cannot be blank"),
});

export default function ExpenseForm() {
  const navigation = useNavigate();
  const categories = useCategoriesStore((state) => state.categories);

  const initialValues = {
    category: categories[0]?.name,
    name: "",
    price: "",
    quantity: "",
    purchaseDate: new Date().toISOString().substring(0, 10),
    comment: "",
  };

  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <div>
      <TabTitle title="Add Expense" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={expenseSchema}
        className="w-full mt-2"
      >
        {(formik) => {
          return (
            <Form className="w-full mt-2">
              <SelectInput name="category" options={categories} />
              <FormInput name="name" type="text" placeholder="Name" />
              <FormInput name="quantity" type="text" placeholder="Quantity" />
              <FormInput type="number" name="price" placeholder="Price" />
              <FormInput
                type="date"
                name="purchaseDate"
                placeholder="Purchase Date"
              />
              <FormInput type="text" name="comment" placeholder="Comment" />
              <div className="m-2 p-1 flex justify-around">
                <button
                  className="w-1/4 bg-gray-600 text-white rounded-md p-[4px]"
                  onClick={() => navigation("/")}
                >
                  Back
                </button>
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
