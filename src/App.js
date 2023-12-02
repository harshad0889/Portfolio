import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
function App() {
  console.log("app.js")
  return (
    
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/header"  element={<Header />}/>
        </Routes>
    </Router>
  );
}

export default App;
