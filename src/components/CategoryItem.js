import React from "react";
import ButtonEdit from "../components/shared/ButtonEdit";
import ButtonDelete from "../components/shared/ButtonDelete";

function CategoryItem() {
  return (
    <tr>
      <td>Value ID</td>
      <td>Value description</td>
      <td style={{ padding: "0 0.7rem" }}>
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
}

export default CategoryItem;
