import React, { useState, useEffect } from "react";
import styles from "./UploadUpdates.module.css";
import { Link, NavLink } from "react-router-dom";

export default function UploadResearches({userData}) {
  const [researchContainer, setResearchContainer] = useState([]);
  const [research, setResearch] = useState({
    name: "",
    file: null,
  });


  async function GetDataFromApi() {
    try {
      fetch(`https://applied-of-art-v-one.onrender.com/api/v1/research`,{
        method:"GET",
        headers: {
            "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
        },
       })
       .then((response)=> response.json())
       .then(result=>setResearchContainer(result.data))
  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
  const FilterResearch = researchContainer.filter((p) => p.departmentId ==='662591c4cf34345d4b8ad148');
        
useEffect(() => {
    GetDataFromApi();
}, []);

  const handelChange = (e) => {
    let copy = { ...research };
    if (e.target.name === "file") {
      copy.file = e.target.files[0];
    } else {
      copy.name = e.target.value;
    }
    setResearch(copy);
  };
  
  const AddResearch = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!research.name || !research.file) {
      alert("Please fill in all fields.");
      return;
    }
  
    console.log(research);
    const body = new FormData();
    body.append("name", research.name);
    body.append("pdf", research.file);
    body.append("departmentId", "FilterResearch");
    body.append("userId", userData.id);
    try {
        console.log('before post');
      const response = await fetch(
        "https://applied-of-art.onrender.com/api/v1/research",
        {
          method: "POST",
          credentials: "include",
          headers: {
            // "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "authorization": `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
          body: body,
        }
      ).then( (response) => response.json());
      console.log(response);
      GetDataFromApi();
      console.log('after post');
    } catch (e) {
      console.log(e);
    }
  };

  const deleteInput = () => {
    const researchTitleInput = document.getElementById("ResearchTitle");
    const pdfInput = document.getElementById("ReserchFile");
  
    if (researchTitleInput) {
      researchTitleInput.value = "";
    }
  
    if (pdfInput) {
      pdfInput.value = "";
    }
  };  

  async function deleteProject(id) {
      console.log(id);
      try {
          await fetch(`https://applied-of-art-v-one.onrender.com/api/v1/research/${id}`, {
              method: 'DELETE',
              headers: {
                  "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
              },
            });
            GetDataFromApi();
          // After successful delete, update the project data
      } catch (err) {
          console.log(err);
      }
  }
  const display = () => {
    return FilterResearch.map((research, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 py-4">
        <div key={index} className={`${styles.card} card`}>
          <div className={styles.cardImg}>
            
          </div>
          <div className={`${styles.cardBody} card-body`}>
            <h5 className={`${styles.cardTitle} card-title`}>
              {research.name}
            </h5>
            <a
              className={`${styles.cardText} card-text`}
              href={research.file}
              target="_blank"
            >
              {/* <span className={styles.linkLable}> Link:</span>{" "} */}
              <span className={styles.text}> {research.file} </span>
            </a>
            
            <button
              className={`${styles.btnn} btn `}
              onClick={(e)=>deleteProject(research._id)}><i class={`fa-regular fa-trash-can ${styles.trash}`} style={{color: "#d70404",}}></i>  </button>
              
            <div>
            </div>
             
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div className="col-lg-10">
      <div className={styles.Holder}>
        <section className={styles.Home}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className={styles.Title}>
                  <h2>Upload researches</h2>
                </div>
                <form action="" onSubmit={AddResearch}>
                  <label htmlFor="ResearchTitle" className="mt-2">
                    <span>Research Title</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    onChange={handelChange}
                    className={`${styles.formControl} form-control mt-1`}
                    id="ResearchTitle"
                  />
                  
                  <label htmlFor="ResearchFile" className="mt-2">
                    Research Image
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handelChange}
                    className={`${styles.formControl} form-control mt-1`}
                    id="ReserchFile"
                    accept=".pdf" 
                  />

                  <div className="btns">
                    
                    <button className={`${styles.btn}  mt-3`} type="submit" onClick={deleteInput}>
                      Add Research
                    </button>
                  </div>
                  <div>
                   
                  </div>
                </form>
              </div>
            </div>
             <div id="tBody">
            <div className="row">
              {display()}
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
