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
                <CustomHeroLayout width='%100' />
                <MessageBar messages />
                <CTASection width='%100' />
                <SocialPostCollection width='100%' />
                <DHDescription width='%100' />
                <CreateProject backgroundColor='{colors.background.tertiary}' />
                <AIStudio width='%100' />
                <AIStudioFeatures width='%100' />
                <MarketingFooter width='%100' />
            </ThemeProvider>
        </div>
    );
};
