import React from 'react'
import styles from './AdvGallery.module.css';
import ProjectsViewer from './Dashboard/Views/ProjectsViewer'
import { Link } from 'react-router-dom';
export default function AdvGallery({userData}) {
  return (
    <div className="col-lg-10">
      <section className={styles.gallary}> 
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">      
          <ProjectsViewer userData={userData}/>
        </div>
        <div className="row">
          <div className={styles.btns}>
            <Link to="#" className={styles.btn}>See more</Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
