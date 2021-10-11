import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Access/RestrictedAccess/PrivateRoute";
import SignIn from "./Access/SignIn/SignIn";
import SignUp from "./Access/SignOut/SignOut";
import { ProvidersApp } from "./Context/UseContext";
import Home from './ComponentsApp/Home/Home';

function App() {
  return (
    // <div className="App">
      <ProvidersApp>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          {/* <Paths/> */}
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </ProvidersApp>
    // </div>
  );
}

export default App;
