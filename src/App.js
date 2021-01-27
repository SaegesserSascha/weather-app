import './App.css';
import Wind from './components/wind/Wind';
import configData from "./config.json";
import testData from "./data/test-data.json";
import DataContext from "./context/DataContext";


function App() {
    return (
      <div className="app">
        <DataContext.Provider value={testData}>
          <Wind />
        </DataContext.Provider>
      </div>
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
