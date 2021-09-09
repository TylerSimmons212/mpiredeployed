import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

import poopouri from '../../images/brandlogos/poo-pourri.png';
import transparentlabs from '../../images/brandlogos/transparentlabs.png';
import buckedup from '../../images/brandimages/buckeduplogo.png';
import mrcool from '../../images/brandlogos/mrcool.svg';
import jeunesse from '../../images/brandimages/jeunesselogo.png';
import creditrepair from '../../images/brandimages/creditrepairlogo.png';

import poopouriimage from '../../images/brandimages/poopourri.jpg';
import transparentlabsimage from '../../images/brandimages/transparentlabs.png';
import buckedupimage from '../../images/brandimages/buckedup.jpg';
import mrcoolimage from '../../images/brandimages/mrcool.jpg';
import jeunesseimage from '../../images/brandimages/jeunesse.jpg';
import creditrepairimage from '../../images/brandimages/creditrepair.jpg';

import './results2.css';

export default function Results3(props) {
    let items = [
        {
            image: poopouri,
            title: "Successful new product launch.",
            text: "Our efforts in ad buying cut their traffic costs almost in half and reached their CPA goals. These results helped them drive over $3M in sales that month!",
            bgimage: poopouriimage
        },
        {
            image: transparentlabs,
            title: "6Xing a multi-million company",
            text: "For the last year that the ad has been live, it has maintained a 5:1 blended ROI and taken Transparent Labs from $2M/yr to a whopping $13M/yr in revenue.",
            bgimage: transparentlabsimage
        },
        {
            image: buckedup,
            title: "Outperformed every other ad agency.",
            text: "“I really love the approach.. i’ve worked with over a dozen agencies the past few years and you guys are by far the most comprehensive!” - Erin (CMO of Bucked Up)",
            bgimage: buckedupimage
        },
        {
            image: mrcool,
            title: "From $10M to $26M",
            text: "One summer and 14 million views later, the results were in: sales increased by 260% across the board, from $10M to $26M.",
            bgimage: mrcoolimage
        },
        {
            image: jeunesse,
            title: "Scaled to $45k/day Profitably",
            text: "We were able to cut their CPL down 40% which gave them the ability to scale and within 8 weeks reached spends of $45,000 a day!",
            bgimage: jeunesseimage
        },
        {
            image: creditrepair,
            title: "80% Decrease in Cost per Lead",
            text: "The target Cost Per Lead as requested by them was $200 per lead. within a month, we were able to get their cost per lead down to $20.",
            bgimage: creditrepairimage
        }
    ]

    return (
        <div className="results">
            <h1 className="resultstitle">Some Exciting Case Studies</h1>
            <div className="carousel-wrapper">
                <div className="carousel-container">
                    <div className="carousel">
                        <Carousel
                            navButtonsAlwaysVisible
                            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                        >
                            {items.map((item, i) => <Item key={i} item={item} />)}
                        </Carousel >
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item(props) {
    return (
        <Paper>

            <div className="carousel-slide image-slide" style={{ backgroundImage: `url(${props.item.bgimage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="logodiv">
                    <img src={props.item.image} alt="company image" />
                </div>
                <div className="slidecontent">
                    <h1>{props.item.title}</h1>
                    <p>{props.item.text}</p>
                </div>
            </div>

        </Paper>
    )
}
