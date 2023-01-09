import React from "react";
import CategoriesItemContainer from "../components/category/CategoriesItemContainer";
import { useEffect } from "react";

function Categories({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <CategoriesItemContainer />;
}

export default Categories;
