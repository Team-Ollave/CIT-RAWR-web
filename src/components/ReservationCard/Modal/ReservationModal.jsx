import Modal from '../../Modal';
import StatusBadge from '../../StatusBadge/StatusBadge';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import styles from './styles.module.scss';
import { reservationStatusTypes, userTypes } from '../../../constants';
import { useQueryCache } from 'react-query';
import axios, { buildingsKey, roomsKey } from '../../../api';
import { useAuth } from '../../../auth';

export default function ReservationModal({
  reservationId,
  show,
  setShow,
  status,
  eventName,
  eventOrganizer,
  eventDescription,
  eventDate,
  eventStartTime,
  eventEndTime,
  roomId,
}) {
  const {
    user: { user_type: userType },
  } = useAuth();
  const cache = useQueryCache();

  const room = cache.getQueryData(roomsKey).find((room) => room.id === roomId);
  const building = cache
    .getQueryData(buildingsKey)
    .find((building) => building.id === room.building);

  const dateToString = new Date(eventDate).toDateString();

  const handleAccepted = () => {
    let data = { is_accepted_department: true };
    if (userType === userTypes.IMDC) data = { is_accepted_imdc: true };
    else if (userType === userTypes.PRESIDENT)
      data = { is_accepted_president: true };

    axios.patch(`api/reservations/${reservationId}/`, data);
    setShow(false);
  };

  const handleDecline = () => {
    let data = { is_accepted_department: false };
    if (userType === userTypes.IMDC) data = { is_accepted_imdc: false };
    else if (userType === userTypes.PRESIDENT)
      data = { is_accepted_president: false };

    axios.patch(`api/reservations/${reservationId}/`, data);
    setShow(false);
  };

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLabelContainer}>
            <h4 className={styles.headerLabel}>{eventName}</h4>
            <StatusBadge status={status} />
          </div>
          <span className={styles.detailsLabel}>by {eventOrganizer}</span>
          <div className={styles.detailsContainer}>
            <div className={styles.detail}>
              <LocationOnOutlinedIcon />
              <span className={styles.detailsLabel}>
                {building.name} - {room.name}
              </span>
            </div>
            <div className={styles.detail}>
              <CalendarTodayOutlinedIcon />
              <span className={styles.detailsLabel}>
                {dateToString} | {eventStartTime}-{eventEndTime}
              </span>
            </div>
          </div>
        </header>
        <div className={styles.body}>
          <span
            className={styles.buttonLabel}
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'rgba(0,0,0, .5)',
            }}
          >
            Description
          </span>
          <p style={{ textAlign: 'justify' }}>{eventDescription}</p>
        </div>
        {status === reservationStatusTypes.PENDING && (
          <div className={styles.footer}>
            <button className={styles.secondary} onClick={handleDecline}>
              <span className={styles.buttonLabel}>Decline</span>
            </button>
            <button className={styles.primary} onClick={handleAccepted}>
              <span className={styles.buttonLabel}>Accept</span>
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
