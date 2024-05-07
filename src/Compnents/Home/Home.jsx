import React from 'react';
import styles from "./Home.module.css";
import adv from './imgs/adv.jpg';
import fashion from './imgs/fashonnnn.jpg';
import ProductDesign from './imgs/pdhome.jpg';
import cinemaTv from './imgs/cinematv.jpg';
import Furne from './imgs/fur.jpg';
import o6uabout from './imgs/o6uuuuuuuuuuuuuuuuu.jpg'
import { Link } from 'react-router-dom';
import EventsHomeViewer from '../EventsAndNews/Dashboard/View/EventsHomeViewer';
import NewsHomeViewer from '../EventsAndNews/Dashboard/View/NewsHomeViewer';
import HomeGalleryViews from '../Gallery/HomeGalleryViews';

export default function Home() {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.overlay}>

              </div>
              <div className={styles.text}>
                <h2>Faculty of</h2>
                <h1>Applied Arts</h1>
                <p>In recognition of the civilizational role played by 6th of October University,<br />
                  the university has decided to establish a College of Applied Arts that focuses<br />
                  on the fields of design and production technology. The college's curriculum will <br />
                  include the latest scientific theories and advanced technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.sec2}>
      <div className="container">
        <div className={styles.bigcard}>
          <div className={`row ${styles.Lcard}`}>
            <div className="col-lg-4">
              <img src={o6uabout} alt=""  />
            </div>
            <div className="col-lg-8">
              <div className={styles.textcard}>
                <h3>About Us</h3>
                <p>The Faculty of Applied Arts was established in October 6th University as a cultural project that considers the field of design and production technology in accordance with the recent scientific theories and up-to-date technologies. <span>The faculty aims to cooperate with all of the authorities considered with the applied arts, such as universities, faculties scientific institutes, production establishments, and research centers in Egypt and abroad, to originate the recent findings in the sciences of design and technology, in order to achieve abilities and the required technical rather than artistic skills in the faculty graduates.</span></p>
                <button className={styles.btn}><Link to="aboutHome"> Learn More </Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* ///////////////////////////////////////////////////////////// */}

<section className={styles.Mcard}>
      <div className="container">
        <div className={`row ${styles.Tcard}`}>

          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className={styles.whitecard}>
              <div className={styles.underline}>
                <h3>Mission Of Faculty</h3>
                <p>Faculty of Applied Arts – O6U- is dedicated to prepare graduates whom are: creative designers capable to compete nationally and internationally. Also to produce scientific applied researches, which adopt Egypt's future vision, to continuously enhance society in relevance to ethical values, as well as, to allow educational environment that supports training and sustainable development.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-10 col-sm-12">
            <div className={styles.whitecard}>
              <div className={styles.upline}>
                <h3>VISION Of Faculty</h3>
                <p>Faculty of Applied Arts – O6U- is dedicated to prepare graduates whom are: creative designers capable to compete nationally and internationally. Also to produce scientific applied researches, which adopt Egypt's future vision, to continuously enhance society in relevance to ethical values, as well as, to allow educational environment that supports training and sustainable development.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* <!--     sec4     --> */}

    <section className={styles.dept}>
          <div className="container-fluid">
            <div className={styles.bigcard1}>
            <div className={`row ${styles.bigcard1}`}>
              <div className=" col-lg-2 col-md-4 col-sm-4">

             <div className={styles.card1}>
             <div class={styles.overlay}>
             <div class={styles.text1}>
              <h4>Department of product Design</h4>
              <Link to="productDesign" className={styles.btn}>learn more <i className={`fa-solid fa-arrow-right ${styles.icon}`} style={{ color: '#ffffff' }}></i></Link>
             </div>
              </div>
             <img src={ProductDesign} class="card-img-top" alt="Card Image 1" />
             </div>
              </div>

               <div className=" col-lg-2 col-md-4 col-sm-4">
              <div className={styles.card1}>
              <div class={styles.overlay}>
              <div class={styles.text1}>
              <h4>Department of Interior Design and Furniture</h4>
              <Link to="InteriorDesign" className={styles.btn}>learn more <i className={`fa-solid fa-arrow-right ${styles.icon}`} style={{ color: '#ffffff' }}></i></Link> 
               </div>
               </div>
               <img src={Furne} class="card-img-top" alt="Card Image 1" />
              </div>
              </div>

               <div className=" col-lg-2 col-md-4 col-sm-4">
                  <div class={styles.card1}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
            <h4>Department of Advertising</h4>
            <Link to="ADV" className={styles.btn}>learn more <i className={`fa-solid fa-arrow-right ${styles.icon}`}  style={{ color: '#ffffff' }}></i></Link>
          </div>
          </div>
          <img src={adv} class="card-img-top" alt="Card Image 1" />
        </div>
              </div>

               <div className=" col-lg-2 col-md-4 col-sm-4">

               <div class={styles.card1}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of Fashion Design</h4>
              <Link to="Fashion" className={styles.btn}>learn more <i className={`fa-solid fa-arrow-right ${styles.icon}`} style={{ color: '#ffffff' }}></i></Link>              
            </div>
          </div>
          <img src={fashion} class="card-img-top" alt="Card Image 1"/>          
        </div>
              </div>

               <div className="col-lg-2 col-md-4 col-sm-4">

               <div class={styles.card1}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of Cinema,Tv and Photography</h4>
              <Link to="Cinema" className={styles.btn}>learn more <i className={`fa-solid fa-arrow-right ${styles.icon}`} style={{ color: '#ffffff' }}></i></Link>
            </div>
          </div>
          <img src={cinemaTv} class="card-img-top" alt="Card Image 1" />
        </div>
              </div>
            </div>
           </div>
          </div>
      </section>
 {/* ///////////////////////////////////////////////////////// */}

       <section className={styles.EventBox}>
      <div className="container">
        
        <div className={styles.new_events}>

        <div className={`row ${styles.Levent}`}>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={`row ${styles.boxev1}`}>
              <NewsHomeViewer />
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-12">
            <EventsHomeViewer />
            <button class={styles.btn}><Link to="eventsAndNews"> See More</Link></button>
          </div>
        </div>
        </div>
      </div>
    </section>

       {/* Gallery */}

       <section className={styles.galleryContent}>
        <div className="container-fluid">
          <div className="row">
            <div className="gallery">
              <div className="container">
                <div className="row">
                  <div className={styles.headText}>
                    <div className={styles.text}>
                      <h4>Gallery</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <HomeGalleryViews />    
                </div>
                <div className="row">
                  <div className={styles.btns}>
                    <Link to="gallery" className={styles.btn}>See more</Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
