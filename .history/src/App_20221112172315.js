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
        "x-api-key": "ePkfX787FXnGfNibKR8jWq2XxrTtkWpXcKxvQSs7LCg",
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
  }, []);
  useEffect(() => {
    console.log("News Changes");
  }, [news]);

  return (
    <div className="App">
      <ul>{}</ul>
    </div>
  );
}

export default App;
