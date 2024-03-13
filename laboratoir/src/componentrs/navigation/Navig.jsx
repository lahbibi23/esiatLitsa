import "./navig.css";
import { useState } from "react";

function Navig() {
  const [showModal, setshowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      {/* div top  */}
      <div className="flex " style={{ justifyContent: "space-between" }}>
        <div className=" top  flex  ">
          <img src="/images/drapeautun.png" width={"50"} height={"28"} />
         
            <p >
              République Tunisienne <br />
              Ministère de l`Agriculture, des Ressources Hydrauliques et de la
              Pêche <br />
              Ecole Supérieure des Industries Alimentaires de Tunis
            </p>
          
        </div>
        <div>
          <img src="/images/logo.png" alt="" width={"150"} height={"150"} />
        </div>


       <div style={{display:"flex", flexDirection:"column", gap:"1rem" ,padding:"1rem 1rem" }}>
         <section className=" top-left flex   " style={{justifyContent:"center"}}>
           <button
             className=" icon-facebook"
             style={{ marginRight: "0.5rem" }}
           ></button>
           <button className=" icon-linkedin-with-circle">
             
           </button>
        
         </section>
           {/* search */}
           <form onSubmit={handleSubmit}>
               <div className="field has-addons">
                 <div className="control">
                   <input 
                     className="input"
                     type="text"
                     placeholder="Rechercher..."
                     value={searchTerm}
                     onChange={handleSearchChange}
                   />
                    </div>
        
                 <div className="control">
               
                 </div>
               </div>
             </form>
           
       </div>
      </div>




      <header className="flex  ">
        <button
          onClick={() => {
            setshowModal(true);
          }}
          className="menu icon-menu flex"
        >
          {" "}
        </button>

        {/* navbar =link */}

        <nav className="flex">
          <ul className="flex list">
            {/* Accueil */}
            <li className="dropdown">
              <div className="flex" style={{ gap: "0.5rem" }}>
                <a href="/">Accueil</a>
              </div>
              <div className="dropdown-content">
                <ul className="drop">
                  <li>
                    <a href="actualités"> Actualités</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <div className="flex" style={{ gap: "0.5rem" }}>
                <a href="Présentation">Présentation LITSA</a>
              </div>
            </li>

            <li>
              {/* Manifestations*/}
              <a href="Manifestations">Manifestations</a>
            </li>
            <li className="dropdown">
              <div
                className="flex"
                style={{ gap: "0.5rem", textAlign: "center" }}
              >
                <a href="premiere edition">Journées Scientifiques</a>
                <button className="icon-arrow_drop_down "></button>
              </div>

              <div className="dropdown-content">
                <ul className="drop">
                  <li className="drop">
                    <a href="participation">Appel à participation </a>
                  </li>
                  <li>
                    <a href="">Programme</a>
                  </li>
                  <li>
                    <a href="Instructions aux auteurs">
                      Instructions aux auteurs
                    </a>
                  </li>
                  <li>
                    <a href="inscription">Inscription</a>
                  </li>
                  <li className="drop">
                    <a href="comités">Comités </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="contact">Contacts</a>
            </li>

            <li>
              <a href="">Projets</a>
            </li>
            <li>
              <a href="">Publications </a>
            </li>
            <li>
              <a href="">Brevets d`invention</a>
            </li>
          </ul>
         
        </nav>

        {showModal && (
          <div className="fixed">
            <ul className="modal ">
              <li>
                <button
                  className="icon-close"
                  onClick={() => {
                    setshowModal(false);
                  }}
                />
              </li>
              <li className="dropdown">
                <div className="flex" style={{ gap: "5rem" }}>
                  <a href="/">Accueil</a>
                  <button className="icon-arrow_drop_down "></button>
                </div>
                <div className="">
                  <ul className="model-drop flex">
                    <li>
                      <a href="actualités">Actualités</a>
                    </li>
                    <li>
                      <a href="Présentation">Présentation</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="Manifestations">Manifestations</a>
              </li>
              <li className="dropdown">
                <div
                  className="flex"
                  style={{ gap: "5rem", textAlign: "center" }}
                >
                  <a href="premiere edition">Journées</a>
                  <button className="icon-arrow_drop_down "></button>
                </div>

                <div className="">
                  <ul className="model-drop flex">
                    <li>
                      <a href="participation">Appel à participation </a>
                    </li>
                    <li>
                      <a href="">Programme</a>
                    </li>
                    <li>
                      <a href="Instructions aux auteurs">
                        Instructions aux auteurs
                      </a>
                    </li>
                    <li>
                      <a href="inscription">Inscription</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="contact">Contacts</a>
              </li>

              <li>
                <a href="">Recherche</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navig;
