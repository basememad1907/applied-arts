import React from 'react';
import styles from "./AboutHome.module.css";
import { Link, Outlet } from 'react-router-dom';

export default function AboutHome() {
  return (
    <>
      <section className={styles.aboutHome}> 
        <div className="container">
          <div className={styles.text}> 
            <div className={styles.overlay}></div> 
            <h1>About Us</h1>
            <span><Link to="about">About us /</Link> <Link to="/">Home</Link></span>
          </div>
        </div>
      </section>

      <section className={styles.sideBar}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.list}>
                <ul>
                  <li><Link to="aboutIntroduction">Introduction</Link></li>
                  <li><Link to="/aboutHome/">About us <i className={`${styles.icon} fa-solid fa-chevron-right`}></i></Link></li>
                  <li><Link to="aboutEstablishment">The Establishment</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="container">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
