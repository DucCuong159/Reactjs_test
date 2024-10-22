import "./App.scss";
import { ToastContainer } from "react-toastify";
import Nav from "./Nav/Nav";
import Home from "./Examples/Home";
import RandomUser from "../components/RandomUser/RandomUser";
import { Route, Switch } from "react-router-dom";
import JobComponent from "./Examples/JobComponent";
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/job" component={JobComponent} />
          <Route path="/random" component={RandomUser} />
          <Route path="/users" component={ListUsers} exact />
          <Route path="/users/:id" component={DetailUser} />
        </Switch>
      </header>
      <ToastContainer
        autoClose={1000}
        toastStyle={{
          minHeight: "40px",
          fontSize: "14px",
        }}
        hideProgressBar
        closeOnClick
        closeButton={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
