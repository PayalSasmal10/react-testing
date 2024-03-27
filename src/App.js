import "./App.css";
import svg from "./images/task-svg.svg";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <img src={svg} alt="img test" width="50%" max-width="600px" title="Task related image"/>
    </div>
  );
}

export default App;
