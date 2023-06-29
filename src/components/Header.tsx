import React from "preact";
import { StateUpdater } from "preact/hooks";
import { Characters as Chars } from "..";
import { Flex } from "@chakra-ui/react";
import Regenerate from "./Header/Regenerate";
import Length from "./Header/Length";
import Characters from "./Header/Characters";

type Props = {
  Regenerate: Function;
  length: number;
  setLength: StateUpdater<number>;
  characters: Record<Chars, boolean>;
  setCharacters: StateUpdater<Record<Chars, boolean>>;
};

export default function Header(props: Props) {
  return (
    <Flex wrap="wrap" justifyContent={"space-around"} dir="row" gap={4}>
      <Length length={props.length} setLength={props.setLength} />
      <Regenerate Regenerate={props.Regenerate} />
      <Characters
        characters={props.characters}
        setCharacters={props.setCharacters}
      />
    </Flex>
  );
}
