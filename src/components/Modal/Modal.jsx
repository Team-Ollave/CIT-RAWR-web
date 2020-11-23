import { useCallback, useEffect } from 'react';
import styles from './styles.module.scss';

export default function Modal({ children, show = false, setShow }) {
  const handleOnClick = () => {
    setShow(false);
  };

  const handleOnEscape = useCallback(
    ({ key }) => {
      if (key === 'Escape') {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleOnEscape);
    return () => {
      document.removeEventListener('keydown', handleOnEscape);
    };
  }, [handleOnEscape]);

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
