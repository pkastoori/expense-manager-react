import React, { useState } from "react";
import { BiHide, BiShow, BiPencil, BiTrash } from "react-icons/bi";
import { useCategoriesStore } from "../../store/categoryStore";

export const ShowCategories = ({ setUpdate, setCategory }) => {
  const categories = useCategoriesStore((state) => state.categories);
  const deleteCategory = useCategoriesStore((state) => state.deleteCategory);

  const [item, setItem] = useState("");

  return (
    <div className="mt-6">
      {categories?.map((category) => (
        <div className="m-2 p-2 bg-slate-200 rounded-md" key={category._id}>
          <div className="flex items-center justify-between">
            <p className="uppercase text-sm font-semibold">{category.name}</p>
            <div className="flex">
              {item.length > 0 && item === category.name ? (
                <BiHide onClick={() => setItem("")} className="mr-4" />
              ) : (
                <BiShow
                  onClick={() => setItem(category.name)}
                  className="mr-4"
                />
              )}
              <BiPencil
                className="mr-4"
                onClick={() => {
                  setUpdate((prev) => !prev);
                  setCategory(category);
                }}
              />
              <BiTrash
                onClick={() => {
                  deleteCategory(category._id);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {category.subCategories.map(
              (sub, key) =>
                item === category.name && (
                  <p
                    key={key}
                    className="text-xs font-semibold rounded-lg bg-slate-300 p-2 mt-1"
                  >
                    {sub}
                  </p>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
