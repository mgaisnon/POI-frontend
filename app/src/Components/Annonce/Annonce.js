import './Annonce.css'
import imgannonce from '../../media/imgrbnb.jpg'

function Annonces(props){

    return(
        <div className='div-annonce'>
            <img className='annonce-img' src={imgannonce}></img>
            <h1 className='annonce-titre'>Titre de l'annonce</h1>
        </div>
    )

}

export default Annonces;