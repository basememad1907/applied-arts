import React, { useState, useEffect } from 'react';
import styles from './VideosViewer.module.css';

export default function VideosViewer() {
    const [projectContainer, setProjectContainer] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourCinemaVideos"));
        if (storedProjects) {
            setProjectContainer(storedProjects);
        }
    }, []);

    const displayProjects = () => {
        const lastFourProjects = projectContainer.slice(-4); // يحصل على آخر أربعة مشاريع
        return lastFourProjects.map((project, i) => (
            <div className="col-lg-3" key={i}>
                <div className={styles.card}>
                  <div className={styles.overlay}>
                    <div className={styles.holder}>
                      <div className={styles.textCard}>
                        <h3>Project Name: {project.name}</h3>
                        <p>
                          Description : <span> {project.description} </span>.
                        </p>
                        <h5>Department Name: {project.department} </h5>
                        <h6 className="py-2">Director Name:{project.student}</h6>
                        <a className={`${styles.cardText} card-text`} href='{project.link}'>
                            <i className={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src={project.image} className={styles.img} alt="Project Image" />
                </div>
            </div>
        ));
    };

  return (
    <div className="col">
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div className="row" id="tBody">
                    {displayProjects()}
                </div>
            </section>
        </div>
    </div>
  )
}
