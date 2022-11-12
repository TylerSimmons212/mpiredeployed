import React, { useState, useEffect } from "react";

import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Brands from "../Brands/Brands";
import UsvOthers from "../UsvOthers/Usvothers";
import Results from "../BrandsResults/Results";
import AboutUs from "../AboutUs/Aboutus";
import Capabilities from "../OurCapabilities/Capabilities";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Teams from "../TeamsWeWorkWith/TeamsWeWorkWith";
import OurPricing from "../OurPricing/OurPricing";

const Home = () => {
  const [form, setForm] = useState(false);

  useEffect(() => {}, [form]);

  return (
    <div className="home">
      <Nav setForm={setForm} />
      {form ? (
        <Form setForm={setForm} />
      ) : (
        <div>
          <Hero setForm={setForm} />
          <Brands />
          <UsvOthers setForm={setForm} />
          <Teams />
          <AboutUs />
          <Results setForm={setForm} />
          <OurPricing />
          <Capabilities />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
