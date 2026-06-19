import { useSearchParams } from 'react-router-dom';

export default function TasksPage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') ?? 'board';
  return (
    <>
      <div className="">
        {view === 'board' ? <div>Board</div> : <div>List</div>}
      </div>
    </>
  );
}
