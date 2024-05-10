import react from "react";
import "./ServiceSectionCss.css";

const ServiceSection = () => {
  return (
    <div>
      <div id="FeatureAndServiceContianer">
        <div id="FeatureContainer">
          <h1>Tailor-made features</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            mollitia ipsum <br className="Breaktag"  /> doloremque repudiandae fugiat culpa inventore
            vitae, dolorem quo quisquam.
          </p>
        </div>
        <div id="ServiceCardContainer">
          <div className="ServiceContent">
            <span><i class="ri-projector-fill"></i></span>
            <h3>Robust workflow</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>

          <div className="ServiceContent">
          <span><i class="ri-table-alt-fill"></i></span>
            <h3>flexibility</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>


          <div className="ServiceContent">
          <span><i class="ri-layout-fill"></i></span>
            <h3>User friendly</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>


          <div className="ServiceContent">
            <span><i class="ri-layout-5-fill"></i></span>
            <h3>Multiple layout</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>


          <div className="ServiceContent">
            <span><i class="ri-carousel-view"></i></span>
            <h3>Better components</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>


          <div className="ServiceContent">
            <span><i class="ri-stack-fill"></i></span>
            <h3>Well organised</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Illum ex
              minus harum HMK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
