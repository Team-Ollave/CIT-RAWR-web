import { useState } from 'react';
import styles from './styles.module.scss';

export default function CreateRoom() {
  const [isGeneric, setIsGeneric] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.headerLabel}>Create Room</h4>
      </header>
      <form method="post" className={styles.body} onSubmit={handleOnSubmit}>
        <div className={styles.field}>
          <label htmlFor="roomName" className={styles.fieldLabel}>
            Room Name
          </label>
          <input type="text" name="roomName" className={styles.fieldInput} />
        </div>
        <div className={styles.fieldCheckbox}>
          <input
            type="checkbox"
            name="generic"
            id="generic"
            value={isGeneric}
            onChange={() => setIsGeneric(!isGeneric)}
          />
          <label htmlFor="generic" className={styles.fieldLabel}>
            Is Generic
          </label>
        </div>
        {isGeneric && (
          <div className={styles.field}>
            <label htmlFor="buildingName" className={styles.fieldLabel}>
              Room Type
            </label>
            <input
              type="text"
              name="buildingName"
              className={styles.fieldInput}
            />
          </div>
        )}
        <div className={styles.field}>
          <label htmlFor="buildingName" className={styles.fieldLabel}>
            Building
          </label>
          <input
            type="text"
            name="buildingName"
            className={styles.fieldInput}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Available Time</label>
          <div className={styles.availableTimeContainer}>
            <input type="time" className={styles.fieldInput} />
            <span>to</span>
            <input type="time" className={styles.fieldInput} />
          </div>
        </div>
        <button className={styles.createButton}>
          <span className={styles.buttonLabel}>Create</span>
        </button>
      </form>
    </div>
  );
}
