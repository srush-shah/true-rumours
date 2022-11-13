import React from "react";

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
        <p className="p-2">Find the most relevant news here.</p>
        <button className="bg-slate-800 p-3">Go to News Page</button>
      </div>
    </>
  );
}

export default Hello;
