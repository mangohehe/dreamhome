/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateProject(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
    gap="0"
    direction="column"
    maxWidth="80%"  // Adjust the maxWidth based on your preference
    margin="0 auto" // Center the component horizontally
    justifyContent="center" // Center the component vertically
    alignItems="center"
    position="relative"
    padding="80px 20px" // Adjust padding as needed
    backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateProject")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 4113890602")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
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
              children="Project Details"
              {...getOverrideProps(overrides, "Project Details")}
            ></Text>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 426")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Project Name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField3890607")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Technology"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField3890608")}
              ></TextField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 427")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Block Name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField3890610")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Design Name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField3890611")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 4113890612")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Next Step"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
        <Image
          width="506px"
          height="305px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://www.excelr.com/uploads/blog/EDA.jpg"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="452px"
        height="68px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SliderField385410283")}
      >
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "labelWrapper")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children="Steps"
            {...getOverrideProps(overrides, "label")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4"
            {...getOverrideProps(overrides, "defaultValue")}
          ></Text>
        </Flex>
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SliderField385410288")}
        >
          <View
            width="452px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 209")}
          >
            <View
              width="452px"
              height="6px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7px"
              left="0%"
              right="0%"
              borderRadius="6px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(239,240,240,1)"
              {...getOverrideProps(overrides, "track")}
            ></View>
            <View
              width="100px"
              height="6px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7px"
              left="0.66%"
              right="77.21%"
              borderRadius="6px 0px 0px 6px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(4,52,149,1)"
              {...getOverrideProps(overrides, "range")}
            ></View>
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M19 10C19 14.9706 14.9706 19 10 19L10 21C16.0751 21 21 16.0751 21 10L19 10ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM1 10C1 5.02944 5.02944 1 10 1L10 -1C3.92487 -1 -1 3.92487 -1 10L1 10ZM10 1C14.9706 1 19 5.02944 19 10L21 10C21 3.92487 16.0751 -1 10 -1L10 1Z",
                  stroke: "rgba(174,179,183,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
                {
                  d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="calc(50% - 10px - 116px)"
              {...getOverrideProps(overrides, "thumb")}
            ></Icon>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
