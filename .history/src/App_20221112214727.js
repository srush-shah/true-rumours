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
        <Route to="/" exact element={<Home />}></Route>
        <Route to="/hello" exact element={<Hello />}></Route>
        {/*<Route to="/*" exact element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
