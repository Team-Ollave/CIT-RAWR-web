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
import ProvideAuth from './hocs/ProvideAuth';
import PrivateRoute from './hocs/PrivateRoute';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const queryCache = new QueryCache();

export default function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/" children={<Redirect to="/sign-in" />} />
            <Route path="/sign-in" children={<LoginScreen />} />
            <PrivateRoute
              path="/admin/dashboard"
              children={<DepartmentWrapper />}
            />
            <PrivateRoute path="/imdc/dashboard" children={<IMDCWrapper />} />
            <PrivateRoute
              path="/president/dashboard"
              children={<PresidentWrapper />}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ProvideAuth>
    </ReactQueryCacheProvider>
  );
}
