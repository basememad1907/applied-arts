import React, { useRef, useState, useEffect } from 'react';
import styles from './ProjectsViewer.module.css';
import Axios from 'axios';
import image from "../../../imgs/cinemaa.webp";
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ProjectsViewer() {   
    const [projectData, setProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);

    async function getDataFromApi() {
        try {
            const response = await Axios.get(`https://applied-of-art-v-one.onrender.com/api/v1/uploads/gallery`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                },
            });
            if (response.data && response.data.approvedFiles) {
                setProjectData(response.data.approvedFiles);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getDataFromApi();
    }, []);
    const FilterProjects = projectData.filter((p) => p.department ==='662591c4cf34345d4b8ad148');

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
    }, [selectedProject]);

    return (
        <div className="col">
            <div className="col">
                {(FilterProjects.length === 0 && !selectedProject) ? (
                    <div className="text-center">
                        <h4 className="alert alert-warning">No Projects To Display</h4>
                    </div>
                ) : (
                    <div className={styles.Holder}>
                        <section className={styles.Home}>
                            <div className="row" id="tBody">
                                {[...FilterProjects].reverse().map((project, i) => (
                                    <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.cardHoler}`} key={i}>
                                        <div className={styles.card} onClick={() => handleShow(project)}>
                                            <div className={styles.overlay}>
                                                <div className={styles.textCard}>
                                                    <h4>{project.name}</h4>
                                                    <h6 className="py-2">Student Name: Basem </h6>
                                                </div>
                                            </div>
                                            <img src={image} className={styles.img} alt="Project" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

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
                                    className={`${styles.innerCarousel} inner-carousel`}
                                >
                                    {selectedProject.images.map((image, index) => (
                                        <motion.div className={styles.item} key={index}>
                                            <img src={image} alt="" />
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
        </div>
    );    
}
