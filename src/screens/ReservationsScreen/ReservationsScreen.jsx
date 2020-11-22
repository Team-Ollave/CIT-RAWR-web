import styles from './styles.module.scss';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import CreateRoomModal from './Modals/CreateRoomModal';
import TabContent from './Tabs/TabContent';

import { userTypes } from '../../constants';
import CreateDepartmentModal from './Modals/CreateDepartmentModal';
import { generateDepartments, generateRooms } from '../../data';

export default function ReservationsScreen({ userType }) {
  const [currentTab, setCurrentTab] = useState('pending');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pendingData, setPendingData] = useState([]);
  const [acceptedData, setAcceptedData] = useState([]);
  const [declinedData, setDeclinedData] = useState([]);

  const isUserDepartment = userType === userTypes.DEPARTMENT;
  const isUserPresident = userType === userTypes.PRESIDENT;

  useEffect(() => {
    if (isUserDepartment) {
      setPendingData(generateRooms(4));
      setAcceptedData(generateRooms(3));
      setDeclinedData(generateRooms(2));
    } else {
      setPendingData(generateDepartments(3));
      setAcceptedData(generateDepartments(4));
      setDeclinedData(generateDepartments(2));
    }
  }, [isUserDepartment]);

  const handleTabContentData = (tab) => {
    switch (tab) {
      case 'accepted':
        return acceptedData;

      case 'declined':
        return declinedData;

      default:
        return pendingData;
    }
  };

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
            <div className={styles.approveLabelContainer}>
              <CheckIcon className={styles.approveLabelIcon} />
              <span className={styles.approveLabel}>
                Approved by Department, IMDC
              </span>
            </div>
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
            data={handleTabContentData(currentTab)}
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
