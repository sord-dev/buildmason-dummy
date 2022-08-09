import { Routes, Route } from "react-router-dom";

// layout 
import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
