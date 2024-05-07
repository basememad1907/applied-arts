import React, { useState } from 'react'
import styles from './ADV.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function ADV({userData}) {
  console.log(userData);
  // const [role,setRole] = useState(userData.role);
  return (
    <>
      <section className={styles.AdvHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Advertising</h2>
              <span>
                <Link to="/ADV/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutAdv}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                
                
                <Link to="advScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="advGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="AdvUpdate" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <Link to="facultyMembers" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Faculty Members</Link>
                {/* Conditional rendering based on role */}
                {userData.role === "admin" && (
                  <>
                    <Link to="UploadProjectsHome" className={`${styles.btn}  my-1`}>Manage Projects</Link>
                    <Link to="UploadUpdates" className={`${styles.btn}  my-1`}>Upload Research</Link>
                    <Link to="schedulesDash" className={`${styles.btn}  my-1`}>Upload Schedule</Link>
                    <Link to="membersDash" className={`${styles.btn}  my-1`}>Add Member</Link>
                    <Link to="StudentsUpload" className={`${styles.btn}  my-1`}>Upload Project</Link>
                  </>
                )}
                {userData.role === "doctor" && (
                  <>
                    <Link to="UploadProjectsHome" className='btn btn-success my-1'>Admin Upload Project</Link>
                    <Link to="UploadUpdates" className='btn btn-warning my-1'>Upload Research</Link>
                  </>
                )}
                {userData.role === "student" && (
                  <>
                    <Link to="StudentsUpload" className='btn btn-primary my-1'>Students Upload Project</Link>
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
