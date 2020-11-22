import TopBar from '../../components/TopBar';
import { userTypes } from '../../constants';
import ReservationScreen from '../../screens/ReservationsScreen';

export default function IMDCWrapper() {
  return (
    <>
      <TopBar />
      <ReservationScreen userType={userTypes.IMDC} />
    </>
  );
}
