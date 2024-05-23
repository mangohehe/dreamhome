import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AIStudio, CTASection, NavBarHeader, CustomHeroLayout, YouTubePlayerWithThumbnail, IntroductionSection, IntroductionSection2, ClientTestimonials,FreeQuote, FeaturedProjects } from "./ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";
import studioTheme from './ui-components/studioTheme';


const MainContent = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  return (
    <>
      <CustomHeroLayout width="80%" navigate={navigate} />
      <IntroductionSection width="60%" height="auto" />
      <YouTubePlayerWithThumbnail videoId="aGlx4dZI9Y0" width="50%" />
      <FeaturedProjects />
      <IntroductionSection2 width="60%" height="auto" />
      <ClientTestimonials width="80%" height="auto" />
    </>
  );
};

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={studioTheme}>
        <div className="app" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center" }}>
          <NavBarHeader width="60%" />
          <Routes>
            <Route path="/free-quote" element={<FreeQuote />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};
