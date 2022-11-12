// import React from "react";

// function Fetch() {
//   return (
//     <div className="m-10 text-center">
//       <h1 className="text-4xl font-bold">Fetch</h1>
//     </div>
//   );
// }

// export default Fetch;

import React, { useState } from "react";
import axios from "axios";
function Fetch() {
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

  return (
    <div className="container my-3">
      <button className="px-6 py-2 bg-blue-500" onClick={getNews}>
        Fetch News{" "}
      </button>
      <ul>
        {arr.map((title) => {
          return (
            <li className="list-disc" key={title}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fetch;
