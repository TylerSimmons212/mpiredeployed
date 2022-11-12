import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import mrCool from "../../images/caseStudies/MrCoolWebsiteCaseStudy.png";
import projectSolar from "../../images/caseStudies/ProjectSolarWebsiteCaseStudy.png";
import BuckedUp from "../../images/caseStudies/BuckedUpWebsiteCaseStudy.png";
import TransparentLabs from "../../images/caseStudies/TransparentLabsWebsiteCaseStudy.png";
import GoodRanchers from "../../images/caseStudies/GoodRanchersWebsiteCaseStudy.png";
import Mixhers from "../../images/caseStudies/MixhersWebsiteCaseStudy.png";
import JackedFactory from "../../images/caseStudies/JackedFactoryWebsiteCaseStudy.png";
import "@splidejs/splide/dist/css/splide.min.css";

import "./results.css";

export default function CaseStudies(props) {
  return (
    <div className="casestudies" id="results">
      <h1 className="resultstitle">Some Exciting Case Studies</h1>
      <div className="cs-slides">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            resetProgress: false,
            arrows: "slider",
          }}
          hasSliderWrapper
          hasAutoplayProgress
        >
          <SplideSlide>
            <img src={projectSolar} alt="Project Solar" />
            <div className="text-content">
              <p>
                - Successfully launched proof of concept through ad spend to
                achieve $23M in Series A funding.
                <br />
                - We scaled their ad spend from $0-$10k/day profitably resulting
                in over 3,000 homes serviced in their first year!
                <br />- We are now wrapping up a 2nd successful year showing
                tremendous growth year over year.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={Mixhers} alt="Mixhers" />
            <div className="text-content">
              <p>
                - INCREASED ROAS .80 TO 2.0 WHILE INCREASING SPEND.
                <br />
                - Increased monthly Facebook spend from 30k to 100k while
                maintaining a 2.0 ROAS
                <br />
                - Launched their Google campaigns and currently maintain a 2.0
                ROAS
                <br />
                - Developed their ad creative strategies and figure out new
                angles on how to sell their product. We work closely with their
                team currently to scale the business and help them understand
                their customer more.
                <br />- First access we found an issue with their tracking which
                was over reporting attribution of online sales by 3x. We fixed
                the issue that we discovered cost them over $400k year to date.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={TransparentLabs} alt="Transparent Labs" />
            <div className="text-content">
              <p>
                - $2M TO $18M IN 12 MONTHS
                <br />
                - Made an enemy out of the rest of the supplement industry by
                demonstrating the quality of the TL product.
                <br />
                - Created a product demonstration with 2 big a$& blenders that
                drove the primary sales message home.
                <br />
                - Used a teaser to keep people watching as long as possible, to
                get educated on the product.
                <br />- Worked with owner directly right up until he sold the
                company, also worked with the new owner and helped build out an
                ad buying team in house. We also work with the original owner on
                his new brand.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <img src={GoodRanchers} alt="Good Ranchers" />
            <div className="text-content">
              <p>
                When we started, we went into their account to essentially
                compete against their other agency. We simply took what we
                noticed historically performed best and restructured campaigns
                in an effective manner. Doing this alone showed a 20%
                improvement in our campaigns vs theirs. We maintained those
                results.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={JackedFactory} alt="Jacked Factory" />
            <div className="text-content">
              <p>
                As Jacked Factory was solely and amazon brand, we launched
                their website and drove traffic to their website so their brand
                could expand outside of Amazon and own all their customers that
                purchase through their site. Our efforts resulted in doubling
                their overall revenue in just the first two months of us
                managing their campaigns.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={BuckedUp} alt="Bucked Up" />
            <div className="text-content">
              <p>
                - They ran a campaign with multiple ad agencies to see who would
                get the best results. We took the cake.
                <br />
                - “I really loved the approach…I’ve worked with over a dozen
                agencies the past few years and you guys are by far the most
                comprehensive!”
                <br />- Erin (CMO of Bucked Up)
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={mrCool} alt="Mr Cool" />
            <div className="text-content">
              <p>
                - $10M TO $167M IN 36 MONTHS WITH NO OUTSIDE MARKETING.
                <br />
                - We helped with development of unique “everything ad” anchor
                video framework with a hook, teaser, series of problems and
                solutions, and calls to actions
                <br />
                - We were head over all ad buying strategies on Google,
                Facebook, & Youtube
                <br />- We used a fast pace to keep the viewer interested in
                technical explanations
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
