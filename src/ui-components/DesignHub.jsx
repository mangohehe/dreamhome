/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import DHDescription from "./DHDescription";
import CreateProject from "./CreateProject";
import { Flex } from "@aws-amplify/ui-react";
export default function DesignHub(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="1732px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 135px 0px 135px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "DesignHub")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1719px"
        height="1137px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 37323")}
      >
        <DHDescription
          display="flex"
          gap="0"
          direction="row"
          width="1719px"
          height="580px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DHDescription")}
        ></DHDescription>
        <CreateProject
          display="flex"
          gap="0"
          direction="column"
          width="1719px"
          height="557px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "CreateProject")}
        ></CreateProject>
      </Flex>
    </Flex>
  );
}
