import React from "react";
// Import Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
// Import Pages
import AboutUs from "./pages/AboutUs";

const App = () => {
   return (
      <>
         <GlobalStyle />
         <Nav />
         <AboutUs />
      </>
   );
};

export default App;
