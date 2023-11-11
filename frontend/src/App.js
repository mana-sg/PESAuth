import "./App.css";
import { Route } from "react-router-dom";
import entryPages from "./Pages/entryPages";
import eventPages from "./Pages/eventPages";
import scoringPage from "./Pages/scoringPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={entryPages} exact />
      <Route path="/events" component={eventPages} exact />
      <Route path="/scoring" component={scoringPage} exact />
    </div>
  );
}

export default App;
