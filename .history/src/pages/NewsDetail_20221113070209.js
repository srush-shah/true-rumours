import React from "react";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import logo from "../Images/favicon.ico";
import { useLocation } from "react-router-dom";

function NewsDetail(data) {
  const location = useLocation();
  const article = location.state;
  console.log(article);
  return (
    <div className="mb-10">
      <div className=" block">
        <Navbar />
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex items-center lg:w-4/5 mx-20 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <img src={logo} alt="image" />
                </div>
                <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                  <h2 class="text-gray-900 text-3xl title-font font-bold mb-2">
                    {article.title}
                  </h2>
                  <p class="leading-relaxed text-base">Sub Text</p>
                </div>
              </div>
            </div>
            <p className="m-44 -mt-24 mr-96 font-justify">
              
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
