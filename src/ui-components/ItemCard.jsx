/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Todo } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, CheckboxField, Flex, Text } from "@aws-amplify/ui-react";
export default function ItemCard(props) {
  const { todo, overrides, ...rest } = props;
  const [checkboxFieldChecked, setCheckboxFieldChecked] =
    useStateMutationAction(false);
  const checkboxFieldOnChange = useDataStoreUpdateAction({
    fields: {
      completed: checkboxFieldChecked,
      description: "todo.description",
      name: "todo.name",
    },
    id: todo?.id,
    model: Todo,
    schema: schema,
  });
  const textContentOnClick = useNavigateAction({
    type: "url",
    url: `${"/update/"}${todo?.id}`,
  });
  const deleteButtonOnClick = useDataStoreDeleteAction({
    id: todo?.id,
    model: Todo,
    schema: schema,
  });
  useEffect(() => {
    if (
      checkboxFieldChecked === false &&
      todo !== undefined &&
      todo?.completed !== undefined
    )
      setCheckboxFieldChecked(todo?.completed);
  }, [todo]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ItemCard")}
      {...rest}
    >
      <Flex
        gap="14px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <CheckboxField
          shrink="0"
          label=""
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          checked={checkboxFieldChecked}
          value={todo?.completed}
          onChange={() => {
            checkboxFieldOnChange();
          }}
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            textContentOnClick();
          }}
          {...getOverrideProps(overrides, "TextContent")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={todo?.name}
            {...getOverrideProps(overrides, "Name")}
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
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={todo?.description}
            {...getOverrideProps(overrides, "Description")}
          ></Text>
        </Flex>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="✕"
          onClick={() => {
            deleteButtonOnClick();
          }}
          {...getOverrideProps(overrides, "DeleteButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
