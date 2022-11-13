import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Hello() {
  const [news, setNews] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apikey=4ee6b0eaa4d2426784d1be5b1ba87a39"
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // let arr = [];
  // arr.push(
  //   data.map((value) => {
  //     let title = value.title;
  //     console.log(title);
  //     return title;
  //   })
  // );
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
        <button
          onClick={getNews}
          className="bg-slate-100 p-2 rounded-md mt-2 mr-2 text-slate-800"
        >
          Get News
        </button>
        <Link
          to="/hello"
          state={news}
          className="bg-slate-100 p-2 rounded-md mt-2 text-slate-800"
          aria-disabled
        >
          Go to News Page
        </Link>
      </div>
    </>
  );
}

export default Hello;
