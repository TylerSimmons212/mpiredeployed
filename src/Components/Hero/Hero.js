import React, {
    useEffect
} from 'react';
import Button from '@material-ui/core/Button';

import './hero.css';




const Hero = (props) => {
  

    useEffect(() => {

    }, [])


    return ( 
    <div className = 'hero' >
        <h2>We Aren't An Ad Agency,<br/> We Are An Extension Of Your Team.</h2>
        <p>We also happen to be brothers with a reputation of over $300m in trackable sales collectively.</p>
        <div className="contactbtn">
            <Button variant="contained" onClick={() => { props.setForm(true) }} className="contactbtntxt2">
                  LETS CHAT
            </Button>
        </div>
    </div>
    )
}

export default Hero
