import React from "react";
// Import Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
   return (
      <StyledContact
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
         style={{ background: "#fff" }}
      >
         <Title>
            <Hide>
               <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
            </Hide>
         </Title>
         <div>
            <Hide>
               <Social variants={titleAnimation}>
                  <Circle />
                  <h2>Send Us A message</h2>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnimation}>
                  <Circle />
                  <h2>Send Us An Email</h2>
               </Social>
            </Hide>
            <Hide>
               <Social variants={titleAnimation}>
                  <Circle />
                  <h2>Send Us A Social Media</h2>
               </Social>
            </Hide>
         </div>
      </StyledContact>
   );
};

const StyledContact = styled(motion.div)`
   padding: 4rem 8rem;
   color: #353535;
   min-height: 90vh;
   @media (max-width: 1500px) {
      padding: 1.5rem;
      font-size: 0.75rem;
   }
`;

const Title = styled.div`
   margin-bottom: 3rem;
   color: #000;
   @media (max-width: 1500px) {
      margin-top: 3rem;
   }
`;

const Hide = styled.div`
   overflow: hidden;
`;

const Circle = styled.div`
   border-radius: 50%;
   width: 2rem;
   height: 2rem;
   background: #353535;
`;

const Social = styled(motion.div)`
   display: flex;
   align-items: center;
   h2 {
      margin: 2rem;
   }
`;

export default ContactUs;
