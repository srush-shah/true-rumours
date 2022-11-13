import React, { useState } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import axios from "axios";

function Home() {
  const location = useLocation();
  const news = location.state;
  const [isSActive, setS] = useState(false);
  const [isFActive, setF] = useState(false);
  const [isAdActive, setAd] = useState(true);
  const [catNews, setCatNews] = useState([]);

  const getNews = (category) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apikey=4ee6b0eaa4d2426784d1be5b1ba87a39`
      )
      .then((response) => {
        setCatNews(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleS = () => {
    setS(!isSActive);
    getNews("sports");
    console.log(catNews);
  };

  const handleF = () => {
    setF(!isFActive);
    getNews("finance");
    console.log(catNews);
  };

  const handleAd = () => {
    setAd(!isAdActive);
  };

  return (
    <div className="mb-10 w-screen overflow-clip">
      <div className=" block">
        <Navbar />
        <div className="grid grid-cols-2 gap-6 h-screen mt-10">
          <div className="ml-10 ">
            {/* <span className=" font-extralight text-4xl">
              <h1>Latest</h1>
            </span> */}
            <img
              className="h-screen brightness-50 "
              src={news[0].urlToImage}
              alt={""}
            />{" "}
          </div>
          <div className="grid grid-cols-1 grid-flow-row overflow-scroll">
            <div className="bg-white">
              <h1 className="sticky text-3xl font-bold ml-20 bg-white">
                Trending
              </h1>
            </div>
            <div>
              <div>
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold bg-white my-10">
          Latest
        </h1>
        <div className="grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-10">
          <Card data={news[0]} />
          <Card data={news[1]} />
          <Card data={news[2]} />
          <Card data={news[3]} />
          <Card data={news[4]} />
          <Card data={news[5]} />
          <Card data={news[6]} />
          <Card data={news[7]} />
          <Card data={news[8]} />
          {/* {news.map((article) => {
            <Card article={article} />;
          })} */}
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold w-full bg-white my-10">
          Sports{" "}
          <button>
            <IoIosArrowDropdownCircle className="inline" onClick={handleS} />
          </button>
        </h1>
        <div
          className={`${
            isSActive ? " visible " : "hidden"
          } grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-10 `}
        >
          <Card data={catNews[0]} />
          <Card data={catNews[1]} />
          <Card data={catNews[2]} />
          <Card data={catNews[3]} />
          <Card data={catNews[4]} />
          <Card data={catNews[5]} />
          <Card data={catNews[6]} />
          <Card data={catNews[7]} />
          <Card data={catNews[8]} />
          {/* {news.map((article) => {
            <Card article={article} />;
          })} */}
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold w-full bg-white my-10">
          Finance{" "}
          <button>
            <IoIosArrowDropdownCircle className="inline" onClick={handleF} />
          </button>
        </h1>
        <div
          className={`${
            isFActive ? " visible " : "hidden"
          } grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-10 `}
        >
          <Card data={catNews[0]} />
          <Card data={catNews[1]} />
          <Card data={catNews[2]} />
          <Card data={catNews[3]} />
          <Card data={catNews[4]} />
          <Card data={catNews[5]} />
          <Card data={catNews[6]} />
          <Card data={catNews[7]} />
          <Card data={catNews[8]} />
          {/* {news.map((article) => {
            <Card article={article} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
