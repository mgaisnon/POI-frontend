import './Menu.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../media/image.png'

function Menu(){

    let navigate = useNavigate()

    const redirecthome = () => {
        const path = '/home';
        navigate(path);
    }

    return(
        <div>
            <img className='logo' src={Logo}></img>
            <h3 className='titre-application'>GLAMPING</h3>
            <img className='logo2' src={Logo}></img>
        <div className='div-menu'>
            <p className='element-menu'onClick={redirecthome} >Home</p>
            <p className='element-menu'>Annonces</p>
            <p className='element-menu'>Portefolio</p>
            <p className='element-menu' >Contact</p>
            <p className='element-menu' >Connexion</p>
            
        </div>
        </div>
    )
}
export default Menu