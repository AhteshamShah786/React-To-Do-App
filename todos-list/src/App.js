import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; // Use default import style if preferred
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <Header title="My Todos List" />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
