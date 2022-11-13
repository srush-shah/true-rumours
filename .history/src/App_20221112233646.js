import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Fetch from "./pages/Fetch";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";
import Hello from "./pages/Hello";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/hello" element={<Home />} />
      {/* <Route path="/fetch" element={<Fetch />}></Route> */}
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
