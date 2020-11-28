import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

export default axiosInstance;

export const getReservations = ({ status } = {}) =>
  axiosInstance.get('api/reservations/', { params: { status } });

export const getRooms = ({ buildingId, hasReservations } = {}) =>
  axiosInstance.get('api/rooms/', {
    params: { building_id: buildingId, has_reservations: hasReservations },
  });

export const reservationsKey = 'reservations';
export const roomsKey = 'rooms';
