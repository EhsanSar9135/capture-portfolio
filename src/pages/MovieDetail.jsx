import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "../movieState";
// Import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
   const history = useHistory();
   const url = history.location.pathname;
   const [movies, setMovies] = useState(MovieState);
   const [movie, setMovie] = useState(null);

   //UseEffect
   useEffect(() => {
      const currentMovie = movies.filter(
         (stateMovie) => stateMovie.url === url
      );
      setMovie(currentMovie[0]);
   }, [movies, url]);
   return (
      <>
         {movie && (
            <Details
               variants={pageAnimation}
               initial="hidden"
               animate="show"
               exit="exit"
            >
               <HeadLine>
                  <h2>{movie.title}</h2>
                  <img src={movie.mainImg} alt="movie" />
               </HeadLine>
               <Awards>
                  {movie.awards.map((award) => {
                     const { title, description } = award;
                     return (
                        <Award
                           title={title}
                           description={description}
                           key={title}
                        />
                     );
                  })}
               </Awards>
               <ImageDisplay>
                  <img src={movie.secondaryImg} alt="movie" />
               </ImageDisplay>
            </Details>
         )}
      </>
   );
};

const Details = styled(motion.section)`
   color: #fff;
`;

const HeadLine = styled.div`
   min-height: 90vh;
   padding-top: 20vh;
   position: relative;
   h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
   }
   img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`;

const Awards = styled.div`
   min-height: 80vh;
   margin: 4rem 8rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
   @media (max-width: 1500px) {
      display: block;
      margin: 1.5rem;
   }
`;

const StyledAward = styled.section`
   padding: 2rem;
   h3 {
      font-size: 1.5rem;
   }
   .line {
      width: 100%;
      background: #23d997;
      height: 0.2rem;
      margin: 1rem 0;
   }
   p {
      padding: 2rem 0;
   }
`;

const ImageDisplay = styled.div`
   min-height: 50vh;
   img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
   }
`;

// Award Component
const Award = ({ title, description }) => {
   return (
      <StyledAward>
         <h3>{title}</h3>
         <div className="line"></div>
         <p>{description}</p>
      </StyledAward>
   );
};

export default MovieDetail;
