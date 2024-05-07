import React from 'react';
import styles from "./Schedules.module.css";
import gadwal from './imgs/gadwal2.png';

export default function Schedules() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.overlay}>
                <h3>Level 1</h3>
              </div>
              <img src={gadwal} alt="Level 1 Schedule" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.overlay}>
                <h3>Level 2</h3>
              </div>
              <img src={gadwal} alt="Level 2 Schedule" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.overlay}>
                <h3>Level 3</h3>
              </div>
              <img src={gadwal} alt="Level 3 Schedule" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.overlay}>
                <h3>Level 4</h3>
              </div>
              <img src={gadwal} alt="Level 4 Schedule" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.overlay}>
                <h3>Level 5</h3>
              </div>
              <img src={gadwal} alt="Level 5 Schedule" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
