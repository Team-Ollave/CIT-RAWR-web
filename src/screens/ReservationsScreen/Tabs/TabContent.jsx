import AcceptedTab from './AcceptedTab';
import DeletedTab from './DeletedTab';
import PendingTab from './PendingTab';

export default function TabContent({ tabToRender }) {
  if (tabToRender === 'accepted') return <AcceptedTab />;
  else if (tabToRender === 'deleted') return <DeletedTab />;

  return <PendingTab />;
}
