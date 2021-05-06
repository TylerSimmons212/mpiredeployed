import React, {
    useState,
    useEffect
} from 'react';

import './footer.css';
import Logo from '../../images/mpirelogo.png'




const Footer = (props) => {
  

    useEffect(() => {

    }, [])

    var date = new Date();
    var year = date.getFullYear();

    return ( 
    <div className = 'footer' >
     <img src={Logo} alt='Logo' />
     <p>Copyright &copy; {year} Mpire Media LLC. All rights reserved.</p>
    </div>
    )
}

export default Footer