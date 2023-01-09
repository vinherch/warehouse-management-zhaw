import React, { useState } from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import CategoriesContext from "../../contexts/CategoriesContext";

function CategoryEdit() {
  //useContext for getting data of selected category.
  const { selectedCategory, updateCategory } = useContext(CategoriesContext);

  /* States */
  /* State for category description text input - local state */
  const [currentCategoryDescription, setCurrentCategoryDescription] = useState(selectedCategory.description);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Kategorie Bearbeiten</h5>
        <form>
          <div>
            <label htmlFor="category-description">Beschreibung: </label>
            <input
              type="text"
              id="category-description"
              value={currentCategoryDescription}
              onChange={(e) => {
                setCurrentCategoryDescription(e.target.value);
              }}
            />
          </div>
          {/* Call updateCategory function from context. 
        Object destructuring with selectedArticle. Update with new data */}
          <button
            onClick={(e) => {
              e.preventDefault();
              updateCategory({ id: selectedCategory.id, description: currentCategoryDescription });
            }}
            className="btn-update"
          >
            <FaCheck color="green" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryEdit;
