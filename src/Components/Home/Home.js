import React, { useState, useEffect } from 'react';

import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import Brands2 from '../Brands/Brands2';
import UsvOthers from '../UsvOthers/Usvothers';
import Results from '../BrandsResults/Results3';
import AboutUs2 from '../AboutUs/Aboutus2';
import Capabilities from '../OurCapabilities/Capabilities';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';



const Home = (props) => {
    const [form, setForm] = useState(false)

    useEffect(() => {

    }, [form])


    return ( 
        <div className = 'home' >
        <Nav setForm={setForm}/>
        {form?<Form setForm={setForm}/>:<div>
            <Hero setForm={setForm}/>
            <Brands2 />
            <UsvOthers setForm={setForm}/>
            <AboutUs2 />
            <Results setForm={setForm}/>
            <Capabilities />
        </div>}
        <Footer />
    </div>
    )
}

export default Home
