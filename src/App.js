import MyStructure from "./pages/MyStructure";
import Header from "./components/Header";
import Panel from "./components/Panel";
import "./styles/global.style.scss";

function App() {
  return (
    <div className="window">
      <div>
        <Panel />
      </div>
      <div>
        <Header />
        <MyStructure />
      </div>
    </div>
  );
}

export default App;
