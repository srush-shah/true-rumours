import axios from "axios";

function App() {
  var options = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/search",
    params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
    headers: {
      "x-api-key": "your_key_1",
    },
  };

  return <div className="App"></div>;
}

export default App;
