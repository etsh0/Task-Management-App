import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useKanbanBoard } from '../../hooks/useKanbanBoard';
import { TASK_STATUS_OPTIONS, type EpicTask, type TaskStatus } from '../../type';
import TaskCard from './TaskCard';
import StatusColumn from './StatusColumn';

export default function BoardView() {
  const { projectId } = useParams();
  const { columnTasks, loading, moveTask } = useKanbanBoard(projectId ?? '');
  const [activeTask, setActiveTask] = useState<EpicTask | null>(null);
  const [activeStatus, setActiveStatus] = useState<TaskStatus | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const status = active.data.current?.status as TaskStatus;
    const task = columnTasks[status]?.find((t) => t.id === active.id);
    if (task) {
      setActiveTask(task);
      setActiveStatus(status);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    setActiveStatus(null);

    if (!over) return;

    const fromStatus = active.data.current?.status as TaskStatus;
    const toStatus = over.id as TaskStatus;

    if (fromStatus && toStatus && fromStatus !== toStatus) {
      moveTask(String(active.id), fromStatus, toStatus);
    }
  };

  if (loading) {
    return (
      <div className="flex gap-6 overflow-x-auto pb-4">
        {TASK_STATUS_OPTIONS.map(({ value }) => (
          <div
            key={value}
            className="flex flex-col w-[288px] shrink-0 gap-4 animate-pulse"
          >
            <div className="h-5 w-32 bg-surface-highest rounded" />
            <div className="h-24 bg-surface-highest rounded-lg" />
            <div className="h-24 bg-surface-highest rounded-lg opacity-60" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-6 overflow-x-auto pb-4">
        {TASK_STATUS_OPTIONS.map(({ value }) => (
          <StatusColumn
            key={value}
            status={value}
            tasks={columnTasks[value]}
            activeTaskId={activeTask?.id ?? null}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask && activeStatus ? (
          <div className="rotate-2 opacity-90 scale-105 shadow-2xl">
            <TaskCard task={activeTask} isDragOverlay />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
