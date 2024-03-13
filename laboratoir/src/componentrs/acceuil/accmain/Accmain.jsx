import Navig from "../../navigation/Navig"
import "./accmain.css"

function Accmain() {

  const tab = [{ Axe: "Axe de Recherche 1 :", description: "Valorisation des ressources naturelles d’origine animale et végétale et formulation de nouveaux aliments fonctionnels" },
  { Axe: "Axe de Recherche 2 :", description: " Bio-conservation et amélioration de la qualité des aliments" },
  { Axe: "Axe de Recherche 3 :", description: "Renforcement de la sécurité alimentaire en Tunisie par l’amélioration de la performance et de la compétitivité des filières agro-alimentaires" }]

  return (
   <>
   <Navig/>
     <div className=""style={{marginTop:"8rem"}}>
      <div className="divider" style={{marginTop:"5rem",marginBottom:"1rem"}}/>
     
     <h1 className="title">Création</h1>
    <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}}/>
    <article className="flex ">
       <section className="left-section border">
    
        <p className="sub-title"> L’Unité de Recherche « Bio-conservation et Valorisation des Produits Agro-
alimentaires UR13 AGR02- ESIAT» a migré en 2022 en un Laboratoire de Recherche
« Innovation Technologique et Sécurité Alimentaire LR22 AGR01-ESIAT ». <br /> <br />
Depuis sa création en 2022, Le laboratoire de Recherche LITSA a représenté un acteur
dynamique dans le secteur de la recherche en Industries Alimentaires. <br /> <br />Ses recherches se sont
basées sur le fait de soulever une problématique économique et sociale bâtie sur la
découverte de nouveaux procédés et outils afin de la résoudre. <br />   <br />  Les travaux prospectifs des
chercheurs de ce laboratoire contribuent inévitablement à l’évolution du domaine des
industries alimentaires et satisfaire le besoin des consommateurs. </p>
       </section>
       <section className="right-section  "style={{flexDirection:"column" ,alignItems:"center"}}>
         <span className="title">Chef du laboratoire <br /> <br />  </span>
         <span className="sub-title">Pr. Mnasser HASSOUNA </span>
         <img src="/images/profil.png" alt="" />
        </section>
       
    </article>
    
    
       {/* section 2: activitè  */}
       <div>
          <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}}/>
           <h1 className='title '>Activités</h1>
           <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}}/>  

           <div className='  card-container flex '>
             {tab.map((el, index) => {
               return (
                 <div className='cards flex ' key={index}>
                   <div className='card-box '>
                     <h3>{el.Axe}</h3>
                     <p>{el.description}</p>
                   </div>
                 </div>
               )
             })}
           </div>
     </div>
    
    
    
    
    
  </div>
   </>
  )
}

export default Accmain