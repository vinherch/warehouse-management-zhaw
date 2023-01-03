//General styles
import "./styles/app.scss";

//Components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ASide from "./components/ASide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
  const aSideMenueHandler = (ev) => {
    if (asideMenueState) {
      setAsideMenueState(false);
      return;
    }
    setAsideMenueState(true);
  };

  return (
    <Router>
      <Header aSideMenueHandler={aSideMenueHandler} asideMenueState={asideMenueState} />
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
        <Route path={"/articles"} element={<Articles />} />
      </Routes>
      <Routes>
        <Route path={"/categories"} element={<Categories />} />
      </Routes>
      <Routes>
        <Route path={"/currencies"} element={<Currencies />} />
      </Routes>
      <Routes>
        <Route path={"/locations"} element={<Locations />} />
      </Routes>
      <Routes>
        <Route path={"/status"} element={<Status />} />
      </Routes>
      <Routes>
        <Route path={"/warehouses"} element={<Warehouses />} />
      </Routes>
    </Router>
  );
}

export default App;
