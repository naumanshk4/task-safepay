import logo from './logo.svg';
import './App.css';
import Names from './Names';
import Main from './layout/layout';
import LookupLayout from './components/lookupLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Names /> */}
  
        <Router> 
        <Switch>
          <Route exact path="/">
            <Main redirectTo="home" />
          </Route>
            
          <Route exact path="/lookup">
          <Main redirectTo="lookup" />
          </Route>
        </Switch>
      </Router>
  

    </div>
  );
}

export default App;
