import React from 'react'
import styles from './UserProfile.module.css'
import user  from "./imgs/u222.jpg"

export default function UserProfile({userData}) {
  return (
    <>
    <section className={styles.sec1}>
       <div className={styles.profile}>
           <div className={styles.text}>
            <div className={styles.bigcard}>
            <div className={styles.imgcard}>
              <img src={user} alt="" />
            </div>
            </div>
            <h3>{userData.name}</h3>
            <p> {userData.role} </p>
            <p>{userData.id}</p>
            {/* <p>202117081@o6u.edu.eg </p> */}
            {/* <h4>Amiral Atef Dahshan {name}</h4>
            <h4> 202117081 {studentID}</h4>
            <h4>Fashion Design{Department}</h4>
            <h4>202117081@o6u.edu.eg {email}</h4> */}
           </div>
       </div>
      </section>  
    </>
  )
}
