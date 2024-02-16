import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

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
      </>
    </Router>
  );
}

export default App;
