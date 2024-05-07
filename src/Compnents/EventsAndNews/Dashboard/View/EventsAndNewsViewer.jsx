import React, { useState, useEffect } from 'react';
import styles from './EventsAndNewsViewer.module.css';

export default function EventsAndNewsViewer() {
    const [DataContainer, setDataContainer] = useState([]);
    const [currentIndexSlid, setCurrentIndexSlid] = useState("");

    useEffect(() => {
        if (localStorage.getItem("News") === null) {
            setDataContainer([]);
        } else {
            setDataContainer(JSON.parse(localStorage.getItem("News")));
        }
    }, []);

    const handleClick = (imgSrc) => {
        setCurrentIndexSlid(imgSrc);
        const lightBoxItem = document.getElementById("lightBoxItem");
        const lightBoxContainer = document.getElementById("lightBoxContainer");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.style.display = "flex";
    };

    const handleClose = () => {
        const lightBoxContainer = document.getElementById("lightBoxContainer");
        lightBoxContainer.style.display = "none";
    };

    const display = () => {
        return DataContainer.map((research, index) => (
            <div className={`col ${styles.cardContainer}`} key={index}>
                <div className={`${styles.card} card`}>
                    <div className="row g-0">
                        <div className={`${styles.imgCard} col-md-4`}>
                            <img
                                src={research.image}
                                className="img-fluid rounded-start"
                                alt="Research Image"
                                onClick={() => handleClick(research.image)}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className={`${styles.cardTitle} card-title`}>{research.title}</h5>
                                <p className={`${styles.cardText} card-text`}>{research.desc}</p>
                                <p className="card-text"><small className="text-body-secondary">{DataView.apply}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )).reverse(); // عكس ترتيب عناصر القائمة
    };

    const prependNewData = () => {
        // استعداد البيانات الجديدة
        const newData = {
            title: "New Event Title",
            desc: "New Event Description",
            image: "path/to/new/image.jpg"
        };

        // إضافة البيانات الجديدة إلى بداية القائمة
        const updatedDataContainer = [newData, ...DataContainer];
        setDataContainer(updatedDataContainer);

        // تخزين البيانات المحدثة في localStorage
        localStorage.setItem("News", JSON.stringify(updatedDataContainer));
    };

    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div id="tBody">
                    {display()}
                </div>
                <div id="lightBoxContainer" className={styles.lightBoxContainer}>
                    <div id="lightBoxItem" className={styles.lightBoxItem}>
                        <i id="close" className={`${styles.close} fa-regular fa-circle-xmark `} onClick={handleClose}></i>
                    </div>
                </div> 
            </section>
            </div>
    );
}
