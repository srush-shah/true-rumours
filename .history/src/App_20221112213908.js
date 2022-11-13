import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/*" element={<NotFound />}></Route>
        <Route to="/hello" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
