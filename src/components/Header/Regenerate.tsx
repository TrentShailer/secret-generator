import { Button, Flex } from "@chakra-ui/react";
import React from "preact";
type Props = {
  Regenerate: Function;
};

export default function Regenerate({ Regenerate }: Props) {
  return (
    <Flex alignItems="center">
      <Button w={"264px"} onClick={Regenerate}>
        Regenerate
      </Button>
    </Flex>
  );
}
