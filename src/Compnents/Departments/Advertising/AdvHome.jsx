import React from 'react'
import styles from './AdvHome.module.css';
import news from "../imgs/nnnnnn.jpg";
import HomeProjectsviewer from "./Dashboard/Views/HomeProjectsviewer"
import { Link } from 'react-router-dom';
import MembersHomeViewer from './Dashboard/Views/MembersHomeViewer';

export default function AdvHome() {
  return (
    <div className="col-lg-10">
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="parent">
            <div className={styles.textHolder}>
              <div className={styles.upText}>
                <h3>About Department</h3>
              </div>                           
                <p>
                An advertising department is a dedicated division within a Faculty that handles all aspects of advertising 
                and promotional activities. The primary function of an advertising department is to develop and execute 
                advertising strategies and campaigns to effectively reach the target audience and achieve marketing objectives.
                </p>
            </div>
          </div>
        </div>      
      </div>
    </div>

   
  {/* <!-- galllaryyyy --> */}
  <section className={styles.gallaryhome}> 
    <div className="container">
      <h2>Gallery</h2>
      <div className="row">      
          <HomeProjectsviewer />
      </div>
      <div className="row">
        <div className={styles.btns}>
          <Link to="advGallery" className={styles.btn}>See more</Link>
        </div>
      </div>
    </div>
 </section>
{/* <!-- Doctorsss product design --> */}
<section className={styles.Doctors}>
    <div className="container">
      <div className={styles.Dcard}>
        <div className={styles.text1}>    
            <h2>Doctors</h2>
        </div>
        <div className={styles.item}>
          <div className="row">
            <MembersHomeViewer />
          </div>
      </div>
    </div>
    </div>
</section>
{/*  */}
  </div>
  )
}
