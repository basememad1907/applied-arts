import React, { useState } from 'react'
import styles from './InteriorDesign.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function InteriorDesign({userData}) {
  // const [role,setRole] = useState("admin");
  return (
<>
      <section className={styles.IntDesignHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Interior Design</h2>
              <span>
                <Link to="/InteriorDesign/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutIntDesign}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="intDesignScheduals" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="intDesignGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="intDesignUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <Link to="facultyMembers" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Faculty Members</Link>
              
                {userData.role === "admin" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn} my-1`}>Manage Projects</Link>
                    <Link to="UploadUpdates" className={`${styles.btn} my-1`}>Upload Research</Link>
                    <Link to="schedulesDash" className={`${styles.btn} my-1`}>Upload Schedule</Link>
                    <Link to="membersDash" className={`${styles.btn} my-1`}>Add Member</Link>
                    <Link to="StudentsUpload" className={`${styles.btn} my-1`}>Upload Project</Link>                  
                  </>
                )}
                {userData.role === "doctor" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn} my-1`}>Manage Projects</Link>
                    <Link to="UploadUpdates" className={`${styles.btn} my-1`}>Upload Research</Link>
                    <Link to="schedulesDash" className={`${styles.btn} my-1`}>Upload Schedule</Link>
                  </>
                )}
                {userData.role === "student" && (
                  <>
                    <Link to="StudentsUpload" className={`${styles.btn} my-1`}>Upload Project</Link>                                    
                  </>
                )}
              </div>
            </div>
              <Outlet></Outlet>
          </div>
        </div>
      </section>  
    </>  
  )
}
