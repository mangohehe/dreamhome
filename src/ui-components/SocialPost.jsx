/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function SocialPost(props) {
  const { news, overrides, ...rest } = props;
  const readmoreTwoNineSevenSixSixEightSevenZeroOnClick = useNavigateAction({
    type: "url",
    url: news?.url,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "SocialPost")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="316px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Headline")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
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
              children={news?.translatedTitle}
              {...getOverrideProps(
                overrides,
                "New Amplify Studio gives designers the ability to export UI to React code"
              )}
            ></Text>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={news?.publisher}
                {...getOverrideProps(overrides, "Nikhil S")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={news?.createdAt}
                {...getOverrideProps(overrides, "2nd December 2021")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Article")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="arrow-right"
              {...getOverrideProps(overrides, "MyIcon29766860")}
            ></MyIcon>
            <Text
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={news?.translatedSummary}
              {...getOverrideProps(
                overrides,
                "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Share29766862")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Share"
              {...getOverrideProps(overrides, "Share29766863")}
            ></Text>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="bookmark_border"
              {...getOverrideProps(overrides, "MyIcon29766864")}
            ></MyIcon>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="share"
              {...getOverrideProps(overrides, "MyIcon29766865")}
            ></MyIcon>
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="more_vert"
              {...getOverrideProps(overrides, "MyIcon29766866")}
            ></MyIcon>
          </Flex>
        </Flex>
        <Image
          width="165px"
          height="172px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          src={news?.thumbnail}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Read more29766868")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="arrow-right"
          {...getOverrideProps(overrides, "MyIcon29766869")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Read more"
          onClick={() => {
            readmoreTwoNineSevenSixSixEightSevenZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Read more29766870")}
        ></Text>
      </Flex>
    </Flex>
  );
}
