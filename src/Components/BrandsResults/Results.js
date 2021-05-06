import React, {
    useState,
    useEffect
} from 'react';
import { Paper, Button } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './results.css';
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



function Example(props)
{
    var items = [
        {
            name: "Scaled to $45k/day Profitably",
            description: "We were able to cut their CPL down 40% which gave them the ability to scale and within 8 weeks reached spends of $45,000 a day!",
            src: jeunesseimage,
            alt: 'jeunesseimage',
            logo: jeunesse
        },
        {
            name: "Successful new product launch.",
            description: "Our efforts in ad buying cut their traffic costs almost in half and reached their CPA goals. These results helped them drive over $3M in sales that month!",
            src: poopouriimage,
            alt: 'poopouriimage',
            logo: poopouri
        },
        {
            name: "80% Decrease in Cost per Lead",
            description: "The target Cost Per Lead as requested by them was $200 per lead. within a month, we were able to get their cost per lead down to $20.",
            src: creditrepairimage,
            alt: 'creditrepairimage',
            logo: creditrepair
        },
        {
            name: "6Xing a multi-million company",
            description: "For the last year that the ad has been live, it has maintained a 5:1 blended ROI and taken Transparent Labs from $2M/yr to a whopping $13M/yr in revenue.",
            src: transparentlabsimage,
            alt: 'transparentlabsimage',
            logo: transparentlabs
        },
        {
            name: "Outperformed every other ad agency.",
            description: "“I really love the approach.. i’ve worked with over a dozen agencies the past few years and you guys are by far the most comprehensive!” - Erin (CMO of Bucked Up)",
            src: buckedupimage,
            alt: 'buckedupimage',
            logo: buckedup
        },
        {
            name: "From $10M to $26M",
            description: "One summer and 14 million views later, the results were in: sales increased by 260% across the board, from $10M to $26M.",
            src: mrcoolimage,
            alt: 'mrcoolimage',
            logo: mrcool
        }
    ]

    return (
        <div className="results" id="results">
            <h2 id="resultstitle">BRANDS WE'VE WORKED WITH & THEIR RESULTS</h2>
            <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showIndicators={true} showThumbs={false} centerMode={true} interval='4000' centerSlidePercentage='60' showStatus={false} transitionTime={2000}>
            {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="resultscard">
            <Paper >
                <div className="brandlogo">
                    <img src={props.item.logo} alt={props.item.art}/>
                </div>
                <div className="brandimage">
                    <img src={props.item.src} alt={props.item.alt}/>
                </div>
                <h2 className="resultsh2">{props.item.name}</h2>
                <p className="resultsp">{props.item.description}</p>
            </Paper>
            
        </div>
    )
}




export default Example