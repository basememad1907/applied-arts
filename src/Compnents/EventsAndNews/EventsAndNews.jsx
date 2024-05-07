import React from 'react';
import styles from "./EventsAndNews.module.css";
import { Link, Outlet } from 'react-router-dom';

export default function EventsAndNews() {
  return (
    <>
      <section className={styles.News}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2> Events & News </h2>
              <span><Link to="eventsAndNews" >Home</Link></span>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.sideBar}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={styles.list}>
                <ul>
                  <li><Link to="">Events</Link></li>
                  <li><Link to="News"> News </Link></li>
                  <Link to="EventsNewsDash" className='btn btn-success text-white my-4'> Add Events&News </Link>               
                </ul>
              </div>
            </div>
                 
           <Outlet></Outlet>
          </div>
        </div>
      </section> 
    </>
  )
}
