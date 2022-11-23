import './App.css';
import React, {useEffect} from "react";
import Navbar from './components/navbar';
import Search from './components/search';

function App() {
  useEffect(() => {
    return () => {
      document.title = 'Name Age Guesser'
    };
  }, []);
  
  return (
    <div className="App">
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;
