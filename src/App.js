import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:url" element={<Details />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}
