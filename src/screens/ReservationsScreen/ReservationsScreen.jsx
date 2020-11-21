import styles from './styles.module.scss';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import NavItem from './NavItem';
import CreateRoomModal from './Modals/CreateRoomModal';
import TabContent from './Tabs/TabContent';

import { userTypes } from '../../constants';
import CreateDepartmentModal from './Modals/CreateDepartmentModal';

export default function ReservationsScreen({ userType }) {
  const [currentTab, setCurrentTab] = useState('pending');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.screenTitle}>Reservations</h1>
          <nav className={styles.nav}>
            <NavItem
              label="Pending"
              isActive={currentTab === 'pending'}
              onClick={() => setCurrentTab('pending')}
            />
            <NavItem
              label="Accepted"
              isActive={currentTab === 'accepted'}
              onClick={() => setCurrentTab('accepted')}
            />
            <NavItem
              label="Deleted"
              isActive={currentTab === 'deleted'}
              onClick={() => setCurrentTab('deleted')}
            />
          </nav>
        </div>

        <main className={styles.mainContent}>
          <header className={styles.headerContent}>
            <div className={styles.approveLabelContainer}>
              <CheckIcon className={styles.approveLabelIcon} />
              <span className={styles.approveLabel}>
                Approved by Department, IMDC
              </span>
            </div>
            {userType !== userTypes.DEPARTMENT && (
              <button
                className={styles.createButton}
                onClick={() => setIsModalOpen(true)}
              >
                <AddIcon className={styles.createButtonIcon} fontSize="small" />
                <span className={styles.createButtonLabel}>
                  Create{' '}
                  {userType === userTypes.PRESIDENT ? 'Department' : 'Room'}
                </span>
              </button>
            )}
          </header>
          <TabContent tabToRender={currentTab} />
        </main>
      </div>
      {userType === userTypes.PRESIDENT ? (
        <CreateDepartmentModal show={isModalOpen} setShow={setIsModalOpen} />
      ) : (
        <CreateRoomModal show={isModalOpen} setShow={setIsModalOpen} />
      )}
    </div>
  );
}
