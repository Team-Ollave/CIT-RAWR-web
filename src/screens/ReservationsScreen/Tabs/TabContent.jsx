import AcceptedTab from './AcceptedTab';
import DeletedTab from './DeletedTab';
import PendingTab from './PendingTab';

export default function TabContent({
  tabToRender,
  data,
  forDepartment = false,
}) {
  if (tabToRender === 'accepted')
    return <AcceptedTab forDepartment={forDepartment} data={data} />;
  else if (tabToRender === 'deleted')
    return <DeletedTab forDepartment={forDepartment} data={data} />;

  return <PendingTab forDepartment={forDepartment} data={data} />;
}
