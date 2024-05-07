import React, { useState, useEffect } from 'react';
import styles from './StudentsUploadProjects.module.css';

export default function StudentsUploadProjects({ userData }) {
  const [projectInfo, setProjectInfo] = useState({
    name: "",
    description: "",
    department: "662591d1cf34345d4b8ad14c",
    imageCover: null,
    images: [],
  });

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (name === "images") {
      setProjectInfo({ ...projectInfo, images: [...files] });
    } else if (name === "imageCover" && files.length > 0) {
      const imageUrl = files[0];
      setProjectInfo({ ...projectInfo, imageCover: imageUrl });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  };

  const uploadProject = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append("name", projectInfo.name);
      body.append("description", projectInfo.description);
      body.append("department", projectInfo.department);
      body.append("imageCover", projectInfo.imageCover);
      body.append('user', userData.id);

      projectInfo.images.forEach((image) => {
        body.append("images", image);
      });
      console.log(projectInfo);
      console.log(userData);    
      const response = await fetch(
        "https://applied-of-art.onrender.com/api/v1/uploads/project",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Accept": "application/json",
            "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")) }`,
          },
          body: body ,
        }
      ).then ((res)=>res.json()).then((data)=>console.log(data));
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteInput = () => {
    document.getElementById("projectName").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("ProductImage").value = "";
    document.getElementById("Images").value = "";
  }
  return (
      <>
        <div className="col-lg-10">
          <div className={styles.Holder}>
              <section className={styles.Home}>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                          <div className={styles.Title}>
                              <h1>Projects</h1>
                          </div>
                          <form onSubmit={uploadProject}>
                            <label htmlFor="projectName" className="mt-2">
                              <span>Project Name</span>
                            </label>
                            <input 
                              name="name"  
                              onChange={handleChange} 
                              type="text" className={`${styles.formControl} form-control mt-1 `}
                              id="projectName"
                            />
                            <label htmlFor="Description" className="mt-3"> 
                              Description 
                            </label>
                            <input 
                              name="description" 
                              onChange={handleChange} 
                              type="text" 
                              className={`${styles.formControl} form-control mt-1 `} 
                              id="Description"
                            />
                            <label htmlFor="ProductImage" className="mt-2"> 
                              Project Image 
                            </label>
                            <input 
                              name="imageCover" 
                              onChange={handleFileChange} 
                              type="file" 
                              className={`${styles.formControl} form-control mt-1 `} 
                              id="ProductImage"
                            />
                            <label htmlFor="Images" className="mt-2">  
                              Images  
                            </label>
                            <input 
                              name="images" 
                              onChange={handleFileChange} 
                              multiple 
                              type="file" 
                              className={`${styles.formControl} form-control mt-1 `} 
                              id="Images"
                            />
                            <div className="btns py-4"> 
                              <button className={`${styles.btn}  mt-3`} type="submit" onClick={deleteInput}>
                                Add Project 
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
            </div>
        </>
  );
}
