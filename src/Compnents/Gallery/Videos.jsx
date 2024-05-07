import React from 'react'
import styles from './Videos.module.css';
import product1 from './imgs/product22.jpg';
import { Link, Outlet } from 'react-router-dom';

export default function Videos() {
  return (
    <div className='row'>
        <div className="col-lg-3">
          <div className={styles.card}>
            <div className={styles.overlay}>
              <div className={styles.holder}>
                <div className={styles.textCard}>
                  <h3>Video Name: V1</h3>
                  <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                  <h5>Department Name: Product Design</h5>
                  <h6 className="py-2">Code: 202112223</h6>
                  <a href="https://www.youtube.com/Saba7oKorah">
                    <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                  </a>
                </div>
              </div>
            </div>
            <img src={product1} alt="Project 1" />
          </div>
        </div>

        <div className="col-lg-3">
          <div className={styles.card}>
            <div className={styles.overlay}>
              <div className={styles.holder}>
                <div className={styles.textCard}>
                  <h3>Video Name: V1</h3>
                  <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                  <h5>Department Name: Product Design</h5>
                  <h6 className="py-2">Code: 202112223</h6>
                  <a href="https://www.youtube.com/Saba7oKorah">
                    <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                  </a>
                </div>
              </div>
            </div>
            <img src={product1} alt="Project 1" />
          </div>
        </div>

        <div className="col-lg-3">
          <div className={styles.card}>
            <div className={styles.overlay}>
              <div className={styles.holder}>
                <div className={styles.textCard}>
                  <h3>Video Name: V1</h3>
                  <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                  <h5>Department Name: Product Design</h5>
                  <h6 className="py-2">Code: 202112223</h6>
                  <a href="https://www.youtube.com/Saba7oKorah">
                    <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                  </a>
                </div>
              </div>
            </div>
            <img src={product1} alt="Project 1" />
          </div>
        </div>

        <div className="col-lg-3">
          <div className={styles.card}>
            <div className={styles.overlay}>
              <div className={styles.holder}>
                <div className={styles.textCard}>
                  <h3>Video Name: V1</h3>
                  <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                  <h5>Department Name: Product Design</h5>
                  <h6 className="py-2">Code: 202112223</h6>
                  <a href="https://www.youtube.com/Saba7oKorah">
                    <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                  </a>
                </div>
              </div>
            </div>
            <img src={product1} alt="Project 1" />
          </div>
        </div>
    </div>
  )
}
