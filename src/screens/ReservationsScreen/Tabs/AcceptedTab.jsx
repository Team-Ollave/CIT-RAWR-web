import Accordion from '../../../components/Accordion';
import ReservationCard from '../../../components/ReservationCard';
import styles from './styles.module.scss';

export default function AcceptedTab({ forDepartment = false, data }) {
  const renderRoomsList = (data) => (
    <div className={styles.roomContainer}>
      {data.map(({ id, roomName, reservations }, index) => (
        <Accordion key={id} title={roomName} isActive={!index}>
          <div className={styles.reservationList}>
            {reservations.map(
              ({
                id,
                eventName,
                eventOrganizerName,
                eventStartTime,
                eventEndTime,
              }) => (
                <ReservationCard
                  key={id}
                  eventName={eventName}
                  eventOrganizer={eventOrganizerName}
                  eventStartTime={eventStartTime}
                  eventEndTime={eventEndTime}
                />
              )
            )}
          </div>
        </Accordion>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      {forDepartment ? (
        renderRoomsList(data)
      ) : (
        <div className={styles.departmentListContainer}>
          {data.map(({ departmentName, rooms }) => (
            <div className={styles.departmentContainer}>
              <h2 className={styles.departmentName}>{departmentName}</h2>
              {renderRoomsList(rooms)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
