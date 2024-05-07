import React, { useRef, useState, useEffect } from 'react';
import styles from './Requestsphotos.module.css'
import image from "../../../imgs/cinemaa.webp"
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function RequestPhotos({userData}){
  const [projectContainer, setProjectContainer] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef();
  const[width ,setWidth]= useState(0);

  async function GetDataFromApi() {
    try {
      fetch("https://applied-of-art.onrender.com/api/v1/uploads/pending-files",{
        credentials: "include",
        headers:{
          'Content-Type': 'application/json' ,
          "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
        }
      }).then((response)=>response.json())
        .then(result=>setProjectContainer(result.pendingFiles))
        } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  const FilterProjects = projectContainer.filter((p) => p.department ==='6625929ccf34345d4b8ad156');
  useEffect(() => {
    GetDataFromApi();
  }, []);

  async function approve(id){
    console.log(id);
    var body = {
      "action":"approve"
    }
    var requestOptions = {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json' ,
        authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
      },
      body:JSON.stringify(body),
    };
    await fetch(`https://applied-of-art.onrender.com/api/v1/uploads/pending-files/${id}`,requestOptions)
    console.log("good approve");
    GetDataFromApi();
  }
  async function reject(id){
    console.log(id);
    var body = {
      "action":"reject"
    }
    var requestOptions = {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json' ,
        authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
        },
        body:JSON.stringify(body),
      };

    await fetch(`https://applied-of-art-v-one.onrender.com/api/v1/uploads/pending-files/${id}`,requestOptions)
    console.log("good reject");
    GetDataFromApi();
  }
  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => {
      setSelectedProject(project);
  };
  useEffect(() => {
      const updateWidth = () => {
          const scrollWidth = carouselRef.current ? carouselRef.current.scrollWidth : 0;
          const offsetWidth = carouselRef.current ? carouselRef.current.offsetWidth : 0;
          setWidth(scrollWidth - offsetWidth);
      };

      window.addEventListener('resize', updateWidth);
      updateWidth();  // Initial call to set the width

      return () => window.removeEventListener('resize', updateWidth);
  }, [selectedProject]);  // Dependency on selectedProject to update on change
  
  return (
    <>
      <div className={styles.Title}> 
        <h2>Requests</h2>
      </div>
      <div className="row">
        { FilterProjects.map((project, i) => (
          <div className="col-lg-4 py-2" key={i}>
            <div className={`${styles.card} card`}>
              <img
                src={image}
                onClick={() => handleShow(project)}
                className="card-img-top"
                alt="Project"
              />
              <div className={`${styles.cardBody} card-body`}>
                <h5 className={`${styles.cardTitle} card-title`}>
                  {project.name}
                </h5>
                <p className={`${styles.cardText} card-text`}>
                  {project.description}
                </p>
                <p className={`${styles.cardText} card-text`}>
                  Advertising
                </p>
                
                <p className={`${styles.cardText} card-text`}>
                </p>
                {/* <p className={`${styles.cardText} card-text`}>Student Name: {project.student}</p> */}
                <button   className={`${styles.btnn} btn  mx-2`} onClick={()=>approve(project._id)  }>
                  approve
                </button>
                <button   className={`${styles.btn2} btn mx-2`} onClick={()=>reject(project._id)  }>
                  reject
                </button>
            
              </div>
            </div>
          </div> ))};
            {selectedProject && (
                <Modal show={true} onHide={handleClose} className={styles.model}>
                    <Modal.Header closeButton className={styles.Header}>
                        <Modal.Title>{selectedProject.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.modelBody}>
                        <motion.div ref={carouselRef} className={`${styles.carousel} carousel`}>
                            <motion.div 
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className={`${styles.innerCarousel} inner-carousel`}>
                            {selectedProject.images.map((image, index) => (
                                <motion.div className={styles.item}>
                                  <img key={index} src={image} alt="" />
                                </motion.div>
                             ))}
                            </motion.div>
                        </motion.div>
                    </Modal.Body>
                    <Modal.Footer className={styles.modelFooter}>
                        <p>Description: <br /> <span>{selectedProject.description}</span>.</p>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    </>
  );
}
