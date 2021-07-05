import React from "react";
// Import Style
import { About, Description, Image, Hide } from "../styles";
// Import Images
import home1 from "../img/home1.png";
// Import Animation
import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from "../animation";

const AboutSection = () => {
   return (
      <About>
         <Description>
            <div className="title">
               <Hide>
                  <motion.h2 variants={titleAnimation}>
                     We work to make
                  </motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnimation}>
                     your <span>dreams</span> come
                  </motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnimation}>true.</motion.h2>
               </Hide>
            </div>
            <motion.p variants={fade}>
               Contact us for any photography or videography ideas that you
               have. We have professionals with amazing skills.
            </motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
         </Description>
         <Image>
            <motion.img
               variants={photoAnimation}
               src={home1}
               alt="guy with a camera"
            />
         </Image>
      </About>
   );
};

export default AboutSection;
