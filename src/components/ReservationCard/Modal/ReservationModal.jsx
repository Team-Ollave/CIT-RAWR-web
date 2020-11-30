import Modal from '../../Modal';
import StatusBadge from '../../StatusBadge/StatusBadge';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import styles from './styles.module.scss';
import { reservationStatusTypes } from '../../../constants';

export default function ReservationModal({
  show,
  setShow,
  status,
  eventName,
  eventOrganizer,
  eventDescription,
}) {
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
                ST Building - Case Room
              </span>
            </div>
            <div className={styles.detail}>
              <CalendarTodayOutlinedIcon />
              <span className={styles.detailsLabel}>2 Nov 2020 8:30-9:30</span>
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
            <button className={styles.secondary} onClick={() => setShow(false)}>
              <span className={styles.buttonLabel}>Decline</span>
            </button>
            <button className={styles.primary} onClick={() => setShow(false)}>
              <span className={styles.buttonLabel}>Accept</span>
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
