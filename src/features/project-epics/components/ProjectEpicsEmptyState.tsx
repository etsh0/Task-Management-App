import { useNavigate, useParams } from 'react-router-dom';
import HieraechyIcon from '../../../assets/icons/HieraechyIcon';
import HighLevelIcon from '../../../assets/icons/HighLevelIcon';
import TrackIcon from '../../../assets/icons/TrackIcon';
import img from '../../../assets/images/EpicsEmptyState.svg';
import Button from '../../../shared/components/Button';
import EmptyStateCard from './EmptyStateCard';
export default function ProjectEpicsEmptyState() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  return (
    <>
      <section className="flex items-center justify-center text-center pt-10 pb-20 px-6">
        <div className="flex flex-col gap-6 items-center">
          <img className="w-45 md:w-[288px]" src={img} alt="" />
          <div className="">
            <h1 className="text-headline-lg text-slate-one font-semibold leading-10 tracking-[-0.9px] mb-4">
              No epics in this project yet.
            </h1>
            <p className="text-[15px] md:text-title-md text-[#434654] leading-[29.25px] max-w-md">
              Break down your large project into manageable epics to track
              progress better and maintain architectural clarity.
            </p>
          </div>
          <div onClick={() => navigate(`/project/${projectId}/epics/new`)}>
            <Button>+ Create First Epic</Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-15 py-4">
            <EmptyStateCard
              title="High-Level Goals"
              p="Define the broad objectives
that span across multiple
cycles."
              icon={<HighLevelIcon />}
            />
            <EmptyStateCard
              title="Hierarchy Design"
              p="Link individual tasks to
parent epics for a
consolidated view."
              icon={<HieraechyIcon />}
            />
            <EmptyStateCard
              title="Track Velocity"
              p="Visualize percentage
completion at a macro
project level."
              icon={<TrackIcon />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
