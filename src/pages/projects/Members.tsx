import MemberIcon from '../../assets/icons/MemberIcon';
import Table from '../../features/project-members/components/Table';
import Button from '../../shared/components/Button';
import Header from '../../shared/components/Header';

export default function Members() {
  return (
    <>
      <section className="px-8 pt-8 pb-41.25">
        <Header
          title="Project Members"
          breadcrumb="Members"
          btnText="Invite Member"
          search={true}
        />
        <div className=" md:bg-[#F1F3FF] mx-auto rounded-lg">
          <Table />
        </div>
        <div className="w-10 h-10 ml-auto md:hidden mt-8 fixed bottom-20 right-10 z-50">
          <Button>
            <MemberIcon />
          </Button>
        </div>
      </section>
    </>
  );
}

// md:w-196.25
