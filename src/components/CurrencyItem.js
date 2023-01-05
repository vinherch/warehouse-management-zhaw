import React from "react";
import ButtonEdit from "./shared/ButtonEdit";
import ButtonDelete from "./shared/ButtonDelete";

function CurrencyItem() {
  return (
    <tr>
      <td>Value ID</td>
      <td>Value Währungscode</td>
      <td>Value Land</td>
      <td style={{ padding: "0 0.7rem" }}>
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
}

export default CurrencyItem;
