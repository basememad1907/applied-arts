import React, { useRef, useState, useEffect } from 'react';
import styles from './HomeProjectsViewer.module.css';
import Axios from 'axios';
import image from "../../../imgs/cinemaa.webp";
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function ProjectsViewer() {
           
    const [projectContainer, setProjectContainer] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);

    async function GetDataFromApi() {
        try {
            const { data } = await Axios.get(`https://applied-of-art-v-one.onrender.com/api/v1/uploads/gallery`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                },
            });
            setProjectContainer(data.approvedFiles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const FilterProjects = projectContainer.filter((p) => p.department ==='662591c4cf34345d4b8ad148');

    useEffect(() => {
        GetDataFromApi();
    }, []);

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
        <div className="col">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="row" id="tBody">
                        <div className="col">
                            <div className={styles.Holder}>
                                <section className={styles.Home}>
                                    <div className="row" id="tBody">
                                        {FilterProjects.length === 0 && (
                                            <div className="col text-center">
                                                <h4 className="alert alert-warning">No Projects To Display</h4>
                                            </div>
                                        )}
                                        {FilterProjects.length > 0 && FilterProjects.slice(-4).map((project, i) => (
                                            <div className={`col-lg-3 ${styles.cardHoler}`} key={i}>
                                                <div className={styles.card} onClick={() => handleShow(project)}>
                                                    <div className={styles.overlay}>
                                                        <div className={styles.textCard}>
                                                            <h3>{project.name}</h3>
                                                            <h6 className="py-2">Student Name: Basem</h6>
                                                        </div>
                                                    </div>
                                                    <img src={image} className={styles.img} alt="Project" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
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
                                            {selectedProject.images && selectedProject.images.map((image, index) => (
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
                </section>
            </div>
        </div>
    );
}
