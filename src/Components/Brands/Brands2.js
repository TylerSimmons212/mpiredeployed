import React from 'react';
import './brands.css';
import poopouri from '../../images/brandlogos/poo-pourri.png';
import transparentlabs from '../../images/brandlogos/transparentlabslogo.png';
import sleepgram from '../../images/brandlogos/sleepgramlogo.png';
import buckedup from '../../images/brandlogos/buckedup.png';
import mrcool from '../../images/brandlogos/mrcool.png';
import detoxwater from '../../images/brandlogos/detoxwater.png';
import jeunesse from '../../images/brandlogos/jeunesse.png';
import jackedfactory from '../../images/brandlogos/jackedfactory.png';
import lotusleggings from '../../images/brandlogos/lotusleggings.png';
import creditrepair from '../../images/brandlogos/creditrepair.png';
import tuftneedle from '../../images/brandlogos/tuft&needle.svg';
import shine from '../../images/brandlogos/shinelogo.png';
    
const Brands2 = (props) => {
  
    return ( 
    <div class="slider">
        <p>Recognizable Brands We’ve Worked With</p>
        <div class="slide-track">
            <div class="slide">
                <img src={poopouri} alt="poopouri"/>
            </div>
            <div class="slide">
                <img src={transparentlabs} alt="transparentlabs"/>
            </div>
            <div class="slide">
                <img src={buckedup} alt="buckedup"/>
            </div>
            <div class="slide">
                <img src={sleepgram} alt="sleepgram"/>
            </div>
            <div class="slide">
                <img src={jackedfactory} alt="jackedfactory"/>
            </div>
            <div class="slide">
                <img src={detoxwater} alt="detoxwater"/>
            </div>
            <div class="slide">
                <img src={jeunesse} alt="jeunesse"/>
            </div>
            <div class="slide">
                <img src={mrcool} alt="mrcool"/>
            </div>
            <div class="slide">
                <img src={creditrepair} alt="creditrepair"/>
            </div>
            <div class="slide">
                <img src={lotusleggings} alt="lotusleggings"/>
            </div>
            <div class="slide">
                <img src={tuftneedle} alt="tuftneedle"/>
            </div>
            <div class="slide">
                <img src={shine} alt="shine"/>
            </div>
        </div>
    </div>
    )
}

export default Brands2
