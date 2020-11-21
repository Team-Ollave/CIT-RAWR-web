import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import DepartmentWrapper from './screen-wrappers/DepartmentWrapper';
import IMDCWrapper from './screen-wrappers/IMDCWrapper';
import PresidentWrapper from './screen-wrappers/PresidentWrapper';

export default function App() {
  return (
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
  );
}
