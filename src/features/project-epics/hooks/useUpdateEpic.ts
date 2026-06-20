import { toast } from 'react-toastify';
import { getEpicDetails, updateEpic } from '../api';
import type { ProjectEpic, UpdateEpicPayload } from '../type';
import { useState } from 'react';

export const useUpdateEpic = (
  epic: ProjectEpic | null,
  projectId: string,
  onUpdate: (updated: ProjectEpic) => void,
) => {
  const [saving, setSaving] = useState(false);
  const handleUpdate = async (payload: UpdateEpicPayload) => {
    if (!epic) return;

    try {
      setSaving(true);
      const [, freshEpic] = await Promise.all([
        updateEpic(epic.id, payload),
        getEpicDetails(projectId, epic.id),
      ]);

      onUpdate(freshEpic);
      toast.success('Epic updated successfully');
    } catch (error) {
      console.log(error);
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
