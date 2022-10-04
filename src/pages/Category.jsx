import { useState } from "react";
import AddCategoryForm from "../components/Category/AddCategoryForm";
import { ShowCategories } from "../components/Category/ShowCategories";

export const Category = () => {
  const [update, setUpdate] = useState(false);
  const [category, setCategory] = useState(null);

  return (
    <div className="grid sm:grid-cols-2 p-5">
      <div>
        <AddCategoryForm update={update} category={category} />
      </div>
      <div>
        <ShowCategories setUpdate={setUpdate} setCategory={setCategory} />
      </div>
    </div>
  );
};
