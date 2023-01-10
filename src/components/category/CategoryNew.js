import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";

function CategoryNew() {
  /* useContext */
  /* Call function from context to add new category. */
  const { addCategory, category, isExistingCategoryDescription, setIsExistingCategoryDescription } = useContext(CategoriesContext);

  /* States */
  /* State for category description text input - local state */
  const [currentCategoryDescription, setCurrentCategoryDescription] = useState("");
  /* State for ButtonAddCategory - toggling enable/disable - local state */
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="create-edit-container">
        <h5 className="edit-title">Kategorie erstellen</h5>
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
                //Set isExistingCategoryDescription to false before checking if a category description already exists
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
          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={(e) => {
              /* Prevent site from reload */
              e.preventDefault();
              /* Cretae new category object - Call addCategory function from context. */
              /* Check if input != "" & if category description is not already existing */
              if (!isDisabled && !isExistingCategoryDescription) {
                addCategory({ description: currentCategoryDescription });
              }
            }}
          >
            <FaCheck color="green" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryNew;
