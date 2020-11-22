import Modal from '../../Modal';
import styles from './styles.module.scss';

export default function AcceptModal({ show, setShow }) {
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
