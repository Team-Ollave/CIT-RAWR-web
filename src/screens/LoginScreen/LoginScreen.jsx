import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userTypes } from '../../constants';
import styles from './styles.module.scss';

const departmentAccount = {
  username: 'dept',
  password: '123',
  userType: userTypes.DEPARTMENT,
};
const imdcAccount = {
  username: 'imdc',
  password: '123',
  userType: userTypes.IMDC,
};
const presAccount = {
  username: 'pres',
  password: '123',
  userType: userTypes.PRESIDENT,
};

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      username === departmentAccount.username &&
      password === departmentAccount.password
    ) {
      history.push('/admin/dashboard');
    } else if (
      username === imdcAccount.username &&
      password === imdcAccount.password
    ) {
      history.push('/imdc/dashboard');
    } else if (
      username === presAccount.username &&
      password === presAccount.password
    ) {
      history.push('/president/dashboard');
    }

    setErrors('incorrect username or password');
  };

  return (
    <div className={styles.container}>
      <form
        method="post"
        className={styles.loginFormContainer}
        onSubmit={handleOnSubmit}
      >
        <header>Sign in</header>
        <div className={styles.bodyContainer}>
          {errors && <p>{errors}</p>}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Link to="/imdc">Forgot your password?</Link>
            <button>Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
}
