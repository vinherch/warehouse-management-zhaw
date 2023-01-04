import React from "react";
import { useEffect, useContext } from "react";
import ArticlesContext from "../contexts/ArticlesContext";

function Articles({ setAsideMenueState }) {
  const { data } = useContext(ArticlesContext);

  console.log(data);

  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  return <div>Hello from Articles</div>;
}

export default Articles;
