import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  useEffect(() => {
    let options = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=4ee6b0eaa4d2426784d1be5b1ba87a39",
      params: { q: "Bitcoin", lang: "en", page: "1" },
      headers: {
        "x-api-key": "4ee6b0eaa4d2426784d1be5b1ba87a39",
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

  return (
    <div className="App">
      <ul>{}</ul>
    </div>
  );
}

export default App;
