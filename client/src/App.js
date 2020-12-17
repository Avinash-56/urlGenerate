import logo from "./logo.svg";
import "./App.css";
import NoteInput from "./Layout/NoteInput";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={NoteInput}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
