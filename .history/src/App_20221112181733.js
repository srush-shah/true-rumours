import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  useEffect(() => {
    let options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: { q: "Bitcoin", lang: "en", page: "1" },
      headers: {
        "x-api-key": "Jdxqd_tBPf7jw110zQq9TMd2k566rg8iR53OuG9gR_g",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [news]);
  return <div className="App">{news.map((data, key) => {
    10          return (
    11            <div key={key}>
    12              {data.articles}
    19            </div>
    21        })}</div>;
}

export default App;
