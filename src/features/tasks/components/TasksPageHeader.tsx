import { Link, useSearchParams } from 'react-router-dom';
import ArrowRight2 from '../../../assets/icons/ArrowRight2';
import SearchInput from '../../../shared/components/SearchInput';
import DashboardIcon from '../../../assets/icons/DashboardIcon';
import FilterIcon from '../../../assets/icons/FilterIcon';
import { useBreadcrumb } from '../../../shared/hooks/useBreadcrumb';
import type { BreadcrumbItem } from '../../../features/projects/type';
import Select from 'react-select';
import { type ReactNode } from 'react';
import ListIcon from '../../../assets/icons/ListIcon';

const tasksViewOptions: {
  label: string;
  value: 'board' | 'list';
  icon: ReactNode;
}[] = [
  {
    label: 'Board View',
    icon: <DashboardIcon />,
    value: 'board',
  },
  {
    label: 'List View',
    icon: <ListIcon className="w-[13.5px] h-[13.5px] text-primary" />,
    value: 'list',
  },
];

export default function TasksPageHeader() {
  const breadcrumb = useBreadcrumb();
  const [searchParams, setSearchParams] = useSearchParams();

  const view = searchParams.get('view') ?? 'board';

  const selectedOption = tasksViewOptions.find((o) => o.value === view);

  return (
    <>
      <header className="flex items-end justify-between mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 uppercase font-bold leading-4 tracking-[1.2px] text-label-sm mb-8">
            {breadcrumb.map((item: BreadcrumbItem, index: number) => {
              const isLast = index === breadcrumb.length - 1;
              return (
                <span key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span>
                      <ArrowRight2 className={'w-[3.7px] h-1.5'} />
                    </span>
                  )}
                  {isLast ? (
                    <span className="text-primary">{item.label}</span>
                  ) : item.href ? (
                    <Link
                      to={item.href}
                      className="text-[#43465499] hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#43465499]">{item.label}</span>
                  )}
                </span>
              );
            })}
          </div>
          <h2 className="text-headline-lg text-slate-one font-semibold leading-9 tracking-[-0.75px]">
            Active Workboard
          </h2>
          <p className="text-[#434654]">
            Curating Project Alpha's production pipeline and milestones.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput placeholder="Search tasks..." />
          <div className="">
            <Select
              value={selectedOption}
              options={tasksViewOptions}
              onChange={(option) => {
                setSearchParams({ view: option!.value });
              }}
              isClearable={false}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
              }}
              formatOptionLabel={(option) => (
                <div className="flex items-center gap-2">
                  <span className="text-slate-one">{option.icon}</span>
                  <span className="text-slate-one font-medium text-body-md leading-5">
                    {option.label}
                  </span>
                </div>
              )}
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: '4px',
                  border: 'none',
                  boxShadow: '0px 1px 2px 0px #0000000D',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#041B3C',
                  lineHeight: '20px',
                  cursor: 'pointer',
                }),
              }}
            />
          </div>
          <div className="p-2 rounded-sm bg-surface-highest">
            <FilterIcon />
          </div>
        </div>
      </header>
    </>
  );
}
