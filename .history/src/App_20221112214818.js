import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";
import Hello from "./pages/Hello";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
