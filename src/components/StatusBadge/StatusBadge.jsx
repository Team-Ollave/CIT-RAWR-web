import cx from 'classnames';
import { reservationStatusTypes } from '../../constants';
import styles from './styles.module.scss';

export default function StatusBadge({ status }) {
  let labelText = 'Pending';

  if (status === reservationStatusTypes.ACCEPTED) labelText = 'Accepted';
  else if (status === reservationStatusTypes.DECLINED) labelText = 'Declined';

  return (
    <div
      className={cx({
        [styles.accepted]: status === reservationStatusTypes.ACCEPTED,
        [styles.pending]: status === reservationStatusTypes.PENDING,
        [styles.declined]: status === reservationStatusTypes.DECLINED,
      })}
    >
      <span className={styles.badgeLabel}>{labelText}</span>
    </div>
  );
}
