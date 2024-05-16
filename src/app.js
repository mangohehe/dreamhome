import { AIStudio, CTASection, NavBarHeader, CustomHeroLayout, DHDescription, CreateProject, AIStudioFeatures, MarketingFooter, SocialPostCollection, MessageBar } from "./ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import studioTheme from './ui-components/studioTheme';

export const App = () => {
    return (
        <div className="app"
            style={{ display: "flex", justifyContent: "center" }}
        >
            <ThemeProvider theme={studioTheme}>
                <NavBarHeader width='100%' />
              
            </ThemeProvider>
        </div>
    );
};
