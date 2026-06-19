import { TASK_STATUS_OPTIONS } from '../../type';
import StatusColumn from './StatusColumn';

export default function BoardView() {
  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {TASK_STATUS_OPTIONS.map(({ value }) => (
          <StatusColumn key={value} status={value} />
        ))}
      </div>
    </>
  );
}
