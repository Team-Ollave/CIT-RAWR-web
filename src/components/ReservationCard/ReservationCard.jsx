import { useState } from 'react';
import { formatTime } from '../../utils';
import ReservationModal from './Modal/ReservationModal';
import styles from './styles.module.scss';

export default function ReservationCard({
  eventName,
  eventOrganizer,
  eventStartTime,
  eventEndTime,
  status,
  eventDescription,
  eventDate,
  roomId,
  handleOnClick,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick2 = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ReservationModal
        show={showModal}
        setShow={setShowModal}
        status={status}
        eventName={eventName}
        eventOrganizer={eventOrganizer}
        eventDescription={eventDescription}
        eventDate={eventDate}
        eventStartTime={eventStartTime}
        eventEndTime={eventEndTime}
        roomId={roomId}
      />

      <div className={styles.reservationCard} onClick={handleOnClick2}>
        <div className={styles.eventMainDetailsContainer}>
          <h6 className={styles.eventName}>{eventName}</h6>
          <span className={styles.eventOrganizerLabel}>
            Reserved by {eventOrganizer}
          </span>
        </div>
        <span className={styles.eventTime}>
          {formatTime(eventStartTime)} - {formatTime(eventEndTime)}
        </span>
      </div>
    </>
  );
}
