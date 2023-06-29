import { Box, Divider } from "@chakra-ui/react";
import React from "preact";
import Secret from "./Body/Secret";

type Props = {
  secrets: string[];
};

export default function Body({ secrets }: Props) {
  return (
    <Box pt={8}>
      <Divider />
      {secrets.map((secret) => (
        <Secret key={secret} secret={secret} />
      ))}
    </Box>
  );
}
