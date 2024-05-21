import React, { useState } from "react";
import { getOverrideProps } from "./utils";
import LogoWithText from "./LogoWithText";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './studioTheme.js';
import styles from './styles/NavBarHeader.module.css';
import button_styles from './styles/Button.module.css';

export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "HOME", href: "#" },
    { text: "SERVICES", href: "#" },
    { text: "PROJECTS", href: "#" },
    { text: "CONTACT", href: "#" }
  ];

  const toggleMenu = () => {
    console.log("Current menu state before toggling:", menuOpen);
    setMenuOpen(!menuOpen);
    console.log("Menu state after toggling:", menuOpen);
  };

  return (
    <Flex
      gap="15px"
      direction="row"
      width="80%"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="visible"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05, 0.1, 0.15, 0.15)"
      padding="16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      className={styles.navbarHeader}
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="row"
        width="auto"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px"
        className={styles.navbarLogoSection}
        {...getOverrideProps(overrides, "LogoSection")}
      >
        <LogoWithText
          width="127.88px"
          height="18.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px"
          color="neutral"
          {...getOverrideProps(overrides, "LogoWithText")}
        />
      </Flex>

      <Flex
        className={styles.navbarMenuSection}
        gap="32px"
        direction="row"
        alignItems="center"
        flexGrow="1"
        justifyContent="center"
        {...getOverrideProps(overrides, "MenuSection")}
      >
        {menuItems.map((item) => (
          <Button
            className={button_styles.header_button} // Apply default style
            key={item.text}
            {...getOverrideProps(overrides, item.text)}
            variation="link" // This is assuming you want the Amplify link style
            href={item.href}
          >
            {item.text}
          </Button>
        ))}
        <Button
          className={button_styles.header_highlighted_button} // Apply highlighted style
          {...getOverrideProps(overrides, "Button39493467")}
          variation="link" // Again assuming you want the link style
          children="Free Consultation"
        />
      </Flex>

      <Flex
        direction="row"
        gap="8px"
        width="auto"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px"
        className={styles.navbarContactSection}
        {...getOverrideProps(overrides, "ContactSection")}
      >
        <FontAwesomeIcon
          icon={faPhone}
          size="lg"
          color="rgba(255,0,0,1)"
          {...getOverrideProps(overrides, "PhoneIcon")}
        />
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="inline" // Changed from block to inline
          // Removed direction property as it's not applicable here
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px"
          whiteSpace="pre-wrap"
          children="(123)-456-7890"
          {...getOverrideProps(overrides, "PhoneNumber")}
        />
      </Flex>

      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        size="lg"
        color="rgba(13,26,38,1)"
        className={styles.navbarMenuToggle}
        onClick={toggleMenu}
      />
      {menuOpen && (
        <Flex
          className={styles.navbarDropdownMenu}
          direction="column"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="100%"
          right="0"
          backgroundColor="rgba(255, 255, 255, 1)"
          boxShadow="0px 2px 6px rgba(0.05, 0.1, 0.15, 0.15)"
          padding="16px"
          zIndex="100"
        >
          {menuItems.map((item) => (
            <Button
              className={button_styles.header_button} // Apply the general button style
              key={item.text}
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="8px 0"
              whiteSpace="pre-wrap"
              variation="link"
              href={item.href}
              {...getOverrideProps(overrides, item.text)}
            >
              {item.text}
            </Button>
          ))}
          <Button
            className={button_styles.header_highlighted_button} // Apply highlighted style for "Free Consultation"
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled="false"
            variation="default"
            children="Free Consultation"
            {...getOverrideProps(overrides, "Button39493467")}
          />
        </Flex>
      )}
    </Flex>
  );
}
