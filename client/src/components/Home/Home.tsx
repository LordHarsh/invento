"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom'
            });
        };
        initAOS();
    },[])
  return (
    <div className="overflow-hidden ">
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
    </div>
  )
}

export default Home
