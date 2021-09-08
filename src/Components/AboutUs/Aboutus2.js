import React, {
    useEffect
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './aboutus2.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        padding: '50px 0'
    },
    heading: {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: "'Montserrat', sans-serif;"
    },
    headingbar: {
        // backgroundColor: '#323332'
    },
    bodytext: {
        textAlign: 'left',
        fontSize: '16px',
    }
}));


const Aboutus2 = (props) => {

    const classes = useStyles();
    useEffect(() => {

    }, [])


    return (
        <div className='aboutus' id='aboutus'>
            <div className="aboutuscontent">
                <h2>ABOUT US</h2>
                <h1>We are The Brothers</h1>
                <p>We are Brand Builders and entrepreneurs. We love challenging projects. We are convinced that any brand can win on any budget with the right strategy. We have a history of building profitable companies by leveraging the power of the digital media world. We've founded, built, and sold online businesses that generated over $1 million within 12 months of creation with less than $10,000.<br/><br/>
                Our life-changing moment was when we took it upon ourselves to start our digital marketing efforts through affiliate programs. We quickly discovered the money in marketing. We knew then that this is what we wanted to do for the rest of our lives. Our start in affiliate marketing made us who we are today as all our efforts were commission-based and self-funded. Our campaigns had to show profitability, or it was game over. Since then, We've had years of experience in agency, affiliate, eCom, and start-ups.<br/><br/>
                Now, you can find us building some of the most memorable and strongest brands on the rise today. We've been a leading role behind over $300,000,000 in trackable sales, 400 million video ad views, 5 million social shares, and 15k press features. Brands We’ve been working on have been featured in AdWeek, Forbes, Time, etc...</p>
                {/* <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.headingbar}
                        >
                            <Typography className={classes.heading}>How long have we both been doing media buying?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.bodytext}>
                                We've been doing this for over 20 years combined. We started with running ads for affiliate offers and generated well over 6 figures per month. We transitioned into helping clients when we found our system for generated high return on ad spend for almost any industry.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={classes.headingbar}
                        >
                            <Typography className={classes.heading}>What do we both love about ad buying?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.bodytext}>
                                Seeing amazing products succeed in the marketplace. We know advertising can be very technical so it always makes us happy to see the amazing and cool products our clients bring to the market.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={classes.headingbar}
                        >
                            <Typography className={classes.heading}>Can we help you with your advertising?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.bodytext}>
                                Short answer, yes. We know ad buying may not be a fun part of your business but it's a very key part for growth. We have multiple systems to run, evaluate, and scale Google and Facebook ads to see a lot of growth in your business. Contact Us to see how we can help.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div> */}
            </div>
            <div className="aboutusimg"></div>

        </div>
    )
}

export default Aboutus2
