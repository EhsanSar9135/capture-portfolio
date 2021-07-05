import React from "react";
// Import Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
   return (
      <motion.section
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <AboutSection />
         <ServicesSection />
         <FaqSection />
      </motion.section>
   );
};

export default AboutUs;
