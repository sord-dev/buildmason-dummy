import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout />}>
          <Route index route='/' element={<Home />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
