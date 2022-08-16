import React from "react";
import Logo from '../../Assets/logocat.svg'
import Doacao from '../../Assets/doacao.svg'
import Notificacao from '../../Assets/Notification.svg'
import Perfil from '../../Assets/user.svg'
import '../header/index.css'


function Header(){
    return(
        <header className="header">
            <img src={Logo} className='logo' alt="logo" srcset="" />
            <img src={Doacao} alt="doacao" srcset="" />
            <img src={Notificacao} alt="notificacao" srcset="" />
            <img src={Perfil} alt="perfil" srcset="" />
        </header>
    )
}
export default Header;