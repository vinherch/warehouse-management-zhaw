import React from "react";
import { useEffect } from "react";
import ArticlesItemContainer from "../components/article/ArticlesItemContainer";

function Articles({ setAsideMenueState, setHeaderTitle, setIsAlert }) {
  //useEffect - Ensure aside menue closes if component loads
  //Set Header Title
  //Reset alert state
  useEffect(() => {
    setAsideMenueState(false);
    setHeaderTitle("Artikel");
    setIsAlert({ status: false, msg: "", statusText: "" });
  }, []);

  //Returns LoadingSpinner if data is not yet loaded.
  return <ArticlesItemContainer />;
}

export default Articles;
