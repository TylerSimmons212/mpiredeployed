import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// CSS
import "./usvothers.css";

const FullWidthTabs = (props) => {
  return (
    <div className="usvothers" id="usvothers">
      <h2 id="usvotherstitle">QUESTIONS THAT BRING PEOPLE TO US</h2>
      <div className="accordian">
        <Accordion className="accordian-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#dba54d' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordian-title">
              Why are other agencies so expensive?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Most agencies charge a percentage of ad spend which typically
              comes around 10 to 20 percent with steep minimums and lengthy
              contracts.
              <br />
              <br />
              What's wrong with this you might ask? What most people don't know,
              is that agencies typically only assign one or two junior to
              mid-level experienced ad buyers to your ad accounts. All the
              senior level ad buyers get promoted to director level positions
              and are usually not hands on in your accounts. This ends up
              costing you more due to junior and mid-level ad buying results.
              <br />
              <br />
              At Mpire Media you get the hive mind of multiple elite level
              marketing minds on your account at a cost that is actually fair.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#dba54d' }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordian-title">
              Why is hiring in-house such a gamble?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hiring a truly valuable experienced ad buyer would cost you a
              minimum 80k salary with all the employee paperwork, insurance,
              on-boarding headaches, and everything else that comes with it. You
              won't get a collective mind and you don't know if your hire will
              meet your needs. Going through the hiring process only to fire
              someone is quite the pain in the a$$.
              <br />
              <br />
              When you hire us you get multiple elite level experienced ad
              buyers for less then the cost of one in-house employee, with a
              simple signed agreement and a 1099. Lose the headache.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#dba54d' }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className="accordian-title">
              Why should I avoid all-in-one agencies?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              One thing we have learned when working with agencies in the past,
              the agencies who try to do everything; creatives, ad buying, SEO,
              CRO, Web Development, etc., you get a team that might do good at a
              thing or two but decent at best on the rest.
              <br />
              <br />
              When you work with teams that specialize in their field of
              expertise, you actually get experts. This is why we stay our lane
              of ad buying and have a network of partnered companies we work
              with that each stay their lane.
              <br />
              <br />
              For example: you will notice with creative agencies, each agency
              you'll find, has their style that they stick with. Some styles
              might not be best for your brand. We have a tight relationship
              with some of the best teams out there and can point you in the
              direction your data tells us you need to get the results you are
              looking for.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#dba54d' }} />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className="accordian-title">
              Why is transparency so important?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We always struggled working with agencies that tried to beat
              around the bush to keep a client thinking things are going well so
              they can keep you spending money on them. We prefer being upfront
              about issues and bringing solutions. We have a reputation for
              being fair, and more importantly, honest with those we work with.
              We treat our clients as if their business was ours because it is.
              We take pride in our relationships as 90% of our clientele have
              been client reffered.
              <br /> <br />
              Mpire Media exists because we are a group of marketers who enjoy
              doing what we do because we our good in what we do. If any one of
              us loses a client, it affects how much those responsible for the
              account earn. Our ad buyers earn a large part of the earnings to
              incentivize everyone to perform on their accounts.
              <br />
              <br />
              Our relationships need to be mutually beneficial to create lasting
              relationships and most importantly, friendships. It feels less
              like work when we help our friends.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordian-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#dba54d' }} />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className="accordian-title">
              Why are we so affordable compared to other agencies?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We have a cost effective solution to delivering your needs. We
              have an a la cart system in the way we charge. We offer a wide
              range of skill sets outside of just ad buying to ensure success
              with scaling your brand.
              <br />
              <br /> ‍ If you want us to only manage Facebook Ads, we will only
              charge for that. The more work we offer, the less you pay per
              service delivered. This gives you full control of what you want to
              be paying for, saving you a lot of money. This helps us clearly
              understand our position in the relationship with your brand.
              <br />
              <br />
              Though we love to be open about ideas on how to better scale your
              brand for success.
              <br />
              <br />
              Lastly, we don't believe in long term contracts. Long term
              contracts are for agencies who lack the ability to build trusting
              relationships through good honest work.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="contactbtn">
        <Button
          variant="contained"
          onClick={() => {
            props.setForm(true);
          }}
          className="contactbtntxt2"
        >
          WORK WITH US
        </Button>
      </div>
    </div>
  );
};

export default FullWidthTabs;
