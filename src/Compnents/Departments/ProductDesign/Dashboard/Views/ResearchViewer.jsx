import React, { useState, useEffect } from 'react';
import styles from './ResearchViewer.module.css';

export default function ResearchViewer() {
    const [researchContainer, setResearchContainer] = useState([]);

    useEffect(() => {
       fetch(`https://applied-of-art-v-one.onrender.com/api/v1/research`,{
        method:"GET",
        headers: {
            "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
        },
       })
       .then((response)=> response.json())
       .then(result=>setResearchContainer(result.data))

    }, []);
const FilterResearch = researchContainer.filter((p) => p.departmentId ==='662591d1cf34345d4b8ad14c');

    const display = () => {
        return FilterResearch.map((research, index) => (
            <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.cardContainer}`}>
                <div key={index} className={`${styles.card} card`}>
                    <div className="row g-0">
                        
                        <div className={`${styles.imgCard} col-lg-4`}>
                            <div className={styles}>
                                <div className={styles.iconHolder}>
                                    <a href={research.file} target="_blank" className='text-dark'>
                                    <i class={`fa-regular fa-file-pdf ${styles.icoon}`} style={{color: "#0f4299",}}></i>
                                    </a> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">
                                <h5 className={`${styles.cardTitle} card-title`}>{research.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div className="row" id="tBody">
                    {display()}
                </div>
            </section>
        </div>
    );
}
