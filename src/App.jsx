import React from "react";
//Import Components
import Nav from "./components/Nav";
// Import Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Import React-Router
import { Route, Switch, useLocation } from "react-router-dom";
// Import Animation
import { AnimatePresence } from "framer-motion";

const App = () => {
   const location = useLocation();
   return (
      <>
         <GlobalStyle />
         <Nav />
         <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
               <Route path="/" exact component={AboutUs} />
               <Route path="/work" exact component={OurWork} />
               <Route path="/work/:id" exact component={MovieDetail} />
               <Route path="/contact" exact component={ContactUs} />
            </Switch>
         </AnimatePresence>
      </>
   );
};

export default App;
