import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Software from "./pages/Software";
import Websites from "./pages/Websites";
import VideoEditing from "./pages/VideoEditing";
import Animation from "./pages/Animation";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/videoediting" element={<VideoEditing />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
