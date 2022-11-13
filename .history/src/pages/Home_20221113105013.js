import React, { useState } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import axios from "axios";

function Home() {
  const location = useLocation();
  const news = location.state;
  console.log(news);
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
    setAd(false);
  };

  return (
    <div className="mb-10 w-screen overflow-clip">
      <div className=" block">
        <Navbar />
        <div className="grid grid-cols-2 gap-6 h-screen mt-10">
          <div className="ml-10 ">
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
              <></><div className="container px-28 py-10 mx-auto">
                {isAdActive ? <><img
                  src="https://study.com/cimages/multimages/16/burgerad15179945781952220614.png"
                  alt="advertisement"
                />
                <button
                  className="mt-6 ml-48 bg-zinc-200 text- p-3 rounded-lg text-lg shadow-sm"
                  onClick={handleAd}
                >
                  <GrClose className="inline mr-1" /> Remove Ads
                </button></>
              </div></>:
              <><div className="grid grid-cols-1 grid-flow-row gap-8 overflow-scroll mx-10 mt-10 -ml-28">
                <Card data={news[0]} />
                <Card data={news[1]} />
                <Card data={news[2]} />
                <Card data={news[3]} />
                <Card data={news[4]} />
                <Card data={news[5]} />
              </div></>}
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
          <Card data={catNews[0] ? catNews[0] : news[0]} />
          <Card data={catNews[1] ? catNews[1] : news[1]} />
          <Card data={catNews[2] ? catNews[2] : news[2]} />
          <Card data={catNews[3] ? catNews[3] : news[3]} />
          <Card data={catNews[4] ? catNews[4] : news[4]} />
          <Card data={catNews[5] ? catNews[5] : news[5]} />
          <Card data={catNews[6] ? catNews[6] : news[6]} />
          <Card data={catNews[7] ? catNews[7] : news[7]} />
          <Card data={catNews[8] ? catNews[8] : news[8]} />
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
          <Card data={catNews[0] ? catNews[0] : news[0]} />
          <Card data={catNews[1] ? catNews[1] : news[1]} />
          <Card data={catNews[2] ? catNews[2] : news[2]} />
          <Card data={catNews[3] ? catNews[3] : news[3]} />
          <Card data={catNews[4] ? catNews[4] : news[4]} />
          <Card data={catNews[5] ? catNews[5] : news[5]} />
          <Card data={catNews[6] ? catNews[6] : news[6]} />
          <Card data={catNews[7] ? catNews[7] : news[7]} />
          <Card data={catNews[8] ? catNews[8] : news[8]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
