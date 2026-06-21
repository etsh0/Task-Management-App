import Cloud from '../../assets/icons/Cloud';
import Button from './Button';

type ErrorStateProps = {
  text: string;
  // onRetry: () => void;
};

export default function ErrorState({ text }: ErrorStateProps) {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-error bg-[#FFDAD6] w-16 h-16 rounded-xl flex items-center justify-center">
          <Cloud />
        </div>
        <h1 className="text-headline-lg text-slate-one font-semibold leading-10 tracking-[-0.9px] mb-4">
          Something went wrong
        </h1>
        <p className="text-title-md text-neutral leading-[29.25px] w-108.5">
          {text}
        </p>
        <div>
          <Button>Retry Connection</Button>
        </div>
      </section>
    </>
  );
}
