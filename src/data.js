export const getRandomInt = (min, max) => min + Math.random() * max;

export const generateReservations = (max, status = 'pending') =>
  Array.from({ length: getRandomInt(1, max) }).map((_, index) => ({
    id: index,
    eventName: `Event ${index + 1}`,
    eventOrganizerName: index % 2 ? 'Jane Doe' : 'John Doe',
    eventStartTime: '8:30',
    eventEndTime: '9:30',
    status,
  }));

export const generateRooms = (max, status = 'pending') =>
  Array.from({ length: getRandomInt(1, max) }).map((_, index) => ({
    id: index,
    roomName: `Room ${index + 1}`,
    reservations: generateReservations(4, status),
  }));

export const generateDepartments = (max, status = 'pending') =>
  Array.from({ length: getRandomInt(1, max) }).map((_, index) => ({
    id: index,
    departmentName: `Department ${index + 1}`,
    rooms: generateRooms(4, status),
  }));

export const RESERVATIONS_LIST = Array.from({ length: getRandomInt(1, 4) }).map(
  (_, index) => ({
    id: index,
    eventName: `Event ${index + 1}`,
    eventOrganizerName: index % 2 ? 'Jane Doe' : 'John Doe',
    eventStartTime: '8:30',
    eventEndTime: '9:30',
  })
);

export const ROOMS_LIST = Array.from({ length: getRandomInt(1, 3) }).map(
  (_, index) => ({
    id: index,
    roomName: `Room ${index + 1}`,
    reservations: generateReservations(4),
  })
);

export const DEPARTMENTS_LIST = Array.from({ length: getRandomInt(1, 2) }).map(
  (_, index) => ({
    id: index,
    departmentName: `Department ${index + 1}`,
    rooms: generateRooms(4),
  })
);
