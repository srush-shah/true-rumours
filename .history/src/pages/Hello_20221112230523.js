import React from "react";

function Hello() {
  return (
    <>
      <img
        className="fixed h-screen blur-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3pDJdlsYkBCHMyNzQPykn4JBRCpfmUN2Ig&usqp=CAU"
        alt="hero banner"
      />
      <div className="fixed z-10 pt-80 pl- text-slate-100">
        <h1 className="text-6xl">Welcome to the True Rumours!</h1>
        <p>Find the most relevant news here.</p>
        <button>Go to News Page</button>
      </div>
    </>
  );
}

export default Hello;
