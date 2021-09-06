import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
