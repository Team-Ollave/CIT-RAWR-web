import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8000',
  // baseURL: 'http://192.168.254.115:8000',
  baseURL: 'http://192.168.1.11:8000',
});

export default axiosInstance;

export const getReservations = ({ status, forUserType, departmentId } = {}) =>
  axiosInstance.get('api/reservations/', {
    params: { status, for_user_type: forUserType, department_id: departmentId },
  });

export const getRooms = ({ buildingId, hasReservations } = {}) =>
  axiosInstance.get('api/rooms/', {
    params: { building_id: buildingId, has_reservations: hasReservations },
  });

export const getUsers = ({ userType } = {}) =>
  axiosInstance.get('api/users/', { params: { user_type: userType } });

export const getBuildings = () => axiosInstance.get('api/buildings/');

export const reservationsKey = 'reservations';
export const roomsKey = 'rooms';
export const usersKey = 'users';
export const buildingsKey = 'buildings';
