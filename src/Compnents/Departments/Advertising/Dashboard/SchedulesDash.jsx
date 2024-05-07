import React, { useEffect, useState } from 'react';
import styles from './SchedulesDash.module.css';
import { Axios } from 'axios';

export default function SchedulesDash() {
    const [schedualesContainer, setSchedualesContainer] = useState([]);
    const [title,setTitle]=useState("")
    const [link,setLink]=useState("")
  
    async function GetDataFromApi() {
        try {
            fetch(`https://applied-of-art-v-one.onrender.com/api/v1/schedules`,{
          
            headers: {
                "Content-Type":"application/json",
                "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
            },}).then((response) => response.json()).then(result=>setSchedualesContainer(result.data))
            } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        GetDataFromApi();
    }, []);
    const FilterSchedule = schedualesContainer.filter((p) => p.departmentId ==='66259187cf34345d4b8ad144');
    async  function AddResearch(e) {
        e.preventDefault()    
        // Validation checks
        if (!title || !link) {
        alert("Please fill in all fields.");
        return;
      }
        let body={
            "title":title,
            "link":link,
            "departmentId":"66259187cf34345d4b8ad144"
        }

        console.log(body);
        console.log("1");
      await  fetch(`https://applied-of-art-v-one.onrender.com/api/v1/schedules`,{
            method:"POST",          
                headers: {
                    "Content-Type":"application/json",
                    "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                },
                body:JSON.stringify(body)
            
        }).then((response) => response.json()).then(result=>console.log(result))
        console.log(2);
        GetDataFromApi();
    }
    const deleteInput = () => {
        const scheduleTitleInput = document.getElementById("ScheduleName");
        const link = document.getElementById("Link");
      
        if (scheduleTitleInput) {
          scheduleTitleInput.value = "";
        }
      
        if (link) {
          link.value = "";
        }
      };  

    
  async function deleteProject(id) {
    console.log(id);
    try {
        await fetch(`https://applied-of-art-v-one.onrender.com/api/v1/schedules/${id}`, {
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

function display() {
    return [...FilterSchedule].reverse().map((schedule, index) => (
        <div className="col-lg-4 col-md-4 col-sm-12 py-4">
                   <div key={index} className={`${styles.card} mb-3`}>
            <div className={styles.cardbody}>
                <h5 className="card-title"> {schedule.title} </h5>
                {/* <p className="card-text">Link: {schedule.link}</p> */}
                <button 
                    className={styles.btnn} 
                    onClick={(e)=>deleteProject(schedule._id)}
                    >
                   <i class={`fa-solid fa-trash ${styles.icon}`} style={{color: "#bf0d0d",}} ></i>
                </button>
            </div>
          </div>
        </div>
    ));
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
                                        <h1>Upload Schedules</h1>
                                     </div>
                                    <form action="" onSubmit={AddResearch} >

                                    <label htmlFor="ScheduleName" className="mt-2"><span>Schedule Name</span></label>
                                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className={`${styles.formControl} form-control mt-1 `} id="ScheduleName" />

                                    <label htmlFor="Link" className="mt-3">Link</label>
                                    <input type="text" onChange={(e)=>setLink(e.target.value)} className={`${styles.formControl} form-control mt-1 `} id="Link" />

                                    <div className="btns">
                                        <button className={`${styles.btn}  mt-3`} onClick={deleteInput}>
                                            Add Schedule
                                        </button>
                                        {/* <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button> */}
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tableHolder">
                                <div className="row">
                                    {display()}
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
