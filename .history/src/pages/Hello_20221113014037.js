import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Hello() {
  const [news, setNews] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=a5142567491b4ee7ba00902b29e50c2a&q=india"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(news);
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
        <Link
          //to={{ pathname: "/hello", news }}
          onClick={useEffect(){
            get
          }}
          className="bg-slate-100 p-2 rounded-md mt-2 text-slate-800"
        >
          Go to News Page
        </Link>
      </div>
    </>
  );
}

export default Hello;
