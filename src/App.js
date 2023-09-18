import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary
        </h1>
        <h2>
          What word do you want to look up?
        </h2>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
