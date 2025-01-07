import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bucket-app">
        {/* Header will be displayed on all pages */}
        <Header />

        {/* Main content with routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
