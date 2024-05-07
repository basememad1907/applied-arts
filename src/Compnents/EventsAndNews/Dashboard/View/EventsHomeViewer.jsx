import styles from "./EventsHomeViewer.module.css";
import React, { useEffect, useState } from 'react'
import second from '../../imgs/gallery-14.jpg'
export default function EventsHomeViewer() {
    const [projectContainer, setProjectContainer] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("Events"));
        if (storedProjects) {
            const reversedProjects = storedProjects.reverse();
            setProjectContainer(reversedProjects);
        }
    }, []);

    const display = () => {
        // عرض آخر card فقط إذا كان هناك عناصر في projectContainer
        if (projectContainer.length > 0) {
            const lastProject = projectContainer[0]; // آخر card
            return (
                <div className={styles.EventsHolder}>
                    <div className={`col-lg-11 my-4 ${styles.latestnews}`} >
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-lg-12 col-md-8 col-sm-8">
                                    <div className={styles.new}>
                                        <div className={styles.overlay}>
                                            <div className={styles.textover}>
                                                <h2 className={styles.EventTitle}>Event</h2>
                                                <p className={styles.descTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque </p>
                                            </div>
                                        </div>
                                        <img src={second} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>No projects available</div>;
        }
    };

    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div  id="tBody">
                    {display()}
                </div> 
            </section>
        </div>
    );
}
