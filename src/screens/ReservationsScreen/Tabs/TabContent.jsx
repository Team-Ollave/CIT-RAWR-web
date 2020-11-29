import AcceptedTab from './AcceptedTab';
import DeletedTab from './DeletedTab';
import PendingTab from './PendingTab';

export default function TabContent({ tabToRender, forDepartment = false }) {
  if (tabToRender === 'accepted')
    return <AcceptedTab forDepartment={forDepartment} />;
  else if (tabToRender === 'declined')
    return <DeletedTab forDepartment={forDepartment} />;

  return <PendingTab forDepartment={forDepartment} />;
}
