import { Formik, Form } from "formik";
import * as yup from "yup";
import { useCategoriesStore } from "../../store/categoryStore";
import { FormInput } from "../Shared/Form/FormInput";
import { TabTitle } from "../Shared/TabTitle";

const categorySchema = yup.object({
  name: yup
    .string()
    .required("Name cannot be blank")
    .min(3, "Name must be atleast 3 characters"),
  subCategory: yup.string().required("Sub Category cannot be blank"),
  createdAt: yup.date().required("Created Date cannot be blank"),
});

export default function AddCategoryForm({ category, update }) {
  let addCategories = useCategoriesStore((state) => state.addCategories);
  let updateCategory = useCategoriesStore((state) => state.updateCategory);

  const initialValues = {
    name: update && category ? category.name : "",
    subCategory: "",
    createdAt: new Date().toISOString().substring(0, 10),
  };

  const onSubmit = (values, submitProps) => {
    let subCategories;

    if (values.subCategory.indexOf(",") > 0) {
      subCategories = values.subCategory.split(", ");
    } else {
      subCategories = [values.subCategory];
    }

    if (update) {
      subCategories.map((sub) => category.subCategories.push(sub));
      updateCategory(category);
    } else {
      let category = {
        _id: Math.random() * new Date().getMilliseconds().toString(),
        name: values.name,
        subCategories: subCategories,
        createdAt: values.createdAt,
      };
      addCategories(category);
    }
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <div>
      <TabTitle title={update ? "Update Category" : "Add Category"} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={categorySchema}
        className="w-full mt-2"
        enableReinitialize
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
