import React from "react";
import image1 from "../img/1029201911422pm741.jpg";
import image2 from "../img/1029201912229pm422.jpg";
import image3 from "../img/Basics_of_Advertising1.jpg";
import image4 from "../img/OCTOBER 6 UNIVERSITY.png";
import "./slider.css"
export default function Slider() {
  return (
    <>
      <section class="slidergallery">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <img src={image1} alt="" class="imgitem" />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <img src={image1} alt="" class="imgitem" />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <img src={image1} alt="" class="imgitem" />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <img src={image1} alt="" class="imgitem" />
              </div>
            </div>
          </div>
        </div>
        <div id="lightboxcontainer">
          <div id="lightboxitem">
            <div class="row photo">
              <div class="col-lg-7 col-md-12 ">
                <div class="overlay">
                  <div class="icons">
                    <i
                      id="prev"
                      class="fa-solid fa-arrow-left"
                      style={{color: "#ffffff"}}
                    ></i>
                    <i
                      id="close"
                      class="fa-solid fa-xmark "
                     style={{color: "#ffffff"}}
                    ></i>
                    <i
                      id="next"
                      class="fa-solid fa-arrow-right"
                     style={{color: "#ffffff"}}
                    ></i>
                  </div>{" "}
                </div>
                <div id="open">
                  {/* <!-- <img src="img/s1.jpg" alt=""> --> */}
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="data">
                  <h3>
                    Project Name : <span>Lorem ipsum dolor</span>
                  </h3>
                  <h5>
                    Student : <span>Ahmed Mohamed</span>
                  </h5>
                  <h5>
                    ID : <span>202976544</span>
                  </h5>
                  <h5>
                    Detelis :{" "}
                    <span>
                      Lorem ipsum dolor sit amet, vm dolor sit amet, m dolor sit
                      amet, consectetur adipisicing elit.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="listphotos">
              <div class="row">
                <div class="col-lg-3">
                  <div class="imgg">
                    <img src={image1} alt="" class="imgitem" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="imgg">
                    <img src={image1} alt="" class="imgitem" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="imgg">
                    <img src={image1} alt="" class="imgitem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
