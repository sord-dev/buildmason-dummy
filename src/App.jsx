import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/404";
// import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
