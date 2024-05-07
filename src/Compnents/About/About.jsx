import React from 'react';
import styles from "./About.module.css";
const about = () => {
  return (
    <>
        <div className={styles.text}>
          <h3>About us</h3>
          <p>The Faculty of Applied Arts was established in October 6th University as a cultural project 
          that considers the filed of design and production
          technology in accordance with the recent scientific theories and up-to-date technologies.

          The faculty aims to cooperate with all of the authorities considered with the applied arts
          , such as universities, faculties scientific Institutes, production establishments, and
          research centers in Egypt and aboard, to originate the recent findings in the sciences
          of design and technology, in order to achieve abilities and the required technical
          rather than artistic skills in the faculty graduates.
          <br />
          <br />

          The faculty has the benefits of an excellent group of applied arts professors to layout the study curriculum and courses. The faculty cooperates 
          with some of similar faculties and institutes in Egypt and some foreign countries to assist tailoring the suitable courses for faculty curriculum 
          and study program in the light of local variables & requirements.
          The faculty hopes through its graduates to play an active part in developing the artistic and aesthetical taste in the fields of cultural and
          functional products and visible communication media The faculty appreciates the Egyptian heritage and achievements of previous civilizations 
          as a source of artistic and scientific vision to applied arts. The faculty also aims at having a role in plastic arts activities in Egypt,
          Arab and African countries throughout the actual cooperation with the career job associations locally and internationally.</p>
        </div>
 </>
  );
}
export default  about