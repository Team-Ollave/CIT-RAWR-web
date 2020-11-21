import styles from './styles.module.scss';

export default function Modal({ children, show = false, setShow }) {
  const handleOnClick = () => {
    setShow(false);
  };

  return (
    <div
      onClick={handleOnClick}
      className={styles.container}
      style={{ display: show ? 'flex' : 'none' }}
    >
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  );
}
