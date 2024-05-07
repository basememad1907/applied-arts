import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import FormRow from '../../Compnents/FormRow/FormRow';
import axios from 'axios';
import useLocalState from '../../Utils/LocalState';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const {alert,showAlert,loading,setLoading,success,setSuccess,hideAlert} = useLocalState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    hideAlert();
    if (!email) {
      showAlert({
        text: 'Please provide email',
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post('https://applied-of-art-1.onrender.com/api/v1/auth/forget-password', {
        email,
      });
      showAlert({ text: data.msg , type: '' });
      setSuccess(true);
    } catch (error) {
      showAlert({
        text: 'Something went wrong, please try again',
      });
      setSuccess(true);
    }
    setLoading(false);
  };
  return (
    <>
    <div className={styles.ForgetPassword}>
        <div className={`${styles.boxForm}`}>
            <div className='page'>
                {!success && (
                    <form className={loading ? 'form form-loading' : 'form'} onSubmit={handleSubmit}>
                        <h4>Forgot password</h4>
                        
                        <div className={styles.inputHolder}>
                            <FormRow type='email' name='email' value={email} handleChange={handleChange} />
                        </div>
                        <button type='submit' className={`${styles.btn} btn my-4 `} disabled={loading}>
                            <Link to="ResetPassword" className='text-white'>
                                {loading ? 'Please Wait...' : 'Get Reset Password Link'}
                            </Link>
                        </button>
                        <p>
                            Already a have an account?
                            <Link to='/loginHome' className='login-link'>
                                Log In
                            </Link>
                        </p>
                    </form>
            )}
            </div>
        </div>
    </div>
</>
  );
};


export default ForgotPassword;