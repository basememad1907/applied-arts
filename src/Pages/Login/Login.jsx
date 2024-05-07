import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from './imgs/collage.jpg';
import styles from './Login.module.css';
import axios from 'axios';
import joi from 'joi';

export default function Login({ saveUserData }) {
    let navigate = useNavigate();
    const [errorList, setErrorList] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function sendLoginDataToApi() {
        setLoading(true);
        console.log("sendLoginDataToApi");
        // console.log(user);
        try {
            setLoading(true);
            // let  data  = await axios.post(`https://applied-of-art-2.onrender.com/api/v1/auth/login`, user);
            
        //  let  aaa  = await axios.post(`https://johnemad1-faculty-of-applied-of-arts.onrender.com/set-cookie`);
        //  console.log("done");
        //  let  {data}  = await axios.post(`https://applied-of-art.onrender.com/api/v1/auth/login`,{
        //     //  withCredentials: true
        //  },user);
        let data = await fetch(`https://applied-of-art.onrender.com/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set content type to JSON
            },
            credentials: "include",
            body: JSON.stringify(user) // Stringify the user object
        })
        .then((response) => response.json());

        console.log(data);
            if (data.status === 'success') {
                setLoading(false);

                console.log("1");               
                localStorage.setItem('userToken', JSON.stringify(data.accessTokenJWT));
                console.log("11");
                saveUserData();
                console.log("111");
                navigate('/');
            } else {
                console.log("2");
                setLoading(false);

                setError("wrong data");
                // setLoading(false);
            }
        } catch (error) {
            console.log("3");

            console.error('Error:', error);
            setLoading(false);
            setError('Wrong pass or email');
        }
    }

    function submitLoginForm(e) {
        e.preventDefault();
        setLoading(true);
        let validate = ValidateLoginForm();
        if (validate.error) {
            setLoading(false);
            setErrorList(validate.error.details);
        } else {
            sendLoginDataToApi();
            setLoading(false);

        }
    }

    function ValidateLoginForm() {
        let schema = joi.object({
            email: joi.string().email({ tlds: { allow: ['edu' , 'eg'] } }).required(),
            password: joi.string().required()
        });
        return schema.validate(user, { abortEarly: false });
    }

    return (
        <>
            <div className={styles.Login}>
                <div className={`${styles.boxForm} box-form`}>
                    <div className={`${styles.left} left`}>
                        <img src={img} alt="" />
                    </div>
                    <div className={`${styles.right} right`}>
                        {errorList && errorList.length > 0 && errorList.map((err, index) => {
                            if (err.context.label === 'password') {
                                return <div key={index} className='alert alert-danger my-2'>password Invalid</div>;
                            } else {
                                return <div key={index} className='alert alert-danger my-2'>{err.message}</div>;
                            }
                        })}
                        <form onSubmit={submitLoginForm}>
                            <h4>Login</h4>
                            <div className={styles.inputs}>
                                {error && <div className='alert alert-danger my-2'>{error}</div>}
                                <label htmlFor="email">email</label>
                                <input
                                    onChange={getUserData}
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <label htmlFor="password">password</label>
                                <input
                                    onChange={getUserData}
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            <button type='submit' className='btn btn-primary my-4 py-2 px-4'>
                                {loading ?<>
                                    <i className='fas fa-spinner fa-spin'></i> 
                                
                                </>
                                    : 'Login'}
                            </button>
                        </form>
                        <div className="forgetpassword">
                            <p>
                                Forgot your password?{' '}
                                <Link to='Forgotpassword' className='reset-link'>
                                    Reset password
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

