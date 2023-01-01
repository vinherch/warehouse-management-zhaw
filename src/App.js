import "./styles/app.scss";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ASide from "./components/ASide";
import { useState } from "react";

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
    <>
      <Header aSideMenueHandler={aSideMenueHandler} asideMenueState={asideMenueState} />
      <Dashboard />
      <ASide asideMenueState={asideMenueState} setAsideMenueState={setAsideMenueState} />
      <Footer />
    </>
  );
}

export default App;
