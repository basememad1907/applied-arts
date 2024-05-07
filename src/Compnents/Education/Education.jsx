import React from 'react';
import styles from "./Education.module.css";
import edu from './imgs/image.png';

export default function Education() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-center">
            <div className={styles.img}>
              <img src={edu} alt="Education" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className={styles.text}>
              <h2>Academic Programs</h2>
              <ul>
                <li><span>Degree Title:</span> Bachelor of Applied Arts.</li>
                <li><span>Program Hours:</span> The Total credits (180 Hours).</li>
                <li><span>Study plan:</span> Taking into consideration the study system and the nature of theoretical and practical courses at the College of Applied Arts, the student's performance is assessed for each course throughout the academic semester. At the end of each semester, the grades for each course, the credited hours for each course, and the cumulative grade point average (CGPA) are recorded in the student's academic transcript.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10">
            <div className={`${styles.text} ${styles.p}`}>
              <h2>The Academic year</h2>
              <p>The academic year at the College of Applied Arts - 6th of October University consists of two regular semesters (Fall and Spring) in addition to a Summer semester. Each semester, including Fall and Spring, is 65 weeks long for each level, while the Summer semester lasts for 6 weeks. It should be noted that the actual number of study hours during the Summer semester is equal to the number of study hours for the same courses during the Fall or Spring semester.</p>
            </div>
          </div>

          <div className="col-lg-2 text-center">
            <div className={styles.img}>
              <img src={edu} alt="Academic Year" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
