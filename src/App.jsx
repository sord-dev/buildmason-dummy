import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<h1>hello about</h1>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
