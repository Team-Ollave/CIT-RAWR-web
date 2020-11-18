import { useState } from 'react';
import styles from './styles.module.scss';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.loginFormContainer}>
        <header>Sign in</header>
        <div className={styles.bodyContainer}>
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
            <button>Forgot your password?</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
