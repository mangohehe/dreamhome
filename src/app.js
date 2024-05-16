import { AIStudio, CTASection, NavBarHeader, CustomHeroLayout, DHDescription, CreateProject, AIStudioFeatures, MarketingFooter, SocialPostCollection, MessageBar } from "./ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";
import studioTheme from './ui-components/studioTheme';

export const App = () => {
    return (
        <div className="app"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "flex-start" }}
        >
            <ThemeProvider theme={studioTheme}>
                <NavBarHeader width="100%" />
                <CustomHeroLayout width="100%" />
            </ThemeProvider>
        </div>
    );
};
