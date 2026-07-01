import Select from 'react-select';
import ArrowLeft2 from '../../../assets/icons/ArrowLeft2';
import ArrowRight2 from '../../../assets/icons/ArrowRight2';

export default function StatisticsHeader() {
  return (
    <>
      <header className="flex flex-col mb-10 gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Weekly Planner
          </h2>
          <p className="text-[16px] leading-6 text-neutral">
            Manage your deadlines and track team velocity.
          </p>
        </div>
        <div className="p-4 bg-surface-low rounded-lg flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <ArrowLeft2 />
            <div className="text-label-sm text-slate-one font-bold leading-5">
              May 11 - May 17, 2025
            </div>
            <ArrowRight2 />
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <Select
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '8px 16px',
                    borderRadius: '2px',
                  }),
                }}
              />
            </div>
            <div className="">
              <Select
                isClearable={false}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'white',
                    borderColor: '#E5E7EB',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '8px 16px',
                    borderRadius: '2px',
                  }),
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
