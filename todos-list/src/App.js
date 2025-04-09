import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header"
import {Footer} from "./Components/Footer" 
import Todos from "./Components/Todos"
import {Todo_item} from "./Components/Todo_item"
function App() {
  return (
    <>
      <Header title = "My Todos List"/>
      <Footer/>
      <Todos/>
      <Todo_item />
    </>
  );
}

export default App;
