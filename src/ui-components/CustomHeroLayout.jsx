import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import styles from './styles/CustomHeroLayout.module.css'; // Import the CSS module
import buttonStyles from './styles/Button.module.css'; // Import the button styles

export default function CustomHeroLayout({ width = "100%", ...props }) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      className={styles.customHeroLayout}
      style={{ 
        backgroundImage: `url('http://127.0.0.1:5500/public/imgs/dreamhome.jpeg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: width || '100%', // Allow dynamic width with a fallback to 100%
        height: '40vh' // Adjust height as needed
      }}
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px"
      {...getOverrideProps(overrides, "CustomHeroLayout")}
      {...rest}
    >
      <Flex
        className={styles.heroContent}
        gap="50px"
        direction="column"
        width="100%"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="80px 50px 33px 80px"
        {...getOverrideProps(overrides, "HeroContent")}
      >
        <Text
          className={styles.heading}
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
          style={{ marginTop: '50px' }}
          alignContent="center"
          onClick={() => window.location.href = 'https://fe.d3a7f3vn13kcxk.amplifyapp.com/'}
        >
          GET FREE BUILD CONSULTATION
        </Button>
      </Flex>
    </Flex>
  );
}
