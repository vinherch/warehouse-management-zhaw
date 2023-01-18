//General styles
import "./styles/app.scss";

//Components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ASide from "./components/ASide";
import ErrorMessage from "./components/shared/ErrorMessage";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//Context
import { ArticlesProvider } from "./contexts/ArticlesContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CurrenciesProvider } from "./contexts/CurrenciesContext";
import { LocationsProvider } from "./contexts/LocationsContext";
import { StatusProvider } from "./contexts/StatusContext";
import { WarehousesProvider } from "./contexts/WarehousesContext";

//Views / Pages
import Articles from "./views/Articles";
import Categories from "./views/Categories";
import Currencies from "./views/Currencies";
import Locations from "./views/Locations";
import Status from "./views/Status";
import Warehouses from "./views/Warehouses";

function App() {
  /* Global States - Accessible for all components
  Initial fetch requests to create initial states */
  /* State for Article Handling */
  const [article, setArticle] = useState([]);
  /* State for Article Handling */
  const [category, setCategory] = useState([]);
  /* State for Currency Handling */
  const [currency, setCurrency] = useState([]);
  /* State for Location Handling */
  const [location, setLocation] = useState([]);
  /* State for Status Handling */
  const [status, setStatus] = useState([]);
  /* State for Warehouse Handling */
  const [warehouse, setWarehouse] = useState([]);

  /* State for loading Spinner Control */
  const [isLoading, setIsLoading] = useState(true);

  /* State for Error Control */
  const [isError, setIsError] = useState({ status: false, error: 0 });

  /* useEffect - Initial Loading of all component data when the pages loads -
   HTTP GET Request - /articles, /categories, /currencies, /locations, /status, /warehouses d*/
  useEffect(() => {
    fetchData();
  }, []);

  /* Fetch component data */
  const fetchData = async () => {
    /* Fetching Data */
    const articleData = await fetchArticleData();
    const categoryData = await fetchCategoryData();
    const currencyData = await fetchCurrencyData();
    const locationData = await fetchLocationData();
    const statusData = await fetchStatusData();
    const warehouseData = await fetchWarehouseData();

    /* Set Components States */
    //Set Article State
    setArticle(articleData);
    //Set Category State
    setCategory(categoryData);
    //Set Currency State
    setCurrency(currencyData);
    //Set Location State
    setLocation(locationData);
    //Set Status State
    setStatus(statusData);
    //Set Warehouse State
    setWarehouse(warehouseData);
    //Set isLoading to false after all data has been loaded
    setIsLoading(false);
  };

  const fetchArticleData = async () => {
    const res = await fetch("/api/v1/articles");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchCategoryData = async () => {
    const res = await fetch("/api/v1/categories");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchCurrencyData = async () => {
    const res = await fetch("/api/v1/currencies");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchLocationData = async () => {
    const res = await fetch("/api/v1/locations");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchStatusData = async () => {
    const res = await fetch("/api/v1/statuses");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchWarehouseData = async () => {
    const res = await fetch("/api/v1/warehouses");
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  /* App State for aside menue - false == close / true == open */
  const [asideMenueState, setAsideMenueState] = useState(false);

  /* Control aside menue state. Passing down via props to Aside */
  const asideMenueHandler = (ev) => {
    if (asideMenueState) {
      setAsideMenueState(false);
      return;
    } else {
      setAsideMenueState(true);
    }
  };

  return isError.status ? (
    <ErrorMessage error={isError.error} />
  ) : isLoading ? (
    <LoadingSpinner />
  ) : (
    <Router>
      <Header aSideMenueHandler={asideMenueHandler} asideMenueState={asideMenueState} />
      <Footer />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Dashboard />
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path={"/articles"}
          element={
            <>
              <ArticlesProvider setIsError={setIsError} article={article} setArticle={setArticle} status={status} category={category} currency={currency}>
                <Articles setAsideMenueState={setAsideMenueState} />
              </ArticlesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/categories"}
          element={
            <>
              <CategoriesProvider category={category} setCategory={setCategory} setIsError={setIsError}>
                <Categories setAsideMenueState={setAsideMenueState} />
              </CategoriesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/currencies"}
          element={
            <>
              <CurrenciesProvider currency={currency} setCurrency={setCurrency} setIsError={setIsError}>
                <Currencies setAsideMenueState={setAsideMenueState} />
              </CurrenciesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/locations"}
          element={
            <>
              <LocationsProvider location={location} setLocation={setLocation} setIsError={setIsError}>
                <Locations setAsideMenueState={setAsideMenueState} />
              </LocationsProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/status"}
          element={
            <>
              <StatusProvider status={status} setStatus={setStatus} setIsError={setIsError}>
                <Status setAsideMenueState={setAsideMenueState} />
              </StatusProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/warehouses"}
          element={
            <>
              <WarehousesProvider warehouse={warehouse} setWarehouse={setWarehouse} article={article} location={location} setIsError={setIsError}>
                <Warehouses setAsideMenueState={setAsideMenueState} />
              </WarehousesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
