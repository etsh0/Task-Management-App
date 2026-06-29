import MemberIcon from '../../../assets/icons/MemberIcon';
import logo from '../../../assets/images/Logo.svg';
import Button from '../../../shared/components/Button';
export default function AcceptInvitation() {
  return (
    <>
      <div className="flex items-center justify-center bg-[#F9F9FF]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="p-12 rounded-lg shadow-[0px_24px_48px_-12px_#041B3C0F]">
          <p className="text-label-sm text-neutral font-bold leading-[16.5px] tracking-[0.55px] uppercase bg-surface-highes rounded-xl py-1 px-3">
            <MemberIcon />
            New Project Invitation
          </p>
          <h4>You've been invited to join new project</h4>
          <Button>Accept Invitation</Button>
        </div>
      </div>
    </>
  );
}
