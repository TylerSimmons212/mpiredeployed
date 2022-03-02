import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import transparentlabsimage from '../../images/brandimages/tl.png';
import buckedupimage from '../../images/brandimages/bu.png';
import mrcoolimage from '../../images/brandimages/mc.png';
import creditrepairimage from '../../images/brandimages/cr.png';
import projectsolarimage from '../../images/brandimages/projectsolar-main.jpg';
import goodranchersimage from '../../images/brandimages/goodranchers-main.jpg';
import jackedfactoryimage from '../../images/brandimages/jackedfactory-main.jpg';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './casestudies.css';

export default function CaseStudies(props) {
 

    return (
        <div className="casestudies" id="results">
            <h1 className="resultstitle">Some Exciting Case Studies</h1>
            <Splide
                options={ {
                type         : 'loop',
                gap          : '1rem',
                autoplay     : true,
                pauseOnHover : true,
                resetProgress: false,
                arrows       : 'slider',
                } }
                hasSliderWrapper
                hasAutoplayProgress
            >
            <SplideSlide>
                <img src={transparentlabsimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>6Xing a multi-million company</h1>
                    <p>For the last year that the ad has been live, it has maintained a 5:1 blended ROI and taken Transparent Labs from $2M/yr to a whopping $13M/yr in revenue.</p>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={buckedupimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>Outperformed every other ad agency.</h1>
                    <p>“I really love the approach.. i’ve worked with over a dozen agencies the past few years and you guys are by far the most comprehensive!” - Erin (CMO of Bucked Up)</p>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={mrcoolimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>From $10M to $26M</h1>
                    <p>One summer and 14 million views later, the results were in: sales increased by 260% across the board, from $10M to $26M.</p>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={creditrepairimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>80% Decrease in Cost per Lead</h1>
                    <p>The target Cost Per Lead as requested by them was $200 per lead. within a month, we were able to get their cost per lead down to $20.</p>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={projectsolarimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>Installed Custom Solar For Over 3,000 Homes In The First Year of launching!</h1>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={goodranchersimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>Decreased Overall Cost Per Acquisition by 20%</h1>
                </div>                
            </SplideSlide>
            <SplideSlide>
                <img src={jackedfactoryimage} alt="Transparent Labs"/>
                <div className="text-content">
                    <h1>Doubled Overall Revenue</h1>
                    <p>As Jacked factory was solely an amazon brand, we launched their website and drove traffic resulting in doubling their overall revenue.</p>
                </div>                
            </SplideSlide>
            </Splide>
        </div>
    )
}
