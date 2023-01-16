import React from "react";
import ButtonEditArticle from "./ButtonEditArticle";
import ButtonDeleteArticle from "./ButtonDeleteArticle";

function ArticleItem({ item, isEdit, setIsEdit }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.description}</td>
      <td>{item.category.description}</td>
      <td>{item.currency.currencyCode}</td>
      <td>{item.amount}</td>
      <td>{item.status.description}</td>
      <td style={{ padding: "0.5rem 0.8rem" }}>
        <ButtonEditArticle isEdit={isEdit} setIsEdit={setIsEdit} article={item} />
        <ButtonDeleteArticle item={item} />
      </td>
    </tr>
  );
}

export default ArticleItem;
