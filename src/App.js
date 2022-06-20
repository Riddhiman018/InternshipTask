import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Content from "./Content";
import Dashboard from "./Dashboard";
import Lobby from "./Lobby";
import Playlist from "./Playlist";
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/playlist" exact>
            <Playlist />
          </Route>
          <Route path="/lobby" exact>
            <Lobby />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
