import React from "react";
import { useEffect } from "react";
import ArticlesItemContainer from "../components/article/ArticlesItemContainer";

function Articles({ setAsideMenueState }) {
  //useEffect - Ensure aside menue closes if component loads
  useEffect(() => {
    setAsideMenueState(false);
  }, []);

  //Returns LoadingSpinner if data is not yet loaded.
  return <ArticlesItemContainer />;
}

export default Articles;
