import React from 'react'
import styles from './CinemaHome.module.css';
import news from "../imgs/nnnnnn.jpg";
import HomeProjectsViewer from './Dashboard/Views/HomeProjectsviewer';
import HomeVideosViewer from './Dashboard/Views/HomeVideosViewer'
import MembersHomeViewer from './Dashboard/Views/MembersHomeViewer'

import { Link } from 'react-router-dom';

export default function CinemaHome() {
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
                The Photography, Cinema, and Television department in -O6U- is one of the most important departments in the College of Applied Arts. Graduates of the department compete in the job market in Egypt and in European countries. The department provides all fields of photography including commercial, journalistic, artistic, scientific, and educational photography. It also provides opportunities in lighting for cinema and television, as well as ideas about editing, directing, and scriptwriting. The department keeps pace very well with the developments and existing photography magazines.
                </p>
            </div>
          </div>
        </div>      
        <div className="col-lg-2">
          <div className={styles.icons}>
            <div className={styles.icn}>
            <Link to="https://www.facebook.com/profile.php?id=100087709085910&mibextid=ZbWKwL"><i class="fa-brands fa-facebook" style={{color: "#0050db",}}></i></Link>

              
            </div>
            <div className={styles.icn}>
              
              <Link to="https://instagram.com/cinema_o6u?igshid=MzRlODBiNWFlZA=="> <i class="fab fa-instagram"  style={{color: "#5f097c",}}></i></Link>
            </div>
            <div className={styles.icn}>
              <Link to="https://www.tiktok.com/@cinema_o6u?_t=8gE6qXyi0Np&_r=1"><i class="fa-brands fa-tiktok" style={{color: "#000000",}} ></i></Link>
              
            </div>
            <div className={styles.icn}>
             
              <Link to="https://youtube.com/@cinemao6u?si=a3Ybw_MsUmVg1WhM"> <i class="fa-brands fa-youtube" style={{color: "#ed0202",}}></i></Link>
            </div>
      
          </div>
        </div>
      </div>
    </div>

  {/* <!-- galllaryyyy --> */}
  <section className={styles.gallaryhome}> 
    <div className="container">
      <h2>Photos</h2>
      <div className="row">      
        <HomeProjectsViewer />  
      </div>
      <div className="row">
        <div className={styles.btns}>
          <Link to="cinemaGallery" className={styles.btn}>See more</Link>
        </div>
      </div>
    </div>
 </section>
 <section className={styles.Videos}>
 <div className="container">
      <h2>Videos</h2>
      <div className="row">      
        <HomeVideosViewer />
      </div>
      <div className="row">
        <div className={styles.btns}>
          <Link to="cinemaGallery" className={styles.btn}>See more</Link>
        </div>
      </div>
    </div> 
 </section>
{/* <!-- Doctorsss --> */}
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
{/* Our collaboration*/}
{/*  */}
{/*  */}
  </div>
  )
}
