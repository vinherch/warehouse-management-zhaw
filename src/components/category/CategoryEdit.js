import React, { useState } from "react";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import CategoriesContext from "../../contexts/CategoriesContext";

function CategoryEdit() {
  //useContext for getting data of selected category.
  const { selectedCategory, updateCategory, category, setIsExistingCategoryDescription, isExistingCategoryDescription } = useContext(CategoriesContext);

  /* States */
  /* State for category description text input - local state */
  const [currentCategoryDescription, setCurrentCategoryDescription] = useState(selectedCategory.description);
  /* State for category update button - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

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
              style={{ backgroundColor: isExistingCategoryDescription && "rgba(255,0,0,0.3)" }}
              value={currentCategoryDescription}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentCategoryDescription(e.target.value);
                //Set isExistingCategoryDescription to false before checking if currency code exists
                setIsExistingCategoryDescription(false);
                category.map((c) => {
                  if (c.description === e.target.value) {
                    setIsExistingCategoryDescription(true);
                  }
                });
              }}
            />
          </div>
          {/* If check category description returns true - show message*/}
          {isExistingCategoryDescription && <div style={{ margin: "0.3rem 0rem 1rem 0rem", backgroundColor: "lightyellow" }}>Kategorie / Beschreibung existiert bereits</div>}
          {/* Call updateCategory function from context. 
        Object destructuring with selectedCategory. Update with new data */}
          <button
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Check if input != "" & if category description is not already existing */
              if (!isDisabled && !isExistingCategoryDescription) {
                updateCategory({ id: selectedCategory.id, description: currentCategoryDescription });
              }
            }}
            className={`btn-add ${isDisabled && "btn-disabled"}`}
          >
            <FaCheck color="green" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryEdit;
