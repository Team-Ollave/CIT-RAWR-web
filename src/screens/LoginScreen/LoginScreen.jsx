import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userTypes } from '../../constants';
import styles from './styles.module.scss';
import icon_logo from '../../assets/icon_logo.png';
import axios from '../../api';
import { useAuth } from '../../auth';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();
  const auth = useAuth();

  const handleOnSubmit = async (event) => {
    console.log(errors);
    event.preventDefault();

    try {
      const res = await axios.post('/api/users/login/', {
        email: username,
        password,
      });

      if (res.status === 200) {
        const user = res.data;
        auth.signIn(user, () => {
          if (user.user_type === userTypes.DEPARTMENT) {
            history.push('/admin/dashboard');
          } else if (user.user_type === userTypes.IMDC) {
            history.push('/imdc/dashboard');
          } else if (user.user_type === userTypes.PRESIDENT) {
            history.push('/president/dashboard');
          }
        });
      }
    } catch (err) {
      console.error(err);
    }

    setErrors('incorrect email or password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPortion}>
        <img src={icon_logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.rightPortion}>
        <div className={styles.signInContainer}>
          <header className={styles.signInHeader}>
            <span className={styles.signInHeaderLabel}>
              Accept Reservations
            </span>
          </header>
          <div className={styles.signInMainContent}>
            <form method="post" onSubmit={handleOnSubmit}>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.signInInputs}
                placeholder="Email"
              />
              <input
                className={styles.signInInputs}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <small style={{ fontWeight: 400 }}>{errors}</small>

              <button className={styles.signInButton}>Sign in</button>
            </form>
            <Link className={styles.forgetPasswordButton}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
