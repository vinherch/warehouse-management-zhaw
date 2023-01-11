import { createContext, useState } from "react";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children, article, setArticle, status, category, currency, setIsError }) => {
  /* States */
  //State for checking which article is selected in the UI - Article Container
  const [selectedArticle, setSelectedArticle] = useState({});
  //State for checking if an item is in edit mode - toggle edis mask
  const [isEdit, setIsEdit] = useState(false);
  //State for new article - toggle article new mask
  const [isNewArticle, setIsNewArticle] = useState(false);
  // State for checking if a article description already exists
  const [isExistingArticleDescription, setIsExistingArticleDescription] = useState(false);

  //Operations for Article Management
  //Create new Article
  const addArticle = async (newArticle) => {
    //POST Request /articles/
    const res = await fetch(`/api/v1/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    const data = await res.json();
    //Update setArticle state with new article
    setArticle([data, ...article]);
    console.log(data);
    //Set isNew state to false - close view for create article
    setIsNewArticle(false);
  };

  //Delete existing Article
  const deleteArticle = async (data) => {
    //Update article state (setArticle in App Component)
    setArticle(
      article.filter((e) => {
        if (e.id !== data.id) {
          return { ...e, ...data };
        }
      })
    );

    //DELETE Request /articles/:id to delete article
    const res = await fetch(`/api/v1/articles/${data.id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
  };

  //Update existing Article
  const updateArticle = async (data) => {
    //Update article state (setArticle in App Component)
    setArticle(
      article.map((e) => {
        if (e.id === data.id) {
          return { ...e, ...data };
        } else {
          return e;
        }
      })
    );

    //PUT Request /articles/:id to update article
    const res = await fetch(`/api/v1/articles/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: data.description, currency: { id: data.currency.id }, category: { id: data.category.id }, status: { id: data.status.id }, amount: data.amount }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
    }
    //set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedArticle state will be set to {} after uppdate
    setSelectedArticle({});
  };

  return (
    <ArticlesContext.Provider
      value={{
        article,
        setArticle,
        isNewArticle,
        setIsNewArticle,
        isExistingArticleDescription,
        setIsExistingArticleDescription,
        category,
        currency,
        selectedArticle,
        setSelectedArticle,
        isEdit,
        setIsEdit,
        status,
        addArticle,
        updateArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesContext;
