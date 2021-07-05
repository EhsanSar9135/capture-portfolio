import React from "react";
// Import Components
import { About } from "../styles";
import Toggle from "./Toggle";
// Import Style & Animation
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";

const FaqSection = () => {
   const [element, controls] = useScroll();
   return (
      <FAQ ref={element} variants={scrollReveal} initial="hidden" animate={controls}>
         <h2>
            Any Questions <span>FAQ</span>
         </h2>
         <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Labore, accusantium.
                  </p>
               </div>
            </Toggle>
            <Toggle title="Daily Schedule">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Labore, accusantium.
                  </p>
               </div>
            </Toggle>
            <Toggle title="Different Payment Methods">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Labore, accusantium.
                  </p>
               </div>
            </Toggle>
            <Toggle title="What Products do you Offer?">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Labore, accusantium.
                  </p>
               </div>
            </Toggle>
         </AnimateSharedLayout>
      </FAQ>
   );
};

const FAQ = styled(About)`
   display: block;
   span {
      display: block;
   }
   h2 {
      padding-bottom: 2rem;
      font-weight: lighter;
   }
   .faq-line {
      background: #ccc;
      height: 0.2rem;
      margin: 2rem 0;
      width: 100%;
   }
   .question {
      padding: 2rem 0;
      cursor: pointer;
   }
   .answer {
      padding: 1rem 0;
      p {
         padding: 0.5rem 0;
      }
   }
`;

export default FaqSection;
