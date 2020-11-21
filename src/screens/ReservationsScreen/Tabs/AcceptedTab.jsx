import Accordion from '../../../components/Accordion';
import ReservationCard from '../../../components/ReservationCard';
import { DEPARTMENTS_LIST, ROOMS_LIST } from '../../../data';
import styles from './styles.module.scss';

export default function AcceptedTab({ forDepartment = false, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.departmentContainer}>
        {forDepartment ? (
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
        ) : (
          data.map(({ departmentName, rooms }) => (
            <>
              <h2 className={styles.departmentName}>{departmentName}</h2>
              <div className={styles.roomContainer}>
                {rooms.map(({ id, roomName, reservations }, index) => (
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
            </>
          ))
        )}
      </div>
    </div>
  );
}
