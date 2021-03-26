import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
