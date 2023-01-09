import React, { useContext } from "react";
import CategoryItem from "./CategoryItem";
import ButtonCreateCategory from "./ButtonCreateCategory";
import CategoriesContext from "../../contexts/CategoriesContext";
import CategoryEdit from "./CategoryEdit";
import CategoryNew from "./CategoryNew";

function CategoriesItemContainer() {
  //useContext - Get Categories Data / State from context
  const { isEdit, isNewCategory, setIsNewCategory, category } = useContext(CategoriesContext);

  return (
    <div className="item-container">
      <div className="item-container-header">
        <ButtonCreateCategory setIsNewCategory={setIsNewCategory} isNewCategory={isNewCategory}>
          Kategorie erfassen
        </ButtonCreateCategory>
      </div>
      {isEdit && <CategoryEdit />}
      {isNewCategory && <CategoryNew />}
      <div className="item-container-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <td>Beschreibung</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {category.map((e) => (
              <CategoryItem item={e} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoriesItemContainer;
