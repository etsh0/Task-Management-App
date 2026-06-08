import Button from "../../../shared/components/Button";
import AddProjectCard from "./AddProjectCard";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
        <section className="px-8 pt-8 py-41.25 h-full">
            <header className="flex items-center justify-between mb-10">
                <div className="flex flex-col gap-1">
                    <h2 className="text-[30px] text-slate-one font-semibold leading-9 tracking-[-0.75px]">Projects</h2>
                    <p className="text-[16px] leading-6 text-[#434654]">Manage and curate your projects</p>
                </div>
                <div className="hidden md:block">
                    <Button>
                        + Create New Project
                    </Button>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <AddProjectCard />
            </div>
        </section>
    </>
  )
}
