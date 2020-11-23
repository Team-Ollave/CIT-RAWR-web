import Modal from '../../Modal';
import styles from './styles.module.scss';

export default function AcceptModal({ show, setShow }) {
  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.headerLabel}>OLV Meeting</h4>
        </header>
        <div className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet
          hic vero. Ratione soluta, laborum iste maiores, numquam laudantium
          velit facilis non, in esse corporis ut ipsam sint eaque nobis.
        </div>
        <div className={styles.footer}>
          <button className={styles.secondary} onClick={() => setShow(false)}>
            <span className={styles.buttonLabel}>Decline</span>
          </button>
          <button className={styles.primary} onClick={() => setShow(false)}>
            <span className={styles.buttonLabel}>Accept</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
