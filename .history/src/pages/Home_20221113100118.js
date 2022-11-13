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
  console.log(news);
  const [components, setComponents] = useState([]);
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
  
  function addComponent() { 
    
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("No more planets to add!");
      
    } 
    
  }

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
            {/* <div>
              <div className="container px-5 py-10 mx-auto">
                <img
                  src="https://study.com/cimages/multimages/16/burgerad15179945781952220614.png"
                  alt="advertisement"
                />
                <button>Remove Ads</button>
              </div>
            </div> */}
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
          {components.map((item, i) => (
            <Card data={item[i]} />
          ))}
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
          {components.map((item, i) => (
            <Card data={item[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
