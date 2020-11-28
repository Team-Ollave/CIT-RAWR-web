import styles from './styles.module.scss';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import NavItem from './NavItem';
import CreateRoomModal from './Modals/CreateRoomModal';
import TabContent from './Tabs/TabContent';

import CreateDepartmentModal from './Modals/CreateDepartmentModal';
import { userTypes } from '../../constants';

export default function ReservationsScreen({ userType }) {
  const [currentTab, setCurrentTab] = useState('pending');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isUserDepartment = userType === userTypes.DEPARTMENT;
  const isUserPresident = userType === userTypes.PRESIDENT;

  const renderApproveLabel = (
    <div className={styles.approveLabelContainer}>
      <CheckIcon className={styles.approveLabelIcon} />
      <span className={styles.approveLabel}>
        Approved by {isUserPresident ? 'Department, IMDC' : 'Department'}
      </span>
    </div>
  );

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
              label="Declined"
              isActive={currentTab === 'declined'}
              onClick={() => setCurrentTab('declined')}
            />
          </nav>
        </div>

        <main className={styles.mainContent}>
          <header className={styles.headerContent}>
            {!isUserDepartment && renderApproveLabel}
            {!isUserDepartment && (
              <button
                className={styles.createButton}
                onClick={() => setIsModalOpen(true)}
              >
                <AddIcon className={styles.createButtonIcon} fontSize="small" />
                <span className={styles.createButtonLabel}>
                  Create {isUserPresident ? 'Department' : 'Room'}
                </span>
              </button>
            )}
          </header>
          <TabContent
            tabToRender={currentTab}
            forDepartment={isUserDepartment}
          />
        </main>
      </div>
      {isUserPresident ? (
        <CreateDepartmentModal show={isModalOpen} setShow={setIsModalOpen} />
      ) : (
        <CreateRoomModal show={isModalOpen} setShow={setIsModalOpen} />
      )}
    </div>
  );
}
