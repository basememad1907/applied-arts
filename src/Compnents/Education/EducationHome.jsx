import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './EducationHome.module.css'; 
export default function EducationHome() {
  return (
    <section className={styles.education}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-10 col-sm-12">
            <div className={styles.list}>
              <ul>
                <li><Link to="/education/">Education <i className="fa-solid fa-chevron-right icon"></i></Link></li>
                <li><Link to="schedules">Schedules</Link></li>
                <li><Link to="strategies">Strategies</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
}
