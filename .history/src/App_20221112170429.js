import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  useEffect(() => {
    let options = {
      method: "GET",
      url: "sources=bbc-news",
      params: { q: "Bitcoin", lang: "en", page: "1" },
      headers: {
        "x-api-key": "ckHhfX-67NsFiL5Ob-WUHssi8nK6gkkHQYa0IszKJhA",
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
