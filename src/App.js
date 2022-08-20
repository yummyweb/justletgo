import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Chat from "./components/Chat"
import About from "./components/About"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
