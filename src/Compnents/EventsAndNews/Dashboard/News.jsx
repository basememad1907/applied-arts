import styles from './EventsNewsDash.module.css';
import React, { useEffect, useState } from 'react';

export default function Events({ userData }) {
    const [eventContainer, setEventContainer] = useState({
        name: "",
        discription: "",
        image: null
    });

    const handleFileChange = (event) => {
        const { files } = event.target;
        if (files.length > 0) {
            setEventContainer({ ...eventContainer, image: files[0] });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEventContainer({ ...eventContainer, [name]: value });
    };

    const uploadEvent = async (e) => {
        e.preventDefault();
        try {
            const body = new FormData();
            body.append("name", eventContainer.name);
            body.append("discription", eventContainer.discription);
            body.append("image", eventContainer.image);
            body.append('user', userData.id);
            console.log(eventContainer);
            console.log(userData);
            const response = await fetch(
                "https://applied-of-art.onrender.com/api/v1/events-and-news/news",
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
        document.getElementById("discription").value = "";
        document.getElementById('image').value = "";
    };

    async function GetDataFromApi() {
        try {
            fetch(`https://applied-of-art.onrender.com/api/v1/events-and-news/news`,{
          
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

    async function deleteEvent(id) {
        console.log(id);
        try {
            await fetch(`https://applied-of-art.onrender.com/api/v1/events-and-news/news/${id}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
                },
            });
            GetDataFromApi();
        } catch (err) {
            console.log(err);
        }
    }
    // const display = () => {
    //     return eventContainer.map((event, index) => (
    //         <div className="col-lg-6 py-4" key={index}>
    //             <div className={`${styles.card} card`}>
    //                 <div className={styles.cardImg}>
    //                     <img src={event.image} className="card-img-top" alt="event Image" />
    //                 </div>
    //                 <div className={`${styles.cardBody} card-body`}>
    //                     <h5 className={`${styles.cardTitle} card-title`}>{event.name}</h5>
    //                     <p className={`${styles.cardText} card-text`}>Description: {event.description}</p>
    //                     <button className={`${styles.btnn} btn btn-danger`} onClick={(e) => deleteEvent(event._id)} >
    //                         Delete
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     ));
    // };
    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={styles.Title}>
                                <h2>Add News</h2>
                            </div>
                            <form onSubmit={uploadEvent}>
                                <label htmlFor="name" className="mt-2"><span>Name</span></label>
                                <input
                                    type="text"
                                    className={`${styles.formControl} form-control mt-1`}
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                />

                                <label htmlFor="discription" className="mt-2">Description</label>
                                <input
                                    type="text"
                                    className={`${styles.formControl} form-control mt-1`}
                                    id="discription"
                                    name="discription"
                                    onChange={handleChange}
                                />

                                <label htmlFor="image" className="mt-2">Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className={`${styles.formControl} form-control mt-1`}
                                    id="image"
                                    name="image"
                                    onChange={handleFileChange}
                                />

                                <div className={styles.btns}>
                                    <button
                                        className={`${styles.btn} btn btn-success mt-3`}
                                        onClick={deleteInput}
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                            <div id="tBody" className="row">
                                 {/* {display()}  */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

