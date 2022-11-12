import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import { NotFound } from "./components/NotFound";
import Hello from "./pages/Hello";
import Subscription from "./pages/Subscription";
import Loginpage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/hello" element={<Home />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
