import Accordion from '../../../components/Accordion';
import ReservationCard from '../../../components/ReservationCard';
import styles from './styles.module.scss';
import { reservationStatusTypes, userTypes } from '../../../constants';
import { useQuery } from 'react-query';
import {
  getReservations,
  getRooms,
  getUsers,
  reservationsKey,
  roomsKey,
  usersKey,
} from '../../../api';
import { useAuth } from '../../../auth';

export default function PendingTab({ forDepartment = false }) {
  const {
    user: { user_type: userType, id: userId },
  } = useAuth();

  const { data: reservationsList, isLoading: isLoadingReservations } = useQuery(
    `${reservationsKey}/pending`,
    () =>
      getReservations({
        status: reservationStatusTypes.PENDING,
        forUserType: userType,
        departmentId: forDepartment ? userId : null,
      }).then((res) => res.data),
    {
      refetchInterval: 1000,
    }
  );

  const { data: roomsList, isLoading: isLoadingRooms } = useQuery(
    roomsKey,
    () => getRooms({ hasReservations: true }).then((res) => res.data)
  );

  const {
    data: departmentsList,
    isLoading: isLoadingDepartments,
  } = useQuery(usersKey, () =>
    getUsers({ userType: userTypes.DEPARTMENT }).then((res) => res.data)
  );

  let formattedData = roomsList
    ?.map((room) => ({
      ...room,
      reservations: reservationsList?.filter(
        (reservation) => reservation.room === room.id
      ),
    }))
    .filter((room) => room.reservations?.length !== 0);

  if (!forDepartment) {
    formattedData = departmentsList
      ?.map((department) => ({
        ...department,
        rooms: formattedData?.filter(
          (room) => room.department === department.id
        ),
      }))
      .filter((department) => department.rooms?.length !== 0);
  }

  if (isLoadingRooms || isLoadingReservations || isLoadingDepartments)
    return 'Loading...';

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
                    event_description: eventDescription,
                    event_date: eventDate,
                    room: roomId,
                    status,
                  }) => (
                    <ReservationCard
                      key={id}
                      eventName={event_name}
                      eventOrganizer={eventOrganizerName}
                      eventStartTime={eventStartTime}
                      eventEndTime={eventEndTime}
                      eventDescription={eventDescription}
                      status={status}
                      eventDate={eventDate}
                      roomId={roomId}
                      reservationId={id}
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
          {formattedData.map(
            ({ id, profile_data: { display_name: displayName }, rooms }) => (
              <div className={styles.departmentContainer} key={id}>
                <h2 className={styles.departmentName}>{displayName}</h2>
                {renderRoomsList(rooms)}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
