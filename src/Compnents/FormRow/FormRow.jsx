import React from 'react';
import styles from './FormRow.module.css';
const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={name}
        onChange={handleChange}
        className={`${styles.form} form-input`}

      />
    </div>
  );
};

export default FormRow;