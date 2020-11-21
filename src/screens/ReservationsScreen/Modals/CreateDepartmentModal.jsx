import Modal from '../../../components/Modal';
import styles from './styles.module.scss';

export default function CreateDepartmentModal({ show, setShow }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.headerLabel}>Create Department</h4>
        </header>
        <form method="post" className={styles.body} onSubmit={handleOnSubmit}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Department Name</label>
            <input type="text" className={styles.fieldInput} />
          </div>
          {/* <div className={styles.field}>
            <label className={styles.fieldLabel}>Username</label>
            <input type="text" className={styles.fieldInput} />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Password</label>
            <input type="password" className={styles.fieldInput} />
          </div> */}
          <button
            className={styles.createButton}
            onClick={() => setShow(false)}
          >
            <span className={styles.buttonLabel}>Create</span>
          </button>
        </form>
      </div>
    </Modal>
  );
}
