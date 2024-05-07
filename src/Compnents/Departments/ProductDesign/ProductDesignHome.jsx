import React from 'react';
import styles from './ProductDesignHome.module.css';
import product2 from '../imgs/product22.jpg';
import news from "../imgs/nnnnnn.jpg";
import { Link } from 'react-router-dom';
import MembersHomeViewer from './Dashboard/Views/MembersHomeViewer';
import HomeProjectsviewer from './Dashboard/Views/HomeProjectsviewer'
export default function ProductDesignHome() {
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
                In the Product Design Department at the Faculty of Applied Arts - October 6 University, students learn how to innovate new solutions and enhance existing ones to improve daily life. The program combines cutting-edge technology, technical skills, and a solution-oriented approach with student creativity. 

The final year project tests students' ability to apply what they have learned in practical scenarios. My advice to my students is to stay strong and never give up because jobs won't come knocking on your door; you must discover your strengths through time and practical experience. 

Stay open to opportunities, even if they are not directly related to product design. Starting your career in design may be tough, but so are you. Opportunities will come when you are ready, so until then, stay grounded, keep working on projects that excite you, and make time for things that make you happy. No pain, no gain.
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
          <Link to="pdGallery" className={styles.btn}>See more</Link>
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
        <div className="row">
        <div className={styles.btns}>
          <Link to="facultyMembers" className={styles.btn}>See more</Link>
        </div>
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
