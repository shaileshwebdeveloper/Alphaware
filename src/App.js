import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <AllRoutes />
      <br />
      <Footer />
    </div>
  );
}

export default App;
