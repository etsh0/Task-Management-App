import { toast } from 'react-toastify';
import { updateEpic } from '../api';
import type { ProjectEpic, UpdateEpicPayload } from '../type';
import { useState } from 'react';

export const useUpdateEpic = (
  epic: ProjectEpic | null,
  onUpdate: (updated: ProjectEpic) => void,
) => {
  const [saving, setSaving] = useState(false);
  const handleUpdate = async (payload: UpdateEpicPayload) => {
    if (!epic) return;

    const previous = { ...epic };
    onUpdate({ ...epic, ...payload });
    try {
      setSaving(true);
      await updateEpic(epic.id, payload);
      toast.success('Epic updated successfully');
    } catch (error) {
      console.log(error);
      onUpdate(previous);
      toast.error('Failed to update epic. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return {
    handleUpdate,
    saving,
  };
};
