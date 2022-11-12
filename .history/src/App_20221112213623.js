import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";

function App() {
  return (
    <>
      <Hello />
      <Routes>
        <Route to="/home" element={<Home />}></Route>
        <Route to="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
