import styles from "./EventsViewer.module.css";
import React, { useEffect, useState } from 'react'

export default function EventsViewer() {
    const [eventContainer, setEventContainer] = useState([]);


    async function GetDataFromApi() {
        try {
            fetch(`https://applied-of-art.onrender.com/api/v1/events-and-news/events`,{
          
            headers: {
                "Content-Type":"application/json",
                "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
            },}).then((response) => response.json()).then(result=>setEventContainer(result.data))
            } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        GetDataFromApi();
    }, []);


    const display = () => {
        return eventContainer.map((event, index) => (
            <div className={styles.EventsHolder} key={index}>
                <div className={`col-lg-11 my-4 ${styles.latestnews}`} >
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-lg-12 col-md-8 col-sm-8">
                                <div className={styles.new}>
                                    <div className={styles.overlay}>
                                        <div className={styles.textover}>
                                            <h2 className={styles.EventTitle}>dasdasda</h2>
                                            <p className={styles.descTitle}>sadsad</p>
                                        </div>
                                    </div>
                                    <img  alt="" />
                                </div>
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
                <div  id="tBody">
                    {display()}
                </div> 
            </section>
        </div>
    );
}
