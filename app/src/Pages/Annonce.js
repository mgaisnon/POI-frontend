import Menu from "../Layout/Menu"
import './Home.css'
import CardAnnonce from '../Components/Annonce/Annonce.js'
import Footer from "../Layout/Footer.js"
function Annonce() {
    
    return(
        <div>
            <Menu />
            <h3 className="titre-decouverte"> Nouvelles Annonces </h3>
            <div className="albumliste">
             <CardAnnonce />
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
             <CardAnnonce />   
   
            </div>
            <Footer />
            </div>

            
    )
}

export default Annonce