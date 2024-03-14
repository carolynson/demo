import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cardcontainer from "./components/Cardcontainer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Cardcontainer/>
    </div>
  );
}
export default App;