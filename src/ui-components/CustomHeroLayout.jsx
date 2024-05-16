import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import './styles/CustomHeroLayout.css'; // Import the CSS file

export default function CustomHeroLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      className="custom-hero-layout"
      style={{ backgroundImage: `url('http://127.0.0.1:5500/public/imgs/dreamhome.jpeg')` }} // Relative path for the background image
      gap="0"
      direction="row"
      width="100%"
      height="unset"  // Ensure the component takes the full height
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px"
      {...getOverrideProps(overrides, "CustomHeroLayout")}
      {...rest}
    >
      <Flex
        className="left"
        gap="30px"
        direction="column"
        width="50%"
        height="unset"
        justifyContent="center"
        alignItems="center" /* Center items horizontally */
        overflow="hidden"
        position="relative"
        padding="80px 50px 33px 80px"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          className="hero-message"
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center" /* Center items horizontally */
          position="relative"
          padding="0px"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Text
            className="heading"
            fontFamily="Inter"
            fontSize="30px"
            fontWeight="400"
            color="rgba(230,238,254,1)"
            lineHeight="50px"
            textAlign="center"
            display="block"
            width="unset"
            height="unset"
            padding="0px"
            whiteSpace="pre-wrap"
            children="YOUR DREAM HOME &#xA; AWAITS YOU"
            {...getOverrideProps(overrides, "Heading")}
          />
        </Flex>
        <Button
          className="button"
          colorTheme="info" 
          color="white"
          justifyContent="center"
          size="medium"
          loadingText=""
          onClick={() => window.location.href = 'https://fe.d3a7f3vn13kcxk.amplifyapp.com/'}
        >
          GET FREE BUILD CONSULTATION
        </Button>
      </Flex>
    </Flex>
  );
}
