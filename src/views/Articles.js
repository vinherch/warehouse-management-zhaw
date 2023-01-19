import React from "react";
import { useEffect } from "react";
import ArticlesItemContainer from "../components/article/ArticlesItemContainer";

function Articles({ setAsideMenueState, setHeaderTitle }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Artikel");
  }, []);

  //Returns LoadingSpinner if data is not yet loaded.
  return <ArticlesItemContainer />;
}

export default Articles;
