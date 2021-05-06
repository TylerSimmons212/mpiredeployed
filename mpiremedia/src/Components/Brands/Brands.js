import React, {
    useEffect
} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './brands.css';

// Logo's imports
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


const Brands = (props) => {
  

    useEffect(() => {

    }, [])

    const width = window.innerWidth;
    const breakpoint = 620;

    return ( 
    <div className = 'brands' >
        <h2>BRANDS WE'VE WORKED WITH</h2>
        {width < breakpoint ?
        <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showIndicators={false} showThumbs={false} centerMode={true} showStatus={false} transitionTime={3000} centerSlidePercentage='60'>
            <div className="brandcard" id="poopouri">
                <img src={poopouri} alt="poopouri"/>
            </div>
            <div className="brandcard" id="transparentlabs">
                <img src={transparentlabs} alt="transparentlabs"/>
            </div>
            <div className="brandcard" id="buckedup">
                <img src={buckedup} alt="buckedup"/>
            </div>
            <div className="brandcard" id="sleepgram">
                <img src={sleepgram} alt="sleepgram"/>
            </div>
            <div className="brandcard" id="jackedfactory">
                <img src={jackedfactory} alt="jackedfactory"/>
            </div>
            <div className="brandcard" id="detoxwater">
                <img src={detoxwater} alt="detoxwater"/>
            </div>
            <div className="brandcard" id="jeunesse">
                <img src={jeunesse} alt="jeunesse"/>
            </div>
            <div className="brandcard" id="mrcool">
                <img src={mrcool} alt="mrcool"/>
            </div>
            <div className="brandcard" id="creditrepair">
                <img src={creditrepair} alt="creditrepair"/>
            </div>
            <div className="brandcard" id="lotusleggings">
                <img src={lotusleggings} alt="lotusleggings"/>
            </div>
            <div className="brandcard" id="tuftneedle">
                <img src={tuftneedle} alt="tuftneedle"/>
            </div>
            <div className="brandcard" id="shine">
                <img src={shine} alt="shine"/>
            </div>
            </Carousel>:
            <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showIndicators={false} showThumbs={false} centerMode={true} showStatus={false} transitionTime={3000} centerSlidePercentage='20'>
                <div className="brandcard" id="poopouri">
                    <img src={poopouri} alt="poopouri"/>
                </div>
                <div className="brandcard" id="transparentlabs">
                    <img src={transparentlabs} alt="transparentlabs"/>
                </div>
                <div className="brandcard" id="buckedup">
                    <img src={buckedup} alt="buckedup"/>
                </div>
                <div className="brandcard" id="sleepgram">
                    <img src={sleepgram} alt="sleepgram"/>
                </div>
                <div className="brandcard" id="jackedfactory">
                    <img src={jackedfactory} alt="jackedfactory"/>
                </div>
                <div className="brandcard" id="detoxwater">
                    <img src={detoxwater} alt="detoxwater"/>
                </div>
                <div className="brandcard" id="jeunesse">
                    <img src={jeunesse} alt="jeunesse"/>
                </div>
                <div className="brandcard" id="mrcool">
                    <img src={mrcool} alt="mrcool"/>
                </div>
                <div className="brandcard" id="creditrepair">
                    <img src={creditrepair} alt="creditrepair"/>
                </div>
                <div className="brandcard" id="lotusleggings">
                    <img src={lotusleggings} alt="lotusleggings"/>
                </div>
                <div className="brandcard" id="tuftneedle">
                    <img src={tuftneedle} alt="tuftneedle"/>
                </div>
                <div className="brandcard" id="shine">
                    <img src={shine} alt="shine"/>
                </div>
            </Carousel>
        }
    </div>
    )
}

export default Brands