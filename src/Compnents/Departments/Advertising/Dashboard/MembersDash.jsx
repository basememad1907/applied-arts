import React, { useState, useEffect } from 'react';
import styles from './MembersDash.module.css';

export default function MembersDash({userData}) {
    const [memberData,setMemberData ] = useState({
        name: "",
        jobDescription:"",
        // image: null,
        weight:""
    });

    const handleFileChange = (event) => {
        const { files } = event.target;
        if (files.length > 0) {
            setMemberData({ ...memberData, image: files[0] });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMemberData({ ...memberData, [name]: value });
    };

    const uploadMember = async (e) => {
        e.preventDefault();
        try {
            const body = new FormData();
            body.append("name", memberData.name);
            body.append("jobDescription", memberData.jobDescription);
            // body.append("image", memberData.image);
            body.append("weight", memberData.weight);
            body.append('user', userData.id);
            console.log(memberData);
            console.log(userData);
            const response = await fetch(
                "https://applied-of-art.onrender.com/api/v1/members",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                        "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                    },
                    body: body,
                }
            );

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
        document.getElementById("name").value = "";
        document.getElementById("jobDescription").value = "";
        // document.getElementById('image').value = "";
        document.getElementById('weight').value = "";
    };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const [mem, setMem] = useState([]);

    // useEffect(() => {
    //   fetch(`https://applied-of-art.onrender.com/api/v1/members/all-members`, {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setMem(result.data.members);
    //     });
    // }, []);
  
    return (
        <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <div className={styles.Title}>
                                    <h1>Add Member</h1>
                                </div>
                                <form onSubmit={uploadMember}>
                                    <label htmlFor="name" className="mt-2"><span>Name</span></label>
                                    <input 
                                        type="text" 
                                        className={`${styles.formControl} form-control mt-1 `} 
                                        id="name" 
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="jobDescription" className="mt-2">Job Description</label>
                                    <input 
                                        type="text" 
                                        className={`${styles.formControl} form-control mt-1 `} 
                                        id="jobDescription" 
                                        onChange={handleChange}
                                    />
                                    {/* <label htmlFor="image" className="mt-2">Member Image</label>
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        className={`${styles.formControl} form-control mt-1 `} 
                                        id="image" 
                                        onChange={handleFileChange} 
                                    /> */}
                                    <label htmlFor="weight" className="mt-2 W-25">Member role</label>
                                    <select 
                                        className={`${styles.formControl} form-control mt-1 `}
                                        id="weight"
                                        type="text"
                                        onChange={handleChange}
                                    >
                                        <option value="">.....</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">User</option>
                                    </select>
                                    

                                    <div className="btns">
                                        <button 
                                            className={`${styles.btn} mt-3`}
                                            onClick={deleteInput}
                                        >
                                            Add Member
                                        </button>
                                        {/* <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="row">
                            {/* {display()} */}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}