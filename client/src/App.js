import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <div className="App">
      <Sidebar />
      <div className="HeaderAndFeed">
        <Feed />
      </div>
    </div>
      <Footer /></>
  );
}

export default App;
