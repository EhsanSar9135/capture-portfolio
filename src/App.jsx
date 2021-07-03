import React from "react";
//Import Nav
import Nav from "./components/Nav";
// Import Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Import React-Router
import { Route, Switch } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Nav />
         <Switch>
            <Route path="/" exact component={AboutUs} />
            <Route path="/work" exact component={OurWork} />
            <Route path="/work/:id" exact component={MovieDetail} />
            <Route path="/contact" exact component={ContactUs} />
         </Switch>
      </>
   );
};

export default App;
