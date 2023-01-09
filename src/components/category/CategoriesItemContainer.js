import React from "react";
import CategoryItem from "../components/CategoryItem";
// import ButtonNew from "../components/shared/ButtonNew";

function CategoriesItemContainer() {
  return (
    <div className="item-container">
      <div className="item-container-header">{/* <ButtonNew>Kategorie erfassen</ButtonNew> */}</div>
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
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoriesItemContainer;
