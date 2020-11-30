import { useState } from 'react';
import { useQuery } from 'react-query';
import { buildingsKey, getBuildings, getUsers, usersKey } from '../../../api';
import Modal from '../../../components/Modal';
import styles from './styles.module.scss';
import axios from '../../../api';
import { userTypes } from '../../../constants';

export default function CreateRoomModal({ show, setShow }) {
  const {
    data: buildingsList,
    isLoading: isLoadingBuildings,
  } = useQuery(buildingsKey, () => getBuildings().then((res) => res.data));

  const {
    data: departmentsList,
    isLoading: isLoadingDepartments,
  } = useQuery(`${usersKey}/departments`, () =>
    getUsers({ userType: userTypes.DEPARTMENT }).then((res) => res.data)
  );

  const [building, setBuilding] = useState(null);
  const [department, setDepartment] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios.post('api/rooms/', {
      name: roomName,
      available_start_time: startTime,
      available_end_time: endTime,
      building,
      department,
    });

    setBuilding('');
    setDepartment('');
    setRoomName('');
    setStartTime('');
    setEndTime('');
  };

  if (isLoadingBuildings || isLoadingDepartments) return 'Loading...';

  return (
    <Modal show={show} setShow={setShow}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.headerLabel}>Create Room</h4>
        </header>
        <form method="post" className={styles.body} onSubmit={handleOnSubmit}>
          <div className={styles.field}>
            <label htmlFor="roomName" className={styles.fieldLabel}>
              Room Name
            </label>
            <input
              type="text"
              name="roomName"
              className={styles.fieldInput}
              value={roomName}
              onChange={(event) => setRoomName(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="buildings" className={styles.field}>
              Building
            </label>
            <select
              name="buildings"
              className={styles.fieldInput}
              onChange={(event) => setBuilding(event.target.value)}
              value={building}
            >
              <option value={'-'}>---</option>
              {buildingsList.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="deparments" className={styles.field}>
              Department
            </label>
            <select
              className={styles.fieldInput}
              onChange={(event) => setDepartment(event.target.value)}
              value={department}
            >
              <option value={'-'}>---</option>
              {departmentsList.map(
                ({ id, profile_data: { display_name: name } }) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                )
              )}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Working Hours</label>
            <div className={styles.availableTimeContainer}>
              <input
                type="time"
                className={styles.fieldInput}
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
              />
              <span>to</span>
              <input
                type="time"
                className={styles.fieldInput}
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
              />
            </div>
          </div>
          <button
            className={styles.createButton}
            onClick={() => setShow(false)}
          >
            <span className={styles.buttonLabel}>Create</span>
          </button>
        </form>
      </div>
    </Modal>
  );
}
