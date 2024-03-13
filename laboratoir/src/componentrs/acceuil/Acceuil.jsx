import { useNavigate } from "react-router";
import Navig from "../navigation/Navig";

import "./acceuil.css";
import Carousel from "react-bootstrap/Carousel";

function Acceuil() {
  const navigate = useNavigate();

  return (
    <div>
      <Navig />

      {/* carousels */}

      <div className="border carousel">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img style={{width:"742.4px",height:" 334.562px"}}
              className="d-block w-100"
              src="images/w1.jpeg"
              alt="First slide"
              
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w2.jpeg"
              alt="Second slide"
            />
         
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w3.jpeg"
              alt="Third slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w4.jpeg"
              alt="Third slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w5.jpeg"
              alt="Third slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w6.jpeg"
              alt="Third slide"
            />
            
          </Carousel.Item>
           <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w7.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
          
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w7.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w8.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w9.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w10.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w11.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w12.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w13.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w14.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w15.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w16.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w17.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/w18.jpeg"
              alt="Third slide"
            />
         </Carousel.Item>
        </Carousel>
      </div>







      {/* introduction */}
      <div className=" top-section ">
        <div className="tittre">
          Laboratoire de Recherche « Innovation Technologique et Sécurité
          Alimentaire » <br />
          LR22 AGR01-ESIAT
        </div>
        <img src="/images/labo.jpg" alt="" />
        <button onClick={() => navigate("Présentation")} className="Suite">
          Savoir plus
        </button>
      </div>

      {/* Actualités */}

      <div
        className="divider"
        style={{ marginTop: "5rem", marginBottom: "1rem" }}
      />
      <h3>Actualités</h3>
      <div
        className="divider"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      />

      <div className="hero-section  flex">
        <div
          className="hero-left-section  flex border"
          style={{ position: "relative" }}
        >
          <p
            className="sub-title  "
            style={{ textAlign: "center", alignSelf: "center" }}
          >
            Le Laboratoire de Recherche : Innovation Technologique et Sécurité
            Alimentaire (LITSA) organise : <br /> <br />
            Les 1 ères Journées Scientifiques sur la : <br />
            Valorisation des Bioressources et Nutrition Fonctionnelle <br />
            <br />
            le 1 er et 2 Mars 2024 à l’Ecole Supérieure des Industries
            Alimentaires de Tunis (ESIAT)
          </p>
          <button
            className="plus"
            onClick={() => {
              navigate("premiere edition");
            }}
          >
            Savoir plus
          </button>
        </div>

        <section className="hero-right-section  ">
          <img src="/images/image2.jpg" alt="" />
        </section>
      </div>

      <div className="divider" />

        </div>
  );
}

export default Acceuil;
