import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  var options = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/search",
    params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
    headers: {
      "x-api-key": "your_key_1",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return <div className="App"><ul>
    {news.articles.map(article =>}<li>{}</li>{)}
    </ul></div>;
}

export default App;
