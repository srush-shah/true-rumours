import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get()
  })
  

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div className="App"></div>;
}

export default App;
