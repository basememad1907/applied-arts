import React from 'react'
import styles from './IntDesignGallery.module.css';
import ProjectsViewer from './Dashboard/Views/ProjectsViewer'
import { Link } from 'react-router-dom';

export default function IntDesignGallery() {
  return (
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
  )
}