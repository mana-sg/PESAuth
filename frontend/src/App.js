import "./App.css";
import { Route } from "react-router-dom";
import entryPages from "./Pages/entryPages";
import eventPages from "./Pages/eventPages";
import scoringPage from "./Pages/scoringPage";
import couponsPage from "./Pages/couponsPage";
import leaderBoard from "./Pages/leaderBoard";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={entryPages} exact />
      <Route path="/home" component={HomePage} exact />
      <Route path="/events" component={eventPages} exact />
      <Route path="/scoring" component={scoringPage} exact />
      <Route path="/coupons" component={couponsPage} exact />
      <Route path="/leaderboard" component={leaderBoard} exact />
    </div>
  );
}

export default App;
