import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<h1>hello about</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
