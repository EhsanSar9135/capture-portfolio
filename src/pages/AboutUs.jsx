import React from "react";
// Import Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";
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
         <FAQSection />
      </motion.section>
   );
};

export default AboutUs;
