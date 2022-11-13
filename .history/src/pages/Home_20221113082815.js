import React, { useState } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Home() {
  const location = useLocation();
  const news = location.state;
  const [isSActive, setS] = useState(false);
  const [isFActive, setF] = useState(false);
  const [sNews, setSNews] = useState([]);

  const getNews = (category) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apikey=4ee6b0eaa4d2426784d1be5b1ba87a39`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleS = () => {
    setS(!isSActive);
  };

  const handleF = () => {
    setF(!isFActive);
  };

  return (
    <div className="mb-10">
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
              <h1 className="sticky text-3xl font-bold ml-20 w-full bg-white">
                Trending
              </h1>
            </div>
            <List />
            <List />
          </div>
        </div>
        <h1 className="ml-12 sticky text-3xl font-bold w-full bg-white my-10">
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
      </div>
    </div>
  );
}

export default Home;
