// Pages
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Settings from "./pages/settings";

// Module
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
