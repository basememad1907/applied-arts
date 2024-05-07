import React, { useEffect, useState } from "react";
import styles from './PDFacultyMembers.module.css';
import MembersDashViewer from './Dashboard/Views/MembersDashViewer'
export default function PDFacultyMembers() {
  const [mem, setMem] = useState([]);

  useEffect(() => {
    fetch(`https://applied-of-art.onrender.com/api/v1/members/all-members`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setMem(result.data.members);
      });
  }, []);

  const filteredMembers = mem.filter((member) => member.department === '6625929ccf34345d4b8ad156');

  return (
    <>
    {/* {console.log(mem)} */}
      <div className="col-lg-10">
        <div className={styles.title}>
          <h2>Faculty Members</h2>
        </div>
        <div className="row">
          {
            mem.map((member, i) =><>
             {/* {console.log(member)} */}
            <MembersDashViewer member={member}  />
            </>)
          }
        </div>
      </div>
    </>
  );
}