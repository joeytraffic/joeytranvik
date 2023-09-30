import "./App.css";

import Initial from "./components/Initial";
import About from "./components/About";
import Footer from "./components/Footer";
import Music from "./components/Music";

function App() {
  return (
    <div className="App">
      <div className="custom-scrollbar">
        <Initial />
        <About />
        <Music />
        <Footer />
      </div>
    </div>
  );
}

export default App;
