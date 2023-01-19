import React from "react";
import CategoriesItemContainer from "../components/category/CategoriesItemContainer";
import { useEffect } from "react";

function Categories({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Kategorien");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  return <CategoriesItemContainer />;
}

export default Categories;
