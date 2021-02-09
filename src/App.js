import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import Footer from "./components/footer/Footer.js";
// import configData from "./config.json";
import testData from "./data/test-data.json";
import DataContext from "./context/DataContext";

function App() {
  return (
    <div className="app">
      <DataContext.Provider value={testData}>
        <Router>
          <Header />
          <Overview />
          <Footer />
        </Router>
      </DataContext.Provider >
    </div >
  );
}

// fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5", {
// 	"method": configData.method,
// 	"headers": {
// 		"x-rapidapi-key": configData.headers['x-rapidapi-key'],
// 		"x-rapidapi-host": configData.headers['x-rapidapi-host']
// 	}
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => {
// 	console.error(err);
// });

export default App;