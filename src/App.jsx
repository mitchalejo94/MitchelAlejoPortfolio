import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <>
            <Route path="/" element={<Body />} />
          </>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
