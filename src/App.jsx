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

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Nav />
         <Switch>
            <Route path="/" exact component={AboutUs} />
            <Route path="/work" component={OurWork} />
            <Route path="/contact" component={ContactUs} />
         </Switch>
      </>
   );
};

export default App;
