import React, { useEffect, useState } from 'react';
import styles from './ScheduleViewer.module.css';

export default function ScheduleViewer() {
    const [schedualesContainer, setSchedualesContainer] = useState([]);

    useEffect(() => {
          fetch(`https://applied-of-art-v-one.onrender.com/api/v1/schedules`,{
            
                headers: {
                    "Content-Type":"application/json",
                    "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                },
                           
        }).then((response) => response.json()).then(result=>setSchedualesContainer(result.data))
    }, []);
    const FilterSchedule = schedualesContainer.filter((p) => p.departmentId ==='6625929ccf34345d4b8ad156');

    function display() {
        return [...FilterSchedule].reverse().map((schedule, index) => (
            <div className="col-lg-6" key={index}>
                <div className={styles.Scard} >
                    <a target='_blank' rel="noreferrer" href={schedule.link}> </a>
                    <div className="row">
                        <div className={`${styles.col3} col-lg-3`}>
                            <a target='_blank' rel="noreferrer" href={schedule.link}><i className="fa-regular fa-file-pdf" style={{ color: '#145a94' }}></i></a>
                        </div>
                        <div className={`${styles.col9} col-lg-9`}>
                            <h4>{schedule.title}</h4>
                            <p><a target='_blank' className={styles.href} href={schedule.link}>CLICK HERE</a></p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div className="row" id="tBody">
                    {display()}
                </div>
            </section>
        </div>
    );
}
