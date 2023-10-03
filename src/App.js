import "./App.css";

import Initial from "./components/Initial";
import About from "./components/About";
import Footer from "./components/Footer";
import Music from "./components/Music";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <div className="App">
      <div className="custom-scrollbar">
        <Initial />
        <About />
        <Music />
        <ComingSoon />
        <Footer />
      </div>
    </div>
  );
}

export default App;
