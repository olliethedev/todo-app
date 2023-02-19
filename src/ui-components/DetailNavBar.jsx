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
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function DetailNavBar(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DetailNavBar")}
      {...rest}
    >
      <Heading
        shrink="0"
        level="4"
        children="Edit Item"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        shrink="0"
        size="large"
        isDisabled={false}
        variation="link"
        children="Close"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
