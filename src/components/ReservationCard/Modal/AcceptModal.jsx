import { useCallback, useEffect } from 'react';
import Modal from '../../Modal';
import styles from './styles.module.scss';

export default function AcceptModal({ show, setShow }) {
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
    <Modal show={show} setShow={setShow}>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button className={styles.secondary} onClick={() => setShow(false)}>
          <span className={styles.buttonLabel}>Decline</span>
        </button>
        <button className={styles.primary} onClick={() => setShow(false)}>
          <span className={styles.buttonLabel}>Accept</span>
        </button>
      </div>
    </Modal>
  );
}
