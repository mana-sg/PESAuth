import "./App.css";
import { Route } from "react-router-dom";
import entryPages from "./Pages/entryPages";
import eventPages from "./Pages/eventPages";

function App() {
  return (
    <div className="App">
      <Route path="/" component={entryPages} exact />
      <Route path="/events" component={eventPages} exact />
    </div>
  );
}

export default App;
