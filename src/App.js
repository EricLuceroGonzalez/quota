import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import DefineComponent from "./components/Define";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Landing from "./components/Landing";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/test" component={DefineComponent}></Route>
    </Switch>
  );
  return (
    <Router>
      <div className="App bg-background">
        <main className="App-header">
          <Suspense>{routes}</Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
