import styles from './UploadProjectsHome.module.css';
import { Link, Outlet } from 'react-router-dom';
export default function UploadProjectsHome() {
  return (
    <>
     <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}
