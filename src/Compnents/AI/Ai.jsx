import React, { useState } from 'react';
import styles from './Ai.module.css';
import d2 from './imgs/gallery-7.jpg';

export default function Ai() {
  const [image, setImage] = useState(d2);
  const [showInFirstCard, setShowInFirstCard] = useState(false);
  const [showInSecondCard, setShowInSecondCard] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setShowInFirstCard(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEnhancementClick = () => {
    setShowInSecondCard(true);
  };

  const handleDownloadClick = () => {
    const downloadImage = showInSecondCard ? image : d2;
    const link = document.createElement('a');
    link.href = downloadImage;
    link.download = 'image.jpg';
    link.click();
  };

  return (
    <>
      <section className={styles.imgEnhance}>
        <div className="container">
          <div className={styles.text}>
            <h2>Image Enhancement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              temporibus ipsam quam aperiam id accusamus minima fuga voluptas
              culpa, <br />
              dignissimos in ipsum ea harum neque ipsa soluta adipisci
              assumenda voluptate?
            </p>

            <div className="row text-center">
              <div className="col-lg-6 col-md-12">
                <div className={styles.upload}>
                  {showInFirstCard && <img src={image} alt="" />}
                </div>
                <div className={styles.inptParent}>
                    <div className="row">
                        <div className="col-lg-5">
                            <input className={styles.inpt} type="file" onChange={handleImageUpload} accept="image/*" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className={styles.upload}>
                  {showInSecondCard && <img src={image} alt="" />}
                </div>
                <div className={styles.btns}>
                    <button className={`${styles.btn1} btn btn-primary mx-2 my-4`} onClick={handleEnhancementClick} disabled={!showInFirstCard}>
                    Enhancement
                    </button>
                    <button className={`${styles.btn2} btn btn-success my-4`} onClick={handleDownloadClick} disabled={!showInSecondCard}>
                        <i class="fa-solid fa-download"></i>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
