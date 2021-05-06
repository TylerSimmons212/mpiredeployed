import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// Verticle Stepper Imports
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
// CSS
import './usvothers.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: '#424242',
//   },
// }));

function getSteps() {
  return ['Agencies Are Pricey', 'In House Is Pricey', 'Transparency', 'Competitive', 'Our Pricing'];
}

function getStepTitle(step) {
  switch (step) {
    case 0:
      return `1. Hiring an agency is expensive.`;
    case 1:
      return '2. Hiring in-house is expensive.';
    case 2:
      return `3. Transparency is more valuable than an ongoing sales pitch.`;
    case 3:
      return `4. Competitive`;
    case 4:
      return `5. Our Pricing Structure`;
    default:
      return 'Unknown step';
  }
}
function getStepSubTitle(step) {
  switch (step) {
    case 0:
      return ``;
    case 1:
      return ``;
    case 2:
      return ``;
    case 3:
      return `(only pay for the services we are currently providing).`;
    case 4:
      return ``;
    default:
      return 'Unknown step';
  }
}
function getStepText(step) {
  switch (step) {
    case 0:
      return `Agencies typically charge a percentage of ad spend, usually 10-20% with steep minimums to pay their employees.

      Agencies typically only assign one or two junior/mid level experienced employees to your account. All the high level experienced guys get promoted to director level positions and are usually not hands on in your accounts.`;
    case 1:
      return `Hiring a truly valuable experienced ad buyer would cost you a MINIMUM $80k salary with all the employee paperwork, insurance, onboarding headaches, and everything else that comes with it. 
      ‍
      When you hire us brothers, you get multiple highly experienced advertising brothers for less than the cost of ONE in house employee with a simple signed agreement and a 1099. Lose the headaches.`;
    case 2:
      return `We take pride in our relationships as 90% of our clientele has come to us through client referrals. 
      ‍
      We always struggled working with agencies that tried to beat around the bush to keep a client thinking things are going well so they can keep you spending money on them.
      We prefer being upfront about issues and bringing solutions. We have a reputation for being fair with those we work with. 
      ‍
      Our relationships need to be mutually beneficial to create lasting relationships and most importantly, friendships. It feels less like work when we help our friends.`;
    case 3:
      return `We have a cost effective solution to delivering your needs. We have an a la cart system in the way we charge. We offer a wide range of skill sets outside of just ad buying to ensure success with scaling your brand. 
      ‍
      If you want us to only manage Facebook Ads, we will only charge for that. The more work we offer, the less you pay per service delivered. This gives you full control of what you want to be paying for, saving you a lot of money. This helps us clearly understand our position in the relationship with your brand. 
      
      Though we love to be open about ideas on how to better scale your brand for success.
      `;
    case 4:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="usvothers" id="usvothers">
      <h2 id="usvotherstitle">WORKING WITH US VS THE ALTERNATIVE</h2>
      <div className={classes.root} id="stepper-container">
      <Stepper activeStep={activeStep} orientation="vertical" className="stepper">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography className="steptitle">{getStepTitle(index)}</Typography>
              <Typography className="stepsubtitle">{getStepSubTitle(index)}</Typography>
              <Typography className="steptext">{getStepText(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
        {/* <AppBar position="static" id="appbar">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className="tabs"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Agencies Are Pricey" {...a11yProps(0)} />
            <Tab label="In House Is Pricey" {...a11yProps(1)} />
            <Tab label="Transparency" {...a11yProps(2)} />
            <Tab label="Competitive" {...a11yProps(3)} />
            <Tab label="Our Pricing" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <h1>1. Hiring an agency is expensive.</h1>
            <p>Agencies typically charge a percentage of ad spend, usually 10-20% with steep minimums to pay their employees.<br/><br/>Agencies typically only assign one or two junior/mid level experienced employees to your account. All the high level experienced guys get promoted to director level positions and are usually not hands on in your accounts.</p>
            <Button variant="contained" href="#contained-buttons" className="contactbtntxt">
                  Work With Us Instead
            </Button>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <h1>2. Hiring in-house is expensive.</h1>
            <p>Hiring a truly valuable experienced ad buyer would cost you a MINIMUM $80k salary with all the employee paperwork, insurance, onboarding headaches, and everything else that comes with it. 
            ‍<br/><br/>
            When you hire us brothers, you get multiple highly experienced advertising brothers for less than the cost of ONE in house employee with a simple signed agreement and a 1099. Lose the headaches.</p>
            <Button variant="contained" href="#contained-buttons" className="contactbtntxt">
                  Work With Us Instead
            </Button>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          <h1>3. Transparency is more valuable than an ongoing sales pitch.</h1>
            <p>We take pride in our relationships as 90% of our clientele has come to us through client referrals. 
            ‍<br/><br/>
            We always struggled working with agencies that tried to beat around the bush to keep a client thinking things are going well so they can keep you spending money on them.
            We prefer being upfront about issues and bringing solutions. We have a reputation for being fair with those we work with.
            <br/><br/>
            Our relationships need to be mutually beneficial to create lasting relationships and most importantly, friendships. It feels less like work when we help our friends. </p>
            <Button variant="contained" href="#contained-buttons" className="contactbtntxt">
                  Let's Chat
            </Button>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          <h1>4. Competitive<br/><span className="subtitle">(only pay for the services we are currently providing).</span></h1>
            <p>We have a cost effective solution to delivering your needs. We have an a la cart system in the way we charge. We offer a wide range of skill sets outside of just ad buying to ensure success with scaling your brand. 
            ‍<br/><br/>
            If you want us to only manage Facebook Ads, we will only charge for that. The more work we offer, the less you pay per service delivered. This gives you full control of what you want to be paying for, saving you a lot of money. This helps us clearly understand our position in the relationship with your brand. 
            <br/><br/>
            Though we love to be open about ideas on how to better scale your brand for success.
            </p>
            <Button variant="contained" href="#contained-buttons" className="contactbtntxt">
                  Let's Chat
            </Button>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
          <h1>5. Our Pricing Structure</h1>
            <div className="pricingboxes">
              <div className="pricingbox">
                <h2>$1,000/Mo</h2>
                <p>- Creative Work (with expectations) - SMS Management</p>
                <p>- Consulting (1hr/week) $250/hr</p>
              </div>
              <div className="pricingbox">
                <h2>$3,000/Mo</h2>
                <p>Single Platform Ad Management<br/>(eg. Facebook)</p>
              </div>
              <div className="pricingbox">
                <h2>$4,000/Mo</h2>
                <p>- 2 Platform Ad Management<br/>(eg. Facebook, Google)</p>
              </div>
              <div className="pricingbox">
                <h2>$5,000/Mo</h2>
                <p>- 3+ Platform Ad Management<br/>(eg. Facebook, Google, Pinterest)</p>
              </div>
            </div>
            <div className="pricingboxbottom">
                <h2>One-Time Pay</h2>
                <p>- Audits (Each Ad Account $500)</p>
                <p>- Campaign buildout ($3000 / full build + consulting = $4000)</p>
            </div>
            <Button variant="contained" href="#contained-buttons" className="contactbtntxt">
                  Let's Chat
            </Button>
          </TabPanel>
        </SwipeableViews> */}
      </div>
    </div>
  );
}