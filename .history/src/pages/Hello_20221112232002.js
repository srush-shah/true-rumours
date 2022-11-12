import React from "react";
import { Link } from "react-router-dom";

function Hello() {
  return (
    <>
      <img
        className="fixed h-screen blur-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3pDJdlsYkBCHMyNzQPykn4JBRCpfmUN2Ig&usqp=CAU"
        alt="hero banner"
      />
      <div className="fixed z-10 pt-80 pl-80 text-center">
        <h1 className="text-6xl font-medium p-2 text-slate-100">
          Welcome to the True Rumours!
        </h1>
        <p className="pt-2 pb-5 text-slate-100">
          Find the most relevant news here.
        </p>
        <Link
          to="/hello"
          className="bg-slate-100 p-2 rounded-md mt-2 text-slate-800"
        >
          Go to News Page
        </Link>
      </div>
    </>
  );
}

export default Hello;
