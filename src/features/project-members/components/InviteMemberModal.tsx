import { useForm, type SubmitHandler } from 'react-hook-form';
import CloseIcon from '../../../assets/icons/CloseIcon';
import MemberIcon from '../../../assets/icons/MemberIcon';
import Button from '../../../shared/components/Button';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type InviteMemberModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InviteMemberModal({
  setIsOpen,
}: InviteMemberModalProps) {
  const inviteMemberSchema = z.object({
    email: z.string().email('Please enter a valid email'),
  });

  type FormInputs = z.infer<typeof inviteMemberSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    resolver: zodResolver(inviteMemberSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
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
            <label htmlFor="" className="label">
              Email
              <input
                type="email"
                {...register('email')}
                id=""
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
                <Button>Send Invitation</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
