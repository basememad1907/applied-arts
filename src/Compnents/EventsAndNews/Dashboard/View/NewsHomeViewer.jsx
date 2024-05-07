import React, { useEffect, useState } from 'react'
import styles from './NewsHomeViewer.module.css'
export default function NewsHomeViewer() {
    const [projectContainer, setProjectContainer] = useState([]);
    const [currentIndexSlid, setCurrentIndexSlid] = useState("");

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("News"));
        if (storedProjects) {
            const reversedProjects = storedProjects.reverse();
            setProjectContainer(reversedProjects);
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

        // عرض العناصر الأخيرة الموجودة في projectContainer
        return projectContainer.map((research, index) => (
            <div className={`col${styles.cardContainer}`} key={index}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };
    
    
    return (
        
        <div>
            <div className="row">
                {display()}
            </div>
        </div>
    );
}
