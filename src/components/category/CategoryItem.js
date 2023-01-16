import React from "react";
import { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import CategoriesContext from "../../contexts/CategoriesContext";

function CategoryItem({ item }) {
  const { isEdit, setIsEdit, setSelectedCategory, deleteCategory } = useContext(CategoriesContext);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.description}</td>
      <td style={{ padding: "0.5rem 0.8rem" }}>
        <button
          className="btn-edit"
          onClick={() => {
            /* Toggle Edit View */
            setIsEdit(!isEdit);
            /*Set category item as selected in context state */
            setSelectedCategory(item);
          }}
        >
          <FaEdit color="black" />
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            //on Click - Call delete function from categories context
            deleteCategory(item);
          }}
        >
          <FaTimes color="red" />
        </button>
      </td>
    </tr>
  );
}

export default CategoryItem;
