import React, { useState, useEffect } from 'react';
import styles from './UploadPhotosDash.module.css';
import { Link } from 'react-router-dom';
import AdminPhotosViewer from './Views/AdminPhotosViewer';

export default function UploadPhotosDash() {
    // const [projectInfo, setProjectInfo] = useState([]);
    // const [projectData, setProjectData] = useState({
    //     imageCover: "",
    //     images: [],
    //     projectName: "",
    //     studentName: "",
    //     description: "",
    //     department: ""
    // });

    // const fileToBase64 = (file, callback) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => callback(reader.result);
    //     reader.onerror = (error) => {
    //         console.error('Error converting file:', error);
    //     };
    // };

    // const handleFileChange = (event) => {
    //     const { files } = event.target;
    //     let imageArray = [];

    //     Array.from(files).forEach(file => {
    //         if (file.type.startsWith('image/')) {
    //             fileToBase64(file, (base64String) => {
    //                 imageArray.push(base64String);
    //                 setProjectData(prevData => ({ ...prevData, images: imageArray }));
    //             });
    //         }
    //     });
    // };

    // const handleChange = (e) => {
    //     const { name, value, files } = e.target;
    //     if (name === "images") {
    //         handleFileChange(e);
    //     } else if (name === "imageCover" && files.length > 0) {
    //         fileToBase64(files[0], (imageUrl) => {
    //             setProjectData({ ...projectData, imageCover: imageUrl });
    //         });
    //     } else if (name === "imageCover") {
    //         setProjectData({ ...projectData, imageCover:"" });
    //     } else {
    //         setProjectData({ ...projectData, [name]: value });
    //     }
    // };

    // useEffect(() => {
    //     const storedProjects = JSON.parse(localStorage.getItem("ourCinemaPhotos")) || [];
    //     setProjectInfo(storedProjects);
    // }, []);

    // const addProject = (e) => {
    //     e.preventDefault();
    //     const { projectName, description, department, studentName, imageCover, images } = projectData;

    //     if (!projectName || !description || !department || !studentName || !imageCover || images.length === 0) {
    //         alert("Please fill in all fields and select an image.");
    //         return;
    //     }

    //     const project = {
    //         name: projectName,
    //         description,
    //         department,
    //         student: studentName,
    //         imageCover,
    //         images
    //     };

    //     const updatedProjects = [...projectInfo, project];
    //     localStorage.setItem("ourCinemaPhotos", JSON.stringify(updatedProjects));
    //     setProjectInfo(updatedProjects);
    //     deleteInput();
    // };

    // const deleteInput = () => {
    //     setProjectData({
    //         imageCover: "",
    //         images: [],
    //         projectName: "",
    //         studentName: "",
    //         description: "",
    //         department: ""
    //     });
    // };

    // const deleteCurrent = (i) => {
    //     const updatedProjects = [...projectInfo];
    //     updatedProjects.splice(i, 1);
    //     localStorage.setItem("ourCinemaPhotos", JSON.stringify(updatedProjects));
    //     setProjectInfo(updatedProjects);
    // };

    // const displayProjects = () => {
    //     return projectInfo.map((project, i) => (
    //         <div className="col-lg-4 col-md-4 col-sm-6 py-2" key={i}>
    //             <div className={`${styles.card} card`}>
    //                 <img src={project.imageCover} className="card-img-top" alt="Project" />
    //                 <div className={`${styles.cardBody} card-body`}>
    //                     <h5 className={`${styles.cardTitle} card-title`}>Project Name: {project.name}</h5>
    //                     <p className={`${styles.cardText} card-text`}>Description: {project.description}</p>
    //                     <p className={`${styles.cardText} card-text`}>Department: {project.department}</p>
    //                     <p className={`${styles.cardText} card-text`}>Student: {project.student}</p>
    //                     <button className={`${styles.btnn} btn btn-danger`} onClick={() => deleteCurrent(i)}>Delete</button>
    //                 </div>
    //             </div>
    //         </div>
    //     ));
    // };

    return (
        <>
            {/* <div className={styles.requests}>
                <Link to="CinemaRequestViewer">
                    <i className={`${styles.icon} fas fa-hand`}></i>
                </Link>
            </div> */}
            <div className={styles.requests}>
                <Link to="CinemaRequestViewer">
                <i className={`${styles.icon} fas fa-hand`}></i>
                </Link>
            </div>
            <div className={styles.Title}>
                <h2>Photos</h2>
            </div>
            <div className="row" id="tBody">
                <AdminPhotosViewer />
            </div>
        </>
    );
}
