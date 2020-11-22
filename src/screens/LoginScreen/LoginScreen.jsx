import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { userTypes } from "../../constants";
import styles from "./styles.module.scss";
import icon_logo from "../../assets/icon_logo.png";

const departmentAccount = {
  username: "dept",
  password: "123",
  userType: userTypes.DEPARTMENT,
};
const imdcAccount = {
  username: "imdc",
  password: "123",
  userType: userTypes.IMDC,
};
const presAccount = {
  username: "pres",
  password: "123",
  userType: userTypes.PRESIDENT,
};

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      username === departmentAccount.username &&
      password === departmentAccount.password
    ) {
      history.push("/admin/dashboard");
    } else if (
      username === imdcAccount.username &&
      password === imdcAccount.password
    ) {
      history.push("/imdc/dashboard");
    } else if (
      username === presAccount.username &&
      password === presAccount.password
    ) {
      history.push("/president/dashboard");
    }

    setErrors("incorrect username or password");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPortion}>
        <img src={icon_logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.rightPortion}>
        <div className={styles.signInContainer}>
          <header className={styles.signInHeader}>Accept Reservations</header>
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
