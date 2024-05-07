import React, { useState } from 'react'
import styles from './Cinema.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Cinema({userData}) {
  // const [role,setRole] = useState("admin")
  return (
<>
      <section className={styles.CinemaHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Cinema ,TV & Photography</h2>
              <span>
                <Link to="/Cinema/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutCinemaHome}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                {/* <Link to="cinemaSubjects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link> */}
                <Link to="cinemaScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="cinemaGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="cinemaUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <Link to="facultyMembers" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Faculty Members</Link>
                {/* <a href='#' className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Feedback</a> */}
                {userData.role === "admin" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn}  my-1`}>Manage Projects</Link>
                    <Link to="UploadUpdates" className={`${styles.btn}  my-1`}>Upload Research</Link>
                    <Link to="schedulesDash" className={`${styles.btn}  my-1`}>Upload Schedule</Link>
                    <Link to="membersDash" className={`${styles.btn}  my-1`}>Add Member</Link>
                </>)}
                {userData.role === "student" && (
                  <>
                    <Link to="StudentsUploadProjects" className={`${styles.btn}  my-1`}>Upload Project</Link>
                  </>
                )}
                {userData.role === "doctor" && (
                  <>
                    <Link to="UploadProjects" className={`${styles.btn}  my-1`}>Manage Projects</Link>
                    <Link to="UploadUpdates" className={`${styles.btn}  my-1`}>Upload Research</Link>
                    <Link to="schedulesDash" className={`${styles.btn}  my-1`}>Upload Schedule</Link>
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
