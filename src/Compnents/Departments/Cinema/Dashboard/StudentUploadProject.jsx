import styles from './StudentUploadProject.module.css';
import { Link , Outlet } from 'react-router-dom';

export default function StudentUploadProject() {
  return (
    <>
        <div className="col-lg-10">
            <div className="row">
                <div className={styles.galleryContent}>
                    <div className="row">
                        <div className={styles.list}>
                        <Link to="/Cinema/StudentsUploadProjects" className={styles.photobtn}>Photos</Link>
                        <Link to="UploadVideoDash">Videos</Link>
                        </div>
                    </div>
                    <div className={`${styles.Holder} row`}>
                        <Outlet></Outlet>
                    </div>
                </div>  
            </div>
        </div>
    </>
  )
}
