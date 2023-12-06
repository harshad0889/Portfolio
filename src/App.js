import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import { useLocation } from 'react-router-dom';
import Education from './Education/Education';

function App() {

  const location = useLocation();

  console.log("app.js",location)
  return (
    
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/header"  element={<Header />}/>
        <Route path="/education"  element={<Education />}/>
        </Routes>
    </>
  );
}

export default App;
