import "./App.css";
import ResortContainer from "./components/ResortContainer";
import data from "./data/data.ts";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ResortContainer data={data} />
    </>
  );
}

export default App;
