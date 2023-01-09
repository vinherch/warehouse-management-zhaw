import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";

function CategoryNew() {
  /* useContext */
  /* Call function from context to add new category. */
  const { addCategory } = useContext(CategoriesContext);

  /* States */
  /* State for category description text input - local state */
  const [currentCategoryDescription, setCurrentCategoryDescription] = useState("");
  /* State for ButtonAddArticle - toggling enable/disable - local state */
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
              value={currentCategoryDescription}
              onChange={(e) => {
                //Check if text input length is not 0
                if (e.target.value.trim().length != 0) {
                  setIsDisabled(false);
                } else {
                  setIsDisabled(true);
                }
                setCurrentCategoryDescription(e.target.value);
              }}
            />
          </div>
          <button
            className={`btn-add ${isDisabled && "btn-disabled"}`}
            onClick={() => {
              /* Cretae new category object - Call addCategory function from context. */
              if (!isDisabled) {
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
