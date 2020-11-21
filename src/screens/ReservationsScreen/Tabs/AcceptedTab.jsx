import Accordion from '../../../components/Accordion';
import ReservationCard from '../../../components/ReservationCard';
import styles from './styles.module.scss';

export default function AcceptedTab() {
  return (
    <div className={styles.container}>
      <div className={styles.departmentContainer}>
        <h2 className={styles.departmentName}>College of Computer Studies</h2>
        <div className={styles.roomContainer}>
          <Accordion title="Computer Lab" isActive>
            <div className={styles.reservationList}>
              <ReservationCard
                eventName="DSC Weekly Meeting"
                eventOrganizer="Jane Doe"
                eventStartTime="8:30"
                eventEndTime="9:30"
              />
              <ReservationCard
                eventName="DSC Weekly Meeting"
                eventOrganizer="Jane Doe"
                eventStartTime="8:30"
                eventEndTime="9:30"
              />
            </div>
          </Accordion>
          <Accordion title="Room 4">
            <div className={styles.reservationList}>
              <ReservationCard
                eventName="DSC Weekly Meeting"
                eventOrganizer="Jane Doe"
                eventStartTime="8:30"
                eventEndTime="9:30"
              />
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
