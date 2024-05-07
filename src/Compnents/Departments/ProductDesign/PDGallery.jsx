import React from 'react'
import styles from './PDGallery.module.css';
import { Link } from 'react-router-dom';
import ProjectsViewer from './Dashboard/Views/ProjectsViewer';

export default function PDGallery() {
  return (
    <>
    <div className="col-lg-10">
      <section className={styles.gallary}> 
        <div className="container">
          <h2>Gallery</h2>
          <div className="row">      
            <ProjectsViewer /> 
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
