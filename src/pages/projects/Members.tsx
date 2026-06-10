// import { useEffect } from 'react';
import MemberIcon from '../../assets/icons/MemberIcon';
import Table from '../../features/project-members/components/Table';
import Button from '../../shared/components/Button';
import Header from '../../shared/components/Header';
// import { getAccessToken } from '../../features/auth/Login/cookie';
// import config from '../../config/env';

export default function Members() {
  // useEffect( () => {
  //     const token = getAccessToken()
  //     const fetchMembers = async () => {
  //         const res = await fetch(config.apiUrl + "/rest/v1/get_project_members?project_id=eq.00d6bbf2-007f-4da7-8647-e4b4be27b34d", {
  //             method: "GET",
  //             headers : {
  //                 apiKey: config.anonKey,
  //                 Authorization: `Bearer ${token}`,
  //                 'Content-Type': 'application/json',
  //             }
  //         })
  //         const data = await res.json()
  //         console.log(data);
  //         return data
  //     }
  //     fetchMembers()
  // } ,[])
  return (
    <>
      <section className="px-8 pt-8 pb-41.25">
        <Header title="Project Members" breadcrumb="Members" />
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
