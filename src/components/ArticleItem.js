import React from "react";
import ButtonEdit from "./shared/ButtonEdit";
import ButtonDelete from "./shared/ButtonDelete";

function ArticleItem() {
  return (
    <tr>
      <td>Value ID</td>
      <td>Value description</td>
      <td>Value category</td>
      <td>Value currency</td>
      <td>Value status</td>
      <td>Value value</td>
      <td style={{ padding: "0 0.7rem" }}>
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
}

export default ArticleItem;
