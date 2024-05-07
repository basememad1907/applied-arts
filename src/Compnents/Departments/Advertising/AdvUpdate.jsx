import React from 'react'
import styles from './AdvUpdate.module.css';
import ResearchViewer from './Dashboard/Views/ResearchViewer'
export default function AdvUpdate() {
  return (
    <div class="col-lg-10">
    <div class="container">
        <div class="Updates">
            <div class="row">
              <div className={styles.title}>
                <h2>Updates</h2>
              </div>
              <ResearchViewer />
            </div>
        </div>
    </div>
 </div>
  )
}
