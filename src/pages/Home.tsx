import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyUs from '../components/WhyUs/WhyUs';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <AboutUs />
      <WhyUs/>
      
    </div>
  );
};
export default Home;
