import { createContext } from 'react';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import DepartmentWrapper from './screen-wrappers/DepartmentWrapper';
import IMDCWrapper from './screen-wrappers/IMDCWrapper';
import PresidentWrapper from './screen-wrappers/PresidentWrapper';
// import PrivateRoute from './hocs/PrivateRoute';

const UserContext = createContext(undefined);

export default function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/" children={<Redirect to="/login" />} />
          <Route path="/login" children={<LoginScreen />} />
          <Route path="/admin/dashboard" children={<DepartmentWrapper />} />
          <Route path="/imdc/dashboard" children={<IMDCWrapper />} />
          <Route path="/president/dashboard" children={<PresidentWrapper />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export { UserContext };
