import { useState } from 'react';
import Button from '../../../shared/components/Button';
import Spinner from '../../../shared/components/Spinner';

export default function NewTaskForm() {
  const [loading] = useState(false);
  return (
    <>
      <form
        action=""
        className="md:p-6 rounded-lg md:bg-white flex flex-col gap-8 pb-10"
      >
        <label className="label" htmlFor="">
          Title
          <input
            type="text"
            className="input"
            placeholder="e.g., Finalize structural schematics"
          />
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <label className="label" htmlFor="">
            Status
            <select className="input" name="" id="">
              <option value="">TO DO</option>
              <option value="">A</option>
              <option value="">A</option>
            </select>
          </label>
          <label className="label" htmlFor="">
            Assignee
            <select className="input" name="" id="">
              <option value="">Select Team Member</option>
              <option value="">A</option>
              <option value="">A</option>
            </select>
          </label>
        </div>
        <label className="label" htmlFor="">
          Epic
          <select className="input" name="" id="">
            <option value="">Select Epic Link</option>
            <option value="">A</option>
            <option value="">A</option>
          </select>
        </label>
        <label className="label" htmlFor="">
          Due Date
          <input className="input" type="date" name="" id="" />
        </label>
        <label className="label" htmlFor="">
          Description
          <textarea name="" id="" className="input h-36 resize-none"></textarea>
        </label>
        <div className="flex flex-col md:flex-row-reverse items-center justify-start gap-4 mt-8">
          <div className="w-full md:w-auto">
            <Button disabled={loading}>
              {loading ? <Spinner /> : 'Create Task'}
            </Button>
          </div>
          <button
            type="button"
            className="text-[#4F5F7B] text-body-md font-semibold leading-5 py-3 px-6 cursor-pointer"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
