/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Text } from "@aws-amplify/ui-react";
export default function EmptyListPlaceholder(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/create" });
  return (
    <Flex
      gap="33px"
      direction="column"
      width="679px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="71px 0px 71px 0px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "EmptyListPlaceholder")}
      {...rest}
    >
      <Heading
        shrink="0"
        level="3"
        children="No Items"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
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
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add a new item to get started"
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Button
        shrink="0"
        size="large"
        isDisabled={false}
        variation="link"
        children="Add Item"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
