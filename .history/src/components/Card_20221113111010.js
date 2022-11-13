import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/favicon.ico";

function Card(data) {
  let article = data.data;
  console.log(article);
  return (
    <div class="max-w-2xl mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg w-72 dark:bg-gray-800 dark:border-gray-700 h-96 mb-4">
        <a href="#">
          <img
            class="rounded-t-lg h-28 w-full overflow-hidden"
            src={article.urlToImage}
            alt={article.description}
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white h-20 overflow-clip">
              {article.title}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400 overflow-clip truncate h-12">
            {article.description}
          </p>
          <Link
            to={"/detail"}
            state={article}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
