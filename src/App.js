import './App.css';
import Dictionary from "./Dictionary.js"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='header'>
          <h1>
            Welcome to the Dictionary
          </h1>
          <h2>
            What word do you want to look up?
          </h2>
        </div>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
