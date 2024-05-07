import React, { useRef, useState, useEffect } from 'react';
import styles from './PulicGalleryViewer.module.css';
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function PulicGalleryViewer() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const carouselRef = useRef();
    const[width ,setWidth]= useState(0)

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourPDProject"));
        if (storedProjects) {
            setProjects(storedProjects);
        }
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
        <div className="col px-3">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="row" id="tBody">
                        {projects.slice(-8).map((project, i) => (
                            <div className={`col-lg-3 ${styles.cardHolder}`} key={i}>
                                <div className={styles.card} onClick={() => handleShow(project)}>
                                    <div className={styles.overlay}>
                                        <div className={styles.holder}>
                                            <div className={styles.textCard}>
                                                <h3>{project.name}</h3>
                                                <h6 className="py-2">Student Name: {project.student}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={project.imageCover} alt="Project" />
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
    );
}
