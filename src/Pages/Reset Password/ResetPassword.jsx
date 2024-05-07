import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import styles from './ResetPassword.module.css';
import axios from 'axios';
import FormRow from '../../Compnents/FormRow/FormRow';
import useLocalState from '../../Utils/LocalState';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState();

  const query = useQuery();

  const handleChange = async (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!password) {
      showAlert({ text: 'please enter password' });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post('/api/v1/auth/reset-password', {
        password,
        token: query.get('token'),
        email: query.get('email'),
      });
      setLoading(false);
      setSuccess(true);
      showAlert({
        text: `Success, redirecting to login page shortly`,
        type: 'success',
      });
      setTimeout(() => {
        navigate('/LoginHome');
      }, 3000);
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <>
    <div className={styles.ResetPassword}>
        <div className={`${styles.boxForm}`}>
            <div className='page'>
                {!success && (
                    <form className={loading ? 'form form-loading' : 'form'} onSubmit={handleSubmit} >
                        <h4>Reset password</h4>

                        <div className={styles.inputHolder}>
                            <FormRow type='password' name='password' value={password} handleChange={handleChange} />
                        </div>

                        <button type='submit' className={`${styles.btn} btn my-4 mt-5 `} disabled={loading}>
                            <Link to="ForgotPassword/" className='text-white'>
                                {loading ? 'Please Wait...' : 'New Password'}
                            </Link>
                        </button>
                    </form>
            )}
            </div>
        </div>
    </div>
</>
    // <div className='page'>
    //   {!success && (
    //     <form className={loading ? 'form form-loading' : 'form'} onSubmit={handleSubmit} >
    //       <h4>reset password</h4>

    //       <FormRow type='password' name='password' value={password} handleChange={handleChange} />

    //       <button type='submit' className='btn btn-block' disabled={loading}>
    //         {loading ? 'Please Wait...' : 'New Password'}
    //       </button>
    //     </form>
    //   )}
    // </div>
  );
};

export default ResetPasswordForm;
