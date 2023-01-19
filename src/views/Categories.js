import React from "react";
import CategoriesItemContainer from "../components/category/CategoriesItemContainer";
import { useEffect } from "react";

function Categories({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Kategorien");
  }, []);

  return <CategoriesItemContainer />;
}

export default Categories;
