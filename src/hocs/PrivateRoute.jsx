import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../auth';

export default function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
        )
      }
    />
  );
}
