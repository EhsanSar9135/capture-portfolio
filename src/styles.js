import styled from "styled-components";

export const About = styled.section`
   min-height: 90vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 4rem 8rem;
   color: #fff;
`;

export const Description = styled.div`
   flex: 1;
   padding-right: 5rem;
   z-index: 2;
   h2 {
      font-weight: lighter;
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
