import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import './styles/CustomHeroLayout.css'; // Import the CSS file
import buttonStyles from './styles/Button.module.css'; // Import the CSS file

export default function CustomHeroLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      className="custom-hero-layout"
      style={{ backgroundImage: `url('http://127.0.0.1:5500/public/imgs/dreamhome.jpeg')` }}
      gap="0"
      direction="row"
      width="100%"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px"
      {...getOverrideProps(overrides, "CustomHeroLayout")}
      {...rest}
    >
      <Flex
        className="hero-content"
        gap="50px"  // Increased from 30px to provide more space between elements
        direction="column"
        width="50%"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="80px 50px 33px 80px"
        {...getOverrideProps(overrides, "HeroContent")}
      >
        <Text
          className="heading"
          fontFamily="Inter"
          fontSize="35px"
          fontWeight="400"
          color="rgba(230, 238, 254, 1)"
          lineHeight="50px"
          textAlign="center"
          display="block"
          {...getOverrideProps(overrides, "Heading")}
          children="YOUR DREAM HOME &#xA; AWAITS YOU"
        />
        <Button
          className={buttonStyles.herolayout_button}
          style={{ marginTop: '50px' }}  // Adds margin top directly inline for one-time adjustments
          alignContent="center"  // Corrected from {alignContent} to "center"
          onClick={() => window.location.href = 'https://fe.d3a7f3vn13kcxk.amplifyapp.com/'}
        >
          GET FREE BUILD CONSULTATION
        </Button>
      </Flex>

    </Flex>
  );
}
