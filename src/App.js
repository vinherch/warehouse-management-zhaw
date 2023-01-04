//General styles
import "./styles/app.scss";

//Components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ASide from "./components/ASide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
  /* State for aside menue - false == close / true == open */
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

  return (
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
            <ArticlesProvider>
              <Articles setAsideMenueState={setAsideMenueState} />
            </ArticlesProvider>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/categories"}
          element={
            <CategoriesProvider>
              <Categories setAsideMenueState={setAsideMenueState} />
            </CategoriesProvider>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/currencies"}
          element={
            <CurrenciesProvider>
              <Currencies setAsideMenueState={setAsideMenueState} />
            </CurrenciesProvider>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/locations"}
          element={
            <LocationsProvider>
              <Locations setAsideMenueState={setAsideMenueState} />
            </LocationsProvider>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/status"}
          element={
            <StatusProvider>
              <Status setAsideMenueState={setAsideMenueState} />
            </StatusProvider>
          }
        />
      </Routes>
      <Routes>
        <Route
          path={"/warehouses"}
          element={
            <WarehousesProvider>
              <Warehouses setAsideMenueState={setAsideMenueState} />
            </WarehousesProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
