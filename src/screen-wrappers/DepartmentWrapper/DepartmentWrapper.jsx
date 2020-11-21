import TopBar from '../../components/TopBar';
import { userTypes } from '../../constants';
import ReservationScreen from '../../screens/ReservationsScreen';

export default function DepartmentWrapper() {
  return (
    <>
      <TopBar />
      <ReservationScreen userType={userTypes.DEPARTMENT} />
    </>
  );
}
