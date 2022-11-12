import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  var options = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/search",
    params: { q: "Bitcoin", lang: "en", page: "1" },
    headers: {
      "x-api-key": "ckHhfX-67NsFiL5Ob-WUHssi8nK6gkkHQYa0IszKJhA",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        console.error(error);
      });
  },[news]);

  return (
    <div className="App">
      <button>Call News</button>
      <ul>{}</ul>
    </div>
  );
}

export default App;
