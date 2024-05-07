import styles from './CinemaGallery.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function CinemaGallery() {
  return (
    <div className="col-lg-10">
      <section className={styles.gallary}> 
      <div className="container">
        <h2>Gallery</h2>
        <div className={styles.galleryContent}>
          <div className="container-fluid">
            <div className="row">
              <div className={styles.list}>
                <Link to="/Cinema/cinemaGallery" className={styles.photobtn}>Photos</Link>
                <Link to="VideosGallery">Videos</Link>
              </div>
            </div>
          </div>
        </div>      
        <div className={`${styles.Holder} row`}>
          <Outlet></Outlet>
        </div>
      </div>
   </section>
    </div>
  )
}