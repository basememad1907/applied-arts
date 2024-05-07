import React from 'react';
import ResearchViewer from './Dashboard/Views/ResearchViewer';
import styles from './FashionUpdate.module.css';
export default function FashionGallery() {
  return (
    <div className="col-lg-10">
      <div className="container">
        <div className="Updates">
          <div className="row">
            <div className={styles.title}>
              <h2>Updates</h2>
            </div>
              <ResearchViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
