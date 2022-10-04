import create from "zustand";

let categoryStore = (set) => ({
  categories: [],
  setCategories: (categories) =>
    set((state) => (state.categories = categories)),
  addCategories: (category) =>
    set((state) => {
      return { categories: [...state.categories, category] };
    }),
  updateCategory: (category) =>
    set((state) => {
      state.categories.filter((cat) => cat._id !== category._id).push(category);
      return {
        categories: state.categories,
      };
    }),
  deleteCategory: (id) =>
    set((state) => {
      return {
        categories: state.categories.filter((category) => category._id !== id),
      };
    }),
});

export const useCategoriesStore = create(categoryStore);
