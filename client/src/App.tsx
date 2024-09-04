import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import LeadsDataEntry from "./components/LeadsDataEntry";

const App: React.FC = () => {
  const [pageName, setPageName] = useState("Home");

  return (
    <div className="container">
      <Header setPageName={setPageName} />
      <SubHeader pageName={pageName} />
      <LeadsDataEntry />
      <Footer />
    </div>
  );
};

export default App;
