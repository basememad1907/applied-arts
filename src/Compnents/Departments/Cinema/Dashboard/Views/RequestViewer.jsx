import styles from './RequestViewer.module.css';
import { Link , Outlet } from 'react-router-dom';

export default function RequestViewer() {
  return (
    <>
        <div className="col-lg-10">
            <div className="row">
                <div className={styles.galleryContent}>
                    <div className={`${styles.Holder} row`}>
                        <Outlet></Outlet>
                    </div>
                </div>  
            </div>
        </div>
    </>  
    )
}
