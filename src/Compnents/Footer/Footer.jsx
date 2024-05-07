import React from 'react';
import styles from "./Footer.module.css";
import o6uLogo from "./Imgs/footerlogooooo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (               
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styles.boxfooter}>
              <img src={o6uLogo} alt="o6u logo" />
              <div className={styles.f_social_icon}>
                <ul>                 
                  <li><Link to="https://o6u.edu.eg/default.aspx?id=70"> <i class="fa-solid fa-globe" style={{ color: ' #149de1' }}></i></Link></li> 
                  <li><Link to="https://www.facebook.com/o6u.eg?mibextid=ZbWKwL"> <i className={`fa-brands fa-facebook ${styles.icon1}`} style={{ color: '#2005f0' }}></i></Link></li>
                  <li><Link to="https://youtube.com/@cinemao6u?si=a3Ybw_MsUmVg1WhM"><i className={`fa-brands fa-youtube ${styles.icon1}`} style={{ color: '#ff0000' }}></i></Link></li>
                  <li><Link to="https://o6u.edu.eg/default.aspx?id=70"><i className={`fa-brands fa-twitter ${styles.icon1}`} style={{ color: '#74C0FC' }}></i></Link></li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styles.boxfooter}>
              <div className={styles.links1}>
                <h3 className="f-title">Main Links</h3>
                <ul className="list-unstyled f_list">
                  <li><i className={`fa-solid fa-play ${styles.icons}` }style={{ color: '#5711c0' }}></i><Link to="/">Home</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="AboutHome">About</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="Gallery">Gallery</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="EventsAndNews">News & Events</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="EducationHome">Education</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styles.boxfooter}>
              <div className={styles.dept}>
                <h3 className="f-title">Departments</h3>
                <ul className="list-unstyled f_list">
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="productDesign">Product Design</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="Cinema">Cinema, Tv & Photography</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="InteriorDesign">Interior Design</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="ADV">Advertising</Link></li>
                  <li><i className={`fa-solid fa-play ${styles.icons}` } style={{ color: '#5711c0' }}></i><Link to="Fashion">Fashion Design</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styles.boxfooter}>
              <div className={styles.contact}>
                <h3 className="f-title">Contact Us</h3>
                <ul className="listttnew">
                  <li><i className={`fa-regular fa-envelope ${styles.icon3}`} style={{ color: '#5711c0' }}></i>adminoct@o6u.edu.eg President-office@o6u.edu.eg</li>
                  <li><i className={`fa-solid fa-phone ${styles.icon3}`} style={{ color: '#5711c0' }}></i>(+2)38353216</li>
                  <li><i className={`fa-solid fa-location-dot ${styles.icon3}`} style={{ color: '#5711c0' }}></i>6th of October City, Giza Governorate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bg}>
          {/* <div className={styles.footer_bg_two}></div> */}
        </div>
      </div>
    </footer>

  
  );
}
