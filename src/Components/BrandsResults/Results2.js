import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// Brand Logos
import poopouri from '../../images/brandlogos/poo-pourri.png';
import transparentlabs from '../../images/brandlogos/transparentlabs.png';
import buckedup from '../../images/brandimages/buckeduplogo.png';
import mrcool from '../../images/brandlogos/mrcool.svg';
import jeunesse from '../../images/brandimages/jeunesselogo.png';
import creditrepair from '../../images/brandimages/creditrepairlogo.png';
// Brand Images
import poopouriimage from '../../images/brandimages/poopourri.jpg';
import transparentlabsimage from '../../images/brandimages/transparentlabs.png';
import buckedupimage from '../../images/brandimages/buckedup.jpg';
import mrcoolimage from '../../images/brandimages/mrcool.jpg';
import jeunesseimage from '../../images/brandimages/jeunesse.jpg';
import creditrepairimage from '../../images/brandimages/creditrepair.jpg';

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <div>
        <div>
            <img src={poopouri} />
        </div>
        <img src={poopouriimage} />
        <div>
            <h1>Successful new product launch.</h1>
            <p>Our efforts in ad buying cut their traffic costs almost in half and reached their CPA goals. These results helped them drive over $3M in sales that month!</p>
        </div>
    </div>
    <div>
        <div>
            <img src={transparentlabs} />
        </div>
        <img src={transparentlabsimage} />
        <div>
            <h1>6Xing a multi-million company</h1>
            <p>For the last year that the ad has been live, it has maintained a 5:1 blended ROI and taken Transparent Labs from $2M/yr to a whopping $13M/yr in revenue.</p>
        </div>
    </div>
    <div>
        <div>
            <img src={buckedup} />
        </div>
        <img src={buckedupimage} />
        <div>
            <h1>Outperformed every other ad agency.</h1>
            <p>“I really love the approach.. i’ve worked with over a dozen agencies the past few years and you guys are by far the most comprehensive!” - Erin (CMO of Bucked Up)</p>
        </div>
    </div>
    <div>
        <div>
            <img src={mrcool} />
        </div>
        <img src={mrcoolimage} />
        <div>
            <h1>From $10M to $26M</h1>
            <p>One summer and 14 million views later, the results were in: sales increased by 260% across the board, from $10M to $26M.</p>
        </div>
    </div>
    <div>
        <div>
            <img src={jeunesse} />
        </div>
        <img src={jeunesseimage} />
        <div>
            <h1>Scaled to $45k/day Profitably</h1>
            <p>We were able to cut their CPL down 40% which gave them the ability to scale and within 8 weeks reached spends of $45,000 a day!</p>
        </div>
    </div>
    <div>
        <div>
            <img src={creditrepair} />
        </div>
        <img src={creditrepairimage} />
        <div>
            <h1>80% Decrease in Cost per Lead</h1>
            <p>The target Cost Per Lead as requested by them was $200 per lead. within a month, we were able to get their cost per lead down to $20.</p>
        </div>
    </div>
    
        
  </Carousel>
);

export default MyCarousel;