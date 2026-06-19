import StatusColumn from './StatusColumn';

export default function BoardView() {
  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-4">
        <StatusColumn />
      </div>
    </>
  );
}
