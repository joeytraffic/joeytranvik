import "./App.css";
import Initial from "./components/Initial";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Music from "./components/music";

function App() {
  return (
    <div className="App">
      <Initial />
      <Main />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
