import './App.css';
import Cards from './Components/Cards/Cards';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Cards />
    </div>
  );
}

export default App;
