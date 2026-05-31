import logo from '../../assets/images/Logo.svg';
import Form from '../../features/auth/Sign-up/components/Form';

export default function Signup() {
  return (
    <>
      <div className="px-4 md:px-10 py-6.5">
        <div className="mb-6.5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center">
          <Form />
        </div>
      </div>
    </>
  );
}
