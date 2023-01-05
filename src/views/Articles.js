import React from "react";
import { useEffect, useContext } from "react";
import ArticlesContext from "../contexts/ArticlesContext";
import ArticlesItemContainer from "../components/ArticlesItemContainer";

function Articles({ setAsideMenueState }) {
  const { data } = useContext(ArticlesContext);

  console.log(data);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <ArticlesItemContainer />;
}

export default Articles;
