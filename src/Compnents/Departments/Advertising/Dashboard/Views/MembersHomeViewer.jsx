import React, { useState, useEffect } from 'react';
import styles from './MembersHomeViewer.module.css';

export default function MembersHomeViewer() {
    const [MembersContainer, setMembersContainer] = useState([]);
    const [displayedMembers, setDisplayedMembers] = useState([]);
    const maxDisplayedMembers = 4;

    useEffect(() => {
        if (localStorage.getItem("ourADVMembersAtHome") === null) {
            localStorage.setItem("ourADVMembersAtHome", JSON.stringify([]));
            setMembersContainer([]);
        } else {
            setMembersContainer(JSON.parse(localStorage.getItem("ourADVMembersAtHome")));
        }
    }, []);

    useEffect(() => {
        setDisplayedMembers(MembersContainer.slice(0, maxDisplayedMembers));
    }, [MembersContainer]);

    const display = () => {
        return MembersContainer.map((member, index) => (
            <div className="col-lg-3">
            <div className={styles.text2} key={index}>
                <div className={styles.t1}>
                    <div className={styles.cardImg}>
                        <img src={member.image} className="card-img-top" alt="Member Image" />
                    </div>
                    <i className={`${styles.icon} fa-solid fa-quote-right icon`} style={{ color: '#ffffff' }}></i>
                    <div className={styles.cardBody}>
                        <p className={styles.name}>{member.name}</p>
                        <p className={styles.jop}>
                            Job Description:<br /> {member.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ));
    };
  return (
    <>
        {display()}
    </>
    
  )
}

