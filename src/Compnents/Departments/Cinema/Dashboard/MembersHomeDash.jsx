import React, { useState, useEffect } from 'react';
import styles from './MembersHomeDash.module.css';

export default function MembersHomeDash() {
    const [MembersContainer, setMembersContainer] = useState([]);
    const [displayedMembers, setDisplayedMembers] = useState([]);
    const maxDisplayedMembers = 4;

    useEffect(() => {
        if (localStorage.getItem("ourCinemaMembersAtHome") === null) {
            localStorage.setItem("ourCinemaMembersAtHome", JSON.stringify([]));
            setMembersContainer([]);
        } else {
            setMembersContainer(JSON.parse(localStorage.getItem("ourCinemaMembersAtHome")));
        }
    }, []);

    useEffect(() => {
        setDisplayedMembers(MembersContainer.slice(0, maxDisplayedMembers));
    }, [MembersContainer]);

    const AddMember = () => {
        const memberName = document.getElementById("MemberName").value;
        const description = document.getElementById("description").value;
        const fileInput = document.getElementById('MemberImage');
        const memberImage = fileInput.files[0];

        if (memberName === "" || description === "" || !memberImage) {
            alert("Please fill in all fields and select an image.");
            return;
        }

        if (!(memberImage instanceof Blob)) {
            alert("Selected file is not an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const member = {
                name: memberName,
                description: description,
                image: reader.result
            };
            const updatedMembers = [member, ...MembersContainer];
            setMembersContainer(updatedMembers);
            localStorage.setItem("ourCinemaMembersAtHome", JSON.stringify(updatedMembers));
            resetInput();
        };
        reader.readAsDataURL(memberImage);
    };

    const display = () => {
        return displayedMembers.map((member, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src={member.image} className="card-img-top" alt="Member Image" />
                    </div>
                    <div className={`${styles.cardBody} card-body`}>
                        <h5 className="card-title">{member.name}</h5>
                        <p className="card-text">Job Description: {member.description}</p>
                        <button className={`${styles.btnn} btn btn-danger`} onClick={() => deleteMember(index)}>Delete</button>
                    </div>
                </div>
            </div>
        ));
    };

    const deleteAll = () => {
        setMembersContainer([]);
        localStorage.setItem("ourCinemaMembersAtHome", JSON.stringify([]));
    };

    const resetInput = () => {
        document.getElementById("MemberName").value = "";
        document.getElementById("description").value = "";
        document.getElementById('MemberImage').value = "";
    };

    const deleteMember = (index) => {
        const updatedMembers = MembersContainer.filter((_, i) => i !== index);
        setMembersContainer(updatedMembers);
        localStorage.setItem("ourCinemaMembersAtHome", JSON.stringify(updatedMembers));
    };

    const previewImage = () => {
        const fileInput = document.getElementById('MemberImage');
        const preview = document.getElementById('previewImage');

        if (!preview) {
            console.error("Element 'previewImage' is not found.");
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    };

    return (
        <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <div className={styles.Title}>
                                    <h1>Add Member At Home</h1>
                                </div>
                                <label htmlFor="MemberName" className="mt-2"><span>Member Name</span></label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="MemberName" />

                                <label htmlFor="description" className="mt-2">Job Description</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="description" />

                                <label htmlFor="MemberImage" className="mt-2">Member Image</label>
                                <input type="file" accept="image/*" className={`${styles.formControl} form-control mt-1 `} id="MemberImage" onChange={previewImage} />

                                <div className="btns">
                                    <button className={`${styles.btn}  mt-3 `}onClick={AddMember}>Add Member</button>
                                    {/* <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {display()}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
