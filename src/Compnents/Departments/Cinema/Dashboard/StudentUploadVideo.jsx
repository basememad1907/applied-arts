import React, { useState, useEffect } from 'react';
import styles from './StudentUploadVideo.module.css';

export default function StudentUploadVideo() {
    const [projectContainer, setProjectContainer] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourCinemaVideosStudents"));
        if (storedProjects) {
            setProjectContainer(storedProjects);
        }
    }, []);

    const addProject = () => {
        const projectName = document.getElementById("projectName").value;
        const description = document.getElementById("Description").value;
        const link = document.getElementById("Link").value;
        const departmentName = document.getElementById("DepartmentName").value;
        const studentName = document.getElementById("StudentName").value;
        const fileInput = document.getElementById('ProductImage');
        const projectImage = fileInput.files[0];

        if (!projectName ||!link || !description || !departmentName || !studentName || !projectImage) {
            alert("Please fill in all fields and select an image.");
            return;
        }

        const project = {
            name: projectName,
            description,
            link,
            department: departmentName,
            student: studentName,
            image: ""
        };
        const reader = new FileReader();
        reader.onload = function (e) {
            project.image = e.target.result;
            const updatedProjects = [...projectContainer, project];
            localStorage.setItem("ourCinemaVideosStudents", JSON.stringify(updatedProjects));
            setProjectContainer(updatedProjects);
            deleteInput();
        };
        reader.readAsDataURL(projectImage);
    };

    const deleteAll = () => {
        localStorage.removeItem("ourCinemaVideosStudents");
        setProjectContainer([]);
    };

    const deleteInput = () => {
        document.getElementById("projectName").value = "";
        document.getElementById("Description").value = "";
        document.getElementById("Link").value = "";
        document.getElementById("DepartmentName").value = "";
        document.getElementById("StudentName").value = "";
        document.getElementById('ProductImage').value= "";
    };

    const deleteCurrent = (i) => {
        const updatedProjects = [...projectContainer];
        updatedProjects.splice(i, 1);
        localStorage.setItem("ourCinemaVideosStudents", JSON.stringify(updatedProjects));
        setProjectContainer(updatedProjects);
    };

  return (
    <div className='col'>
        <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className={styles.Title}>
                                    <h2>Video</h2>
                                </div>
                                <label htmlFor="projectName" className="mt-2"><span>Project Name</span></label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="projectName" />

                                <label htmlFor="Description" className="mt-3">Description</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="Description" />
                                
                                <label htmlFor="Link" className="mt-3">Link </label>
                                <input type="text" className={`${styles.formControl} form-control mt-1`} id="Link" />  
                                
                                <label htmlFor="DepartmentName" className="mt-2">Department Name</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="DepartmentName" />

                                <label htmlFor="StudentName" className="mt-2">Student Name</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="StudentName" />
                                
                                <label htmlFor="ProductImage" className="mt-2">Project Image</label>
                                <input type="file" accept="image/*" className={`${styles.formControl} form-control mt-1 `} id="ProductImage" />

                                <div className="btns py-4">
                                    <button className={`${styles.btn}  mt-3`} onClick={addProject}>Add Project</button>     
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </div>  
  )
}
