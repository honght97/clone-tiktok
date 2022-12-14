import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
