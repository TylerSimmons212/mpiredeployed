import React, {
    useEffect
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './aboutus.css';

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


const Aboutus = (props) => {
  
    const classes = useStyles();
    useEffect(() => {

    }, [])


    return ( 
    <div className = 'aboutus' id='aboutus'>
     <h2>ABOUT US</h2>
     <h1>We are The Brothers</h1>
     <div className={classes.root}>
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
      
    </div>
    </div>
    )
}

export default Aboutus