import React {} from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";

function Home() {
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
