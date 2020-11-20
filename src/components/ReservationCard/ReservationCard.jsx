import styles from './styles.module.scss';

export default function ReservationCard({
  eventName,
  eventOrganizer,
  eventStartTime,
  eventEndTime,
}) {
  return (
    <div className={styles.reservationCard}>
      <div className={styles.eventMainDetailsContainer}>
        <h6 className={styles.eventName}>{eventName}</h6>
        <span className={styles.eventOrganizerLabel}>
          Reserved by {eventOrganizer}
        </span>
      </div>
      <span className={styles.eventTime}>
        {eventStartTime}-{eventEndTime}
      </span>
    </div>
  );
}
