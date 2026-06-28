import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTasksByStatus, updateTaskStatus } from '../api';
import type { EpicTask, TaskStatus } from '../type';
import { TASK_STATUS_OPTIONS } from '../type';

export type ColumnTasksMap = Record<TaskStatus, EpicTask[]>;

const buildEmptyMap = (): ColumnTasksMap =>
  TASK_STATUS_OPTIONS.reduce((acc, { value }) => {
    acc[value] = [];
    return acc;
  }, {} as ColumnTasksMap);

export const useKanbanBoard = (projectId: string) => {
  const [columnTasks, setColumnTasks] = useState<ColumnTasksMap>(
    buildEmptyMap(),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) return;

    const fetchAll = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          TASK_STATUS_OPTIONS.map(({ value }) =>
            getTasksByStatus(projectId, value).then((tasks) => ({
              status: value,
              tasks,
            })),
          ),
        );
        const map = buildEmptyMap();
        results.forEach(({ status, tasks }) => {
          map[status] = tasks;
        });
        setColumnTasks(map);
      } catch {
        toast.error('Failed to load board tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [projectId]);

  const moveTask = useCallback(
    async (taskId: string, fromStatus: TaskStatus, toStatus: TaskStatus) => {
      if (fromStatus === toStatus) return;

      // Find the task
      const task = columnTasks[fromStatus].find((t) => t.id === taskId);
      if (!task) return;

      // Optimistic update
      setColumnTasks((prev) => {
        const next = { ...prev };
        next[fromStatus] = prev[fromStatus].filter((t) => t.id !== taskId);
        next[toStatus] = [{ ...task, status: toStatus }, ...prev[toStatus]];
        return next;
      });

      // Persist via API
      try {
        await updateTaskStatus(taskId, toStatus);
      } catch {
        // Revert on failure
        setColumnTasks((prev) => {
          const next = { ...prev };
          next[toStatus] = prev[toStatus].filter((t) => t.id !== taskId);
          next[fromStatus] = [
            { ...task, status: fromStatus },
            ...prev[fromStatus],
          ];
          return next;
        });
        toast.error('Failed to update task status. Changes reverted.');
      }
    },
    [columnTasks],
  );

  return { columnTasks, loading, moveTask };
};
