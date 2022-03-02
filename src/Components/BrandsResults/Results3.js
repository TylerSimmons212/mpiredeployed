import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

import transparentlabs from '../../images/brandlogos/transparentlabs.png';
import buckedup from '../../images/brandimages/buckeduplogo.png';
import mrcool from '../../images/brandlogos/mrcool.svg';
import creditrepair from '../../images/brandimages/creditrepairlogo.png';
import projectsolar from '../../images/brandlogos/projectsolarlogo.png';
import goodranchers from '../../images/brandlogos/goodrancherslogo.png';
import jackedfactory from '../../images/brandlogos/jackedfactorylogo.png';

import transparentlabsimage from '../../images/brandimages/tl.png';
import buckedupimage from '../../images/brandimages/bu.png';
import mrcoolimage from '../../images/brandimages/mc.png';
import creditrepairimage from '../../images/brandimages/cr.png';
import projectsolarimage from '../../images/brandimages/projectsolar-main.jpg';
import goodranchersimage from '../../images/brandimages/goodranchers-main.jpg';
import jackedfactoryimage from '../../images/brandimages/jackedfactory-main.jpg';

import './results2.css';

export default function Results3(props) {
    let items = [
        {
            image: transparentlabs,
            title: "6Xing a multi-million company",
            text: "For the last year that the ad has been live, it has maintained a 5:1 blended ROI and taken Transparent Labs from $2M/yr to a whopping $13M/yr in revenue.",
            bgimage: transparentlabsimage
        },
        {
            image: projectsolar,
            title: "Installed Custom Solar For Over 3,000 Homes In The First Year of launching!",
            text: "",
            bgimage: projectsolarimage
        },
        {
            image: goodranchers,
            title: "Decreased Overall Cost Per Acquisition by 20%",
            text: "",
            bgimage: goodranchersimage
        },
        {
            image: jackedfactory,
            title: "Doubled Overall Revenue",
            text: "As Jacked factory was solely an amazon brand, we launched their website and drove traffic resulting in doubling their overall revenue.",
            bgimage: jackedfactoryimage
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
            image: creditrepair,
            title: "80% Decrease in Cost per Lead",
            text: "The target Cost Per Lead as requested by them was $200 per lead. within a month, we were able to get their cost per lead down to $20.",
            bgimage: creditrepairimage
        }
    ]

    return (
        <div className="results" id="results">
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

                    <img src={props.item.bgimage} alt="company image" />

                <div className="slidecontent">
                    <h1>{props.item.title}</h1>
                    <p>{props.item.text}</p>
                </div>
            </div>

        </Paper>
    )
}
