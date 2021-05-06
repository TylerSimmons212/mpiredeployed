import React, {
    useState,
    useEffect
} from 'react';

import './capabilities.css';




const Capabilities = (props) => {
  

    useEffect(() => {

    }, [])


    return ( 
    <div className = 'capabilities' id='capabilities'>
        <h1>Our Capabilities</h1>
        <div>
            <h2>Ad Buying</h2>
            <p>Our core strength is in multi platform ad buying. Below are a list of platforms we have ran ads for our clients on.</p>
            <div className='icons'>
                <div className='icon'>
                    <i class="fab fa-facebook"></i>
                    <p>Facebook</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-google"></i>
                    <p>Google (Search, Display, Shopping)</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-youtube"></i>
                    <p>Youtube</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-yahoo"></i>
                    <p>Yahoo Gemini</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-snapchat"></i>
                    <p>SnapChat</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-tiktok"></i>
                    <p>Tik Tok</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-pinterest"></i>
                    <p>Pinterest</p>
                </div>
            </div>
        </div>
        <div>
            <h2>Our Strengths</h2>
            <p>We've been doing ad buying & marketing strategy long enough to know what does & doesn't work. We will help you with the following:</p>
            <div className='icons'>
                <div className='icon'>
                    <i class="fas fa-bullhorn"></i>
                    <p>Market & Content Strategy</p>
                </div>
                <div className='icon'>
                    <i class="fas fa-hashtag"></i>
                    <p>Social Media Marketing Plan Development</p>
                </div>
                <div className='icon'>
                    <i class="fas fa-code-branch"></i>
                    <p>Creative Development Strategy</p>
                </div>
                <div className='icon'>
                    <i class="fas fa-wifi"></i>
                    <p>Website UX/UI Optimization</p>
                </div>
                <div className='icon'>
                    <i class="far fa-chart-bar"></i>
                    <p>Tracking/Analytics</p>
                </div>
                <div className='icon'>
                    <i class="fab fa-bandcamp"></i>
                    <p>Brand Development Strategy</p>
                </div>
                <div className='icon'>
                    <i class="fas fa-comments"></i>
                    <p>SMS Subscription & Promotional Advertising</p>
                </div>
                <div className='icon'>
                    <i class="fas fa-filter"></i>
                    <p>Full Funnel Advertising Development Strategy</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Capabilities