import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import styles from './styles/CustomHeroLayout.module.css'; // Import the CSS module
import buttonStyles from './styles/Button.module.css'; // Import the button styles
import dreamhome from '../../public/imgs/dreamhome.jpeg';

export default function CustomHeroLayout({ width = "100%", navigate, ...props }) {
  const { overrides, ...rest } = props;

  const navigateToFreeQuote = () => {
    navigate('/free-quote');
  };

  return (
    <Flex
      className={styles.customHeroLayout}
      style={{
        backgroundImage: `url(${dreamhome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: width || '100%',
        height: '50vh'
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
        gap="20px"
        direction="column"
        width="80%"
        maxWidth="500px" // Ensure a maximum width
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="20px"
        {...getOverrideProps(overrides, "HeroContent")}
      >
        <Text
          className={styles.heading}
          fontFamily="Inter"
          fontSize="auto"
          fontWeight="400"
          color="rgba(230, 238, 254, 1)"
          lineHeight="60px"
          textAlign="center"
          display="flex"
          {...getOverrideProps(overrides, "Heading")}
        >
          YOUR DREAM HOME <br /> AWAITS YOU
        </Text>
        <Button
          className={buttonStyles.herolayout_button}
          style={{ marginTop: '0px' }}
          alignContent="center"
          onClick={navigateToFreeQuote} // Navigate to Free Quote page
        >
          FREE QUOTE 
        </Button>
      </Flex>
    </Flex>
  );
}
