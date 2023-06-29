import { useState } from "preact/hooks";
import { Divider, Text } from "@chakra-ui/react";

type Props = {
  secret: string;
};

export default function Secret({ secret }: Props) {
  const [text, setText] = useState(secret);

  const OnClick = () => {
    setText("Copied");
    navigator.clipboard.writeText(secret);
    setTimeout(() => {
      setText(secret);
    }, 1000);
  };

  return (
    <>
      <Text
        onClick={OnClick}
        cursor="pointer"
        lineHeight="4rem"
        textAlign="center"
        fontSize="2xl"
        noOfLines={1}
      >
        {text}
      </Text>
      <Divider />
    </>
  );
}
