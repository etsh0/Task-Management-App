import Cloud from '../../../assets/icons/Cloud';
import Button from '../../../shared/components/Button';

export default function ProjectsErrorState() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-error bg-[#FFDAD6] w-16 h-16 rounded-xl flex items-center justify-center">
          <Cloud />
        </div>
        <h1 className="text-headline-lg text-slate-one font-semibold leading-10 tracking-[-0.9px] mb-4">
          Something went wrong
        </h1>
        <p className="text-title-md text-[#434654] leading-[29.25px] w-108.5">
          We're having trouble retrieving your projects right now. Please try
          again in a moment.
        </p>
        <div>
          <Button>Retry Connection</Button>
        </div>
      </section>
    </>
  );
}
