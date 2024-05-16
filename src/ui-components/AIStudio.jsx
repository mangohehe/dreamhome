/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function AIStudio(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="66px"
      direction="column"
      width="1786px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="85px 0px 85px 0px"
      backgroundColor="rgba(227,227,228,1)"
      {...getOverrideProps(overrides, "AIStudio")}
      {...rest}
    >
      <Flex
        gap="66px"
        direction="column"
        width="unset"
        height="212px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AIStudio/description")}
      >
        <Text
          fontFamily="DM Sans"
          fontSize="48px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="62.496002197265625px"
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
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ChipNexus AI Studio"
          {...getOverrideProps(overrides, "ChipNexus AI Studio")}
        ></Text>
        <Text
          fontFamily="DM Sans"
          fontSize="32px"
          fontWeight="700"
          color="rgba(52,45,45,1)"
          lineHeight="41.66400146484375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1004px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="An Innovation Engine, harnessing smart circuits for chip optimization and serving as a Future Forecaster"
          {...getOverrideProps(
            overrides,
            "An Innovation Engine, harnessing smart circuits for chip optimization and serving as a Future Forecaster"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="278px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="5px SOLID rgba(32,31,32,1)"
        padding="30px 49px 30px 49px"
        backgroundColor="rgba(217,217,217,0)"
        {...getOverrideProps(overrides, "AIStudio/learnmore")}
      >
        <Text
          fontFamily="DM Sans"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="41.66400146484375px"
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
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Learn More"
          {...getOverrideProps(overrides, "Learn More")}
        ></Text>
      </Flex>
    </Flex>
  );
}
