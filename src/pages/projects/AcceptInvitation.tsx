import logo from '../../assets/images/Logo.svg';
import Button from '../../shared/components/Button';
import NewMemberIcon from '../../assets/icons/NewMemberIcon';
import { useEffect } from 'react';
import { getAccessToken } from '../../features/auth/Login/cookie';
import { useNavigate, useSearchParams } from 'react-router-dom';
export default function AcceptInvitation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      navigate(
        `/login?redirect=${encodeURIComponent(`/invite?token=${token}`)}`,
      );
    }
  }, [token, navigate]);

  return (
    <>
      <div className="flex items-center justify-center bg-[#F9F9FF] h-screen">
        <div className="flex flex-col items-center">
          <div className="mb-12">
            <img src={logo} alt="" />
          </div>
          <div className="p-12 rounded-lg shadow-[0px_24px_48px_-12px_#041B3C0F] border-t-4 border-primary">
            <div className="text-label-sm text-neutral font-bold leading-[16.5px] tracking-[0.55px] uppercase w-fit mx-auto bg-surface-highest rounded-xl py-1 px-3 flex items-center gap-2 mb-6">
              <NewMemberIcon />
              <p>New Project Invitation</p>
            </div>
            <h4 className="mb-4 text-slate-one text-[30px] font-semibold leading-9 tracking-[-0.75px]">
              You've been invited to join new project
            </h4>
            <Button>Accept Invitation</Button>
          </div>
        </div>
      </div>
    </>
  );
}

// get invitation_token from url
