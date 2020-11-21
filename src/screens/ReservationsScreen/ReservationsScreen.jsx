import styles from './styles.module.scss';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import NavItem from './NavItem';
import Modal from '../../components/Modal/Modal';
import CreateRoom from '../../components/CreateRoom/CreateRoom';
import PendingTab from './Tabs/PendingTab';
import AcceptedTab from './Tabs/AcceptedTab';
import DeletedTab from './Tabs/DeletedTab';

export default function ReservationsScreen() {
  const [currentTab, setCurrentTab] = useState('pending');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderTab = (tab) => {
    switch (currentTab) {
      case 'pending':
        return <PendingTab />;
      case 'accepted':
        return <AcceptedTab />;
      case 'deleted':
        return <DeletedTab />;
      default:
        break;
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
            <button
              className={styles.createButton}
              onClick={() => setIsModalOpen(true)}
            >
              <AddIcon className={styles.createButtonIcon} fontSize="small" />
              <span className={styles.createButtonLabel}>Create Room</span>
            </button>
          </header>
          {renderTab(currentTab)}
        </main>
      </div>
      <Modal show={isModalOpen} setShow={setIsModalOpen}>
        <CreateRoom />
      </Modal>
    </div>
  );
}
