import React from 'react';
import styles from "./FashionHome.module.css";
import news from "./imgs/nnnnnn.jpg";
import logo from './imgs/o6u logo.jpg';
import { Link } from 'react-router-dom';
import HomeProjectsViewer from "./Dashboard/Views/HomeProjectsviewer" ;
import MembersHomeViewer from './Dashboard/Views/MembersHomeViewer';

export default function FashionHome() {
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
                  
                      In the Fashion Design Department at the Faculty of Applied Arts - October 6 University, students learn how to innovate new solutions,
                      Fashion design is the art of applying design, aesthetics, and natural beauty to clothing and its accessories. It's influenced by cultural and social attitudes and has evolved over time. Fashion designers work in different ways. 
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
          <HomeProjectsViewer />
        </div>
        <div className="row">
          <div className={styles.btns}>
            <Link to="fashionGallery" className={styles.btn}>See more</Link>
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
{/* Our collaboration*/}
{/* <section className={styles.collaborations}>
  <div className="container">
    <div className="row">
      <div className={styles.title}>
        <h2>Collaborations</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />  
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" /> 
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" /> 
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
    </div>
  </div>
</section> */}
  {/*  */}
    </div>
  );
}
