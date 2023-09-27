import './App.css';
import Dictionary from "./Dictionary.js"
import Footer from "./Footer";

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
        <Dictionary defaultKeyword="greeting"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
