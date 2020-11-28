import Accordion from '../../../components/Accordion';
import ReservationCard from '../../../components/ReservationCard';
import styles from './styles.module.scss';
import { reservationStatusTypes } from '../../../constants';
import { useQuery } from 'react-query';
import {
  getReservations,
  getRooms,
  reservationsKey,
  roomsKey,
} from '../../../api';

export default function PendingTab({ forDepartment = false }) {
  const {
    data: reservationsList,
    isLoading: isLoadingReservations,
  } = useQuery(`${reservationsKey}/pending`, () =>
    getReservations({ status: reservationStatusTypes.PENDING }).then(
      (res) => res.data
    )
  );

  const { data: roomsList, isLoading: isLoadingRooms } = useQuery(
    roomsKey,
    () => getRooms({ hasReservations: true }).then((res) => res.data)
  );

  const formattedData = roomsList
    ?.map((room) => ({
      ...room,
      reservations: reservationsList?.filter(
        (reservation) => reservation.room === room.id
      ),
    }))
    .filter((room) => room.reservations?.length !== 0);

  if (isLoadingRooms || isLoadingReservations) return 'Loading...';

  const renderRoomsList = (data) => (
    <div className={styles.roomContainer}>
      {data.map(
        ({ id, name, reservations }, index) =>
          reservations && (
            <Accordion key={id} title={name} isActive={!index}>
              <div className={styles.reservationList}>
                {reservations?.map(
                  ({
                    id,
                    event_name,
                    event_organizer_name: eventOrganizerName,
                    start_time: eventStartTime,
                    end_time: eventEndTime,
                    status,
                  }) => (
                    <ReservationCard
                      key={id}
                      eventName={event_name}
                      eventOrganizer={eventOrganizerName}
                      eventStartTime={eventStartTime}
                      eventEndTime={eventEndTime}
                      status={status}
                    />
                  )
                )}
              </div>
            </Accordion>
          )
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      {forDepartment ? (
        renderRoomsList(formattedData)
      ) : (
        <div className={styles.departmentListContainer}>
          {roomsList.map(({ rooms, departmentName }) => (
            <div className={styles.departmentContainer}>
              <h2 className={styles.departmentName}>{departmentName}</h2>
              {renderRoomsList({ roomsList, reservationsList })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
