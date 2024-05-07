import React, { useState, useEffect } from "react";
import styles from "./UploadProjectsDash.module.css";
import { Link } from "react-router-dom";
import AdminsProjectsViewer from "./Views/AdminsProjectsViewer";

export default function UploadProjectsDash() {
  // const [projectInfo, setProjectInfo] = useState({
  //   name: "",
  //   description: "",
  //   department: "66259187cf34345d4b8ad144",
  //   imageCover: null,
  //   images: [],
  // });

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   if (name === "images") {
  //     setProjectInfo({ ...projectInfo, images: [...files] });
  //   } else if (name === "imageCover" && files.length > 0) {
  //     const imageUrl = files[0];
  //     setProjectInfo({ ...projectInfo, imageCover: imageUrl });
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setProjectInfo({ ...projectInfo, [name]: value });
  // };

  // const uploadProject = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = new FormData();
  //     body.append("name", projectInfo.name);
  //     body.append("description", projectInfo.description);
  //     body.append("department", projectInfo.department);
  //     body.append("imageCover", projectInfo.imageCover);
  //      body.append('user', userData.id );

  //     projectInfo.images.forEach((image) => {
  //       body.append("images", image);
  //     });
  //   //   console.log(JSON.parse(localStorage.getItem("userToken")));
  //     console.log(projectInfo);

  //     const response = await fetch(
  //       "https://applied-of-art.onrender.com/api/v1/uploads/project",
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         headers: {
  //           // "Content-Type": "multipart/form-data",
  //           "Accept": "application/json",
  //           "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")) }`,
  //         },
  //         body: body ,
  //       }
  //     ).then ((res)=>res.json()).then((data)=>console.log(data));
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
      
  //     const responseData = await response.json();
  //     console.log(responseData);
      
      
  //     //  .then(result=>console.log(result))
  //     // const response = await axios.post('https://applied-of-art-v-one.onrender.com/api/v1/uploads/project', projectInfo);
  //     // console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className={styles.requests}>
          <Link to="RequestsViewer">
            <i className={`${styles.icon} fa-solid fa-hand`}></i>
          
          </Link>
      </div>
      <div className={styles.Title}>
          <h2>Projects</h2>
      </div>
      <AdminsProjectsViewer />
    </>
  );
}
