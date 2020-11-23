import { useState } from 'react';
import AcceptModal from './Modal/AcceptModal';
import styles from './styles.module.scss';

export default function ReservationCard({
  eventName,
  eventOrganizer,
  eventStartTime,
  eventEndTime,
  status,
  handleOnClick,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick2 = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.reservationCard} onClick={handleOnClick2}>
      <div className={styles.eventMainDetailsContainer}>
        <h6 className={styles.eventName}>{eventName}</h6>
        <span className={styles.eventOrganizerLabel}>
          Reserved by {eventOrganizer}
        </span>
      </div>
      <span className={styles.eventTime}>
        {eventStartTime}-{eventEndTime}
      </span>

      <AcceptModal
        show={showModal}
        setShow={setShowModal}
        status={status}
        eventName={eventName}
      />
    </div>
  );
}
