import React, { useState } from 'react'
import styles from './Fashion.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Fashion({userData}) {
  // const [role,setRole] = useState("admin");
  return (
<>
      <section className={styles.FashionHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Fashion Design</h2>
              <span>
                <Link to="/Fashion/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutFashion}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="fashionScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="fashionGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="fashionUpdate" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <Link to="facultyMembers" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Faculty Members</Link>
                {userData.role === "admin" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn}  my-1`}>Manage Projects</Link>
                    <Link to="UploadResearch" className={`${styles.btn}  my-1`}>Upload Research</Link>
                    <Link to="SchedulesDash" className={`${styles.btn}  my-1`}>Upload Schedule</Link>
                    <Link to="membersDash" className={`${styles.btn}  my-1`}>Add Member</Link>
                    <Link to="StudentsUpload" className={`${styles.btn}  my-1`}>Upload Project</Link>
                  </>
                  )
                }  
                {userData.role === "doctor" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn}  my-1`}>Manage Projects</Link>
                    <Link to="UploadResearch" className={`${styles.btn}  my-1`}>Upload Research</Link>
                    <Link to="SchedulesDash" className={`${styles.btn}  my-1`}>Upload Schedule</Link>
                  </>
                  )
                }    
                {userData.role === "student" && (
                  <>
                    <Link to="StudentsUpload" className={`${styles.btn}  my-1`}>Upload Project</Link>
                  </>
                  )
                }    
              </div>
            </div>
              <Outlet></Outlet>
          </div>
        </div>
      </section>  
    </>  
)
}
