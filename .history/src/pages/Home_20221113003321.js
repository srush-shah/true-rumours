import React, { useState } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import axios from "axios";

function Home() {
  const fetch = () {
    const [data, setData] = useState([]);
    const getNews = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=a5142567491b4ee7ba00902b29e50c2a&q=india"
        )
        .then((response) => {
          console.log(response.data.articles);
          setData(response.data.articles);
        });
      // .catch(()=> {})
    };

    let arr = [];
    arr.push(
      data.map((value) => {
        let title = value.title;
        console.log(title);
        return title;
      })
    );
  }
  return (
    <div className="mb-10">
      <div className=" block">
        <Navbar />
        <div className="grid grid-cols-2 gap-6 h-screen mt-10">
          <div className="border-4 border-gray-500 ml-10"></div>
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
