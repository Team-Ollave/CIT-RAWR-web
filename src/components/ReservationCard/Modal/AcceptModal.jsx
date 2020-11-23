import Modal from '../../Modal';
import styles from './styles.module.scss';

export default function AcceptModal({ show, setShow, status, eventName }) {
  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.headerLabel}>{eventName}</h4>
          <span>{status}</span>
        </header>
        <div className={styles.body}>
          <span
            className={styles.buttonLabel}
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'rgba(0,0,0, .5)',
            }}
          >
            Description
          </span>
          <p>
            Lorem ipsum dolor sit amet consect, et ur adipisicing elit. Eaque
            eveniet hic vero. Ratione soluta, laborum iste maiores, numquam
            laudantium velit facilis non, in esse corporis ut ipsam sint eaque
            nobis.
          </p>
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
