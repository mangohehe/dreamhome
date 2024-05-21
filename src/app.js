import { AIStudio, CTASection, NavBarHeader, CustomHeroLayout, DHDescription, CreateProject, AIStudioFeatures, MarketingFooter, SocialPostCollection, MessageBar, YouTubePlayerWithThumbnail, IntroductionSection, IntroductionSection2 } from "./ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";
import studioTheme from './ui-components/studioTheme';

export const App = () => {
    return (
      <div className="app"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center" }}
      >
        <ThemeProvider theme={studioTheme}>
            <NavBarHeader width="100%" />
            <CustomHeroLayout width="80%" />
            <IntroductionSection width="60%" height="auto" />
            <YouTubePlayerWithThumbnail videoId="aGlx4dZI9Y0" width="50%" />
            <IntroductionSection2 width="60%" height="auto" />
        </ThemeProvider>
      </div>
    );
};
