import React from "react";
import CategoriesContext from "../contexts/CategoriesContext";
import { useEffect, useContext } from "react";

function Categories({ setAsideMenueState }) {
  const { data } = useContext(CategoriesContext);

  console.log(data);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Categories</div>;
}

export default Categories;
