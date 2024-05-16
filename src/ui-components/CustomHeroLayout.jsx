/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import HeroFeatureList from "./HeroFeatureList";
export default function CustomHeroLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1728px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "CustomHeroLayout")}
      {...rest}
    >
      <Flex
        gap="30px"
        direction="column"
        width="874px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="80px 50px 33px 80px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Text
            fontFamily="Inter"
            fontSize="43px"
            fontWeight="400"
            color="rgba(230,238,254,1)"
            lineHeight="50px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="221px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Gateway to Semiconductor and  &#xA;IC Design Innovations"
            {...getOverrideProps(overrides, "Heading")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(230,238,254,1)"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="All-In-One AI Based IC  Design Platform"
            {...getOverrideProps(overrides, "Body")}
          ></Text>
        </Flex>
        <Button
          colorTheme="info" color="white"
          size="large"
          loadingText=""
          onClick={() => window.location.href = 'https://fe.d3a7f3vn13kcxk.amplifyapp.com/'}
        >
          🚀   Try Free
        </Button>
      </Flex>
      <HeroFeatureList
        display="flex"
        gap="50px"
        direction="column"
        width="726px"
        height="531px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "HeroFeatureList")}
      ></HeroFeatureList>
    </Flex>
  );
}
