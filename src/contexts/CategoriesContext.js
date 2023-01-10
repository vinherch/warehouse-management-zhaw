import { createContext, useState } from "react";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children, category, setCategory, setIsError }) => {
  /* States */
  //State for checking which category is selected in the UI - Category Container
  const [selectedCategory, setSelectedCategory] = useState({});
  //State for checking if an item is in edit mode - toggle edit mask
  const [isEdit, setIsEdit] = useState(false);
  //State for new category - toggle category new mask
  const [isNewCategory, setIsNewCategory] = useState(false);
  // State for checking if a category description code already exists
  const [isExistingCategoryDescription, setIsExistingCategoryDescription] = useState(false);

  //Operations for Category Management
  //Create new Category
  const addCategory = async (newCategory) => {
    //Update setCategory state with new category (TODO : receive new ID from API - not yet implemented)
    // setCategory(
    //   category.map((e) => {
    //     if (e.id === data.id) {
    //       return { ...e, ...data };
    //     } else {
    //       return e;
    //     }
    //   })
    // );
    //setCategory(newCategory);

    //TODO POST Request /categories/ !!!!!!!!!!!!!

    //Set isNew state to false - close view for create category
    setIsNewCategory(false);
  };

  //Update existing category
  const updateCategory = async (data) => {
    //Update category state (setCategory in App Component)
    setCategory(
      category.map((e) => {
        if (e.id === data.id) {
          return { ...e, ...data };
        } else {
          return e;
        }
      })
    );
    //PUT Request /categores/:id to update category
    const res = await fetch(`/api/v1/categories/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: data.description }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
    }
    //set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedCategory state will be set to {} after uppdate
    setSelectedCategory({});
  };

  //Delete existing category
  const deleteCategory = async (data) => {
    //Update category state (setCategory in App Component)
    setCategory(
      category.filter((e) => {
        if (e.id !== data.id) {
          return { ...e, ...data };
        }
      })
    );

    //DELETE Request /categories/:id to delete category
    const res = await fetch(`/api/v1/categories/${data.id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
  };

  return (
    <CategoriesContext.Provider
      value={{ category, setCategory, isNewCategory, setIsNewCategory, setIsExistingCategoryDescription, isExistingCategoryDescription, selectedCategory, setSelectedCategory, isEdit, setIsEdit, addCategory, updateCategory, deleteCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
