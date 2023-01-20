//General styles
import "./styles/app.scss";

//Components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ASide from "./components/ASide";
import ErrorMessage from "./components/shared/ErrorMessage";
import ErrorRoute from "./components/shared/ErrorRoute";
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

  /* State for Error & Alert Control */
  const [isError, setIsError] = useState({ status: false, error: 0 });
  const [isAlert, setIsAlert] = useState({ status: false, statusText: "", msg: "" });

  /* Header Title - Depending on route */
  const [headerTitle, setHeaderTitle] = useState("");

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
    /*If fetch request failes - show error */
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchCategoryData = async () => {
    const res = await fetch("/api/v1/categories");
    /*If fetch request failes - show error */
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchCurrencyData = async () => {
    const res = await fetch("/api/v1/currencies");
    /*If fetch request failes - show error */
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchLocationData = async () => {
    const res = await fetch("/api/v1/locations");
    /*If fetch request failes - show error */
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchStatusData = async () => {
    const res = await fetch("/api/v1/statuses");
    /*If fetch request failes - show error */
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    return await res.json();
  };

  const fetchWarehouseData = async () => {
    const res = await fetch("/api/v1/warehouses");
    /*If fetch request failes - show error */
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

  /* Handling for CSV Download */
  const downloadCSV = async (entity, filename) => {
    //GET Request /articles/csv
    const res = await fetch(`/api/v1/${entity}/csv`, {
      method: "GET",
    });
    if (res.status === 500) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    //Create data blob
    const data = await res.blob();
    const url = window.URL.createObjectURL(new Blob([data]));
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${filename}.csv`;
    downloadLink.click();
  };

  return isError.status ? (
    <ErrorMessage error={isError.error} />
  ) : isLoading ? (
    <LoadingSpinner />
  ) : (
    <Router>
      <Header aSideMenueHandler={asideMenueHandler} asideMenueState={asideMenueState} headerTitle={headerTitle} />
      <Footer />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Dashboard setHeaderTitle={setHeaderTitle} />
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route
          path={"/articles"}
          element={
            <>
              <ArticlesProvider setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} article={article} setArticle={setArticle} status={status} category={category} currency={currency} downloadCSV={downloadCSV}>
                <Articles setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </ArticlesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route
          path={"/categories"}
          element={
            <>
              <CategoriesProvider category={category} setCategory={setCategory} setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} downloadCSV={downloadCSV}>
                <Categories setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </CategoriesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />

        <Route
          path={"/currencies"}
          element={
            <>
              <CurrenciesProvider currency={currency} setCurrency={setCurrency} setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} downloadCSV={downloadCSV}>
                <Currencies setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </CurrenciesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route
          path={"/locations"}
          element={
            <>
              <LocationsProvider location={location} setLocation={setLocation} setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} downloadCSV={downloadCSV}>
                <Locations setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </LocationsProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route
          path={"/status"}
          element={
            <>
              <StatusProvider status={status} setStatus={setStatus} setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} downloadCSV={downloadCSV}>
                <Status setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </StatusProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route
          path={"/warehouses"}
          element={
            <>
              <WarehousesProvider warehouse={warehouse} setWarehouse={setWarehouse} article={article} location={location} setIsError={setIsError} isAlert={isAlert} setIsAlert={setIsAlert} downloadCSV={downloadCSV}>
                <Warehouses setAsideMenueState={setAsideMenueState} setHeaderTitle={setHeaderTitle} setIsAlert={setIsAlert} />
              </WarehousesProvider>
              <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
            </>
          }
        />
        <Route path={"/*"} element={<ErrorRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
