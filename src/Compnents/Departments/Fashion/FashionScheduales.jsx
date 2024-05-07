import React from 'react'
import styles from './FashionScheduales.module.css';
import ScheduleViewer from './Dashboard/Views/ScheduleViewer';

export default function FashionScheduales() {
  return (

<div className="col-lg-10">
            <div className="container">     
                <div className={styles.schedules}>
                     <div className="container">
                        <h2>Schedules</h2>

                        <div className="row">
                            <ScheduleViewer />
                        </div>
                     </div>
                </div>
            </div>
         </div>
  )
}
