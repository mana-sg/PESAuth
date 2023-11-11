import "./App.css";
import { Route } from "react-router-dom";
import entryPages from "./Pages/entryPages";

function App() {
  return (
    <div className="App">
      <Route path="/" component={entryPages} exact />
    </div>
  );
}

export default App;
