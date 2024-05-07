import React from 'react';
import styles from './Gallery.module.css'; // Import CSS module
import { Link, Outlet } from 'react-router-dom';



export default function Gallery() {
  return (
    <>
  
  <section className={styles.GalleryHome}>
      <div className="container-fluid">
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>

              <h1>G a l l e r y</h1>

              <span className={styles.span}><Link to="/gallery/" >Gallery /</Link> <Link to="/">Home</Link></span>
            
            </div>
          </div>
        </div>
      </div>
    </section>





      <section className={styles.galleryContent}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.list}>
              <Link to="/gallery/" className={styles.photobtn}>Photos</Link>
              <Link to="videos">Videos</Link>
            </div>
          </div>
          <div className={`${styles.Holder} row`}>
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
