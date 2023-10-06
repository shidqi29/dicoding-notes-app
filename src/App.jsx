import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
