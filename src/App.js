import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import Read from "./components/Read";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:mangaId" element={<Details />} />
        <Route path="/read">
          <Route index />
          <Route path=":mangaName" />
          <Route path=":mangaName/:chapNo" />
          <Route path=":mangaName/:chapNo/:number" element={<Read />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
