import "./App.css";
import { Fragment } from "react";
import { TodoRouter } from "./Components/Router";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <TodoRouter />
    </Fragment>
  );
}

export default App;
