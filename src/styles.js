import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.section)`
   min-height: 90vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 4rem 8rem;
   color: #fff;
   @media (max-width: 1300px) {
      display: block;
      text-align: center;
      padding: 1rem;
   }
`;

export const Description = styled.div`
   flex: 1;
   padding-right: 5rem;
   z-index: 2;
   h2 {
      font-weight: lighter;
   }
   @media (max-width: 1300px) {
      padding: 0;
      button {
         margin: 1.5rem 0 3rem 0;
      }
   }
`;

export const Image = styled.div`
   flex: 1;
   overflow: hidden;
   z-index: 2;
   img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
   }
`;

export const Hide = styled.div`
   overflow: hidden;
`;
