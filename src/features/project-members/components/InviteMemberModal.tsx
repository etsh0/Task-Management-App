import { useForm, type SubmitHandler } from 'react-hook-form';
import CloseIcon from '../../../assets/icons/CloseIcon';
import MemberIcon from '../../../assets/icons/MemberIcon';
import Button from '../../../shared/components/Button';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import config from '../../../config/env';
import { inviteMember } from '../api';
import { useState } from 'react';
import Spinner from '../../../shared/components/Spinner';
import { toast } from 'react-toastify';
import { parseError } from '../../../shared/utils/parseError';

type InviteMemberModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: string | undefined;
};

export default function InviteMemberModal({
  setIsOpen,
  projectId,
}: InviteMemberModalProps) {
  const [loading, setLoading] = useState(false);
  const inviteMemberSchema = z.object({
    email: z.string().email('Please enter a valid email'),
  });

  type FormInputs = z.infer<typeof inviteMemberSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(inviteMemberSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!projectId) return;
    const payload = {
      p_email: data.email,
      p_project_id: projectId,
      p_app_url: window.location.origin,
      p_base_url: config.apiUrl,
    };
    try {
      setLoading(true);
      await inviteMember(payload);
      reset();
      setIsOpen(false);
      toast.success('Invitation sent successfully');
    } catch (error: unknown) {
      toast.error(parseError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-100 bg-black/40 px-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed sm:relative bottom-0 left-0 right-0 z-100 h-100 md:h-fit rounded-lg p-8 shadow-[0px_24px_48px_-12px_#041B3C1F] bg-white w-full sm:w-md "
        >
          <div className="flex justify-between items-center">
            <div className="bg-surface-low flex items-center justify-center rounded-lg w-12 h-12 text-primary">
              <MemberIcon />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h4 className="text-slate-one text-[24px] font-bold leading-8 tracking-[-0.6px]">
              Invite Team Member
            </h4>
            <p className="text-neutral text-body-md leading-5">
              Send an invitation to join the Architectural Studio workspace.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6" action="">
            <label htmlFor="email" className="label">
              Email
              <input
                type="email"
                {...register('email')}
                id="email"
                className={`input ${errors.email && 'input-error'}`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )}
            </label>
            <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-neutral text-body-md py-2.5 px-6 font-semibold leading-5 cursor-pointer"
              >
                Cancel
              </button>
              <div className="w-full md:w-fit">
                <Button disabled={loading}>
                  {loading ? <Spinner /> : 'Send Invitation'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
