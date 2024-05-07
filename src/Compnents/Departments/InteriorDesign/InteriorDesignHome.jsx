import React from 'react';
import styles from './InteriorDesignHome.module.css';
import news from "../imgs/nnnnnn.jpg";
import { Link } from 'react-router-dom';
import HomeProjectsView from './Dashboard/Views/HomeProjectsviewer'
import MembersHomeView from './Dashboard/Views/MembersHomeViewer'
export default function InteriorDesignHome() {
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
                Interior design is the art and science of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment for the people using the space. Interior designers plan, research, coordinate, and manage projects, typically working with architects, builders, and other stakeholders to create functional and stylish interior spaces. Interior design encompasses a wide range of elements, including color schemes, furniture selection, lighting, materials, textures, and spatial arrangements, all aimed at creating an atmosphere that is both functional and visually appealing.
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
          <HomeProjectsView />
      </div>
      <div className="row">
        <div className={styles.btns}>
          <Link to="intDesignGallery" className={styles.btn}>See more</Link>
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
        <MembersHomeView />
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
  )
}
