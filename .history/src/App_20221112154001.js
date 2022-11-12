import axios from "axios";

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

function App() {
  return <div className="App"></div>;
}

export default App;
