import Logo from '../../assets/Logo.png';
import ProfilePic from '../../assets/profile-pic.png';
import styles from './styles.module.scss';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_Container}>
        <img src={Logo} alt="logo" />
        <div className={styles.userContainer}>
          <span className={styles.userDisplayName}>Computer Studies</span>
          <img src={ProfilePic} alt="computer studies" />
        </div>
      </div>
    </div>
  );
}
