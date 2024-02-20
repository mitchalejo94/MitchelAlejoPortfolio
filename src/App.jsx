import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
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
