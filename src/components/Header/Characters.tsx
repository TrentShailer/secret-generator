import { Box, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import React from "preact";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { Characters as Chars } from "../..";

type Props = {
  characters: Record<Chars, boolean>;
  setCharacters: StateUpdater<Record<Chars, boolean>>;
};

export default function Characters({ characters, setCharacters }: Props) {
  const [lower, setLower] = useState(characters[Chars.lower]);
  const [upper, setUpper] = useState(characters[Chars.upper]);
  const [numbers, setNumbers] = useState(characters[Chars.numbers]);
  const [special, setSpecials] = useState(characters[Chars.specials]);

  useEffect(() => {
    if (!lower && !upper && !numbers && !special) setLower(true);
    setCharacters({
      [Chars.lower]: !lower && !upper && !numbers && !special ? true : lower,
      [Chars.upper]: upper,
      [Chars.numbers]: numbers,
      [Chars.specials]: special,
    });
  }, [lower, upper, numbers, special]);

  return (
    <Box w={"264px"}>
      <FormControl
        h="100%"
        flexWrap="wrap"
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Box>
          <FormLabel htmlFor="lower" mb="0">
            Lower
          </FormLabel>
          <Switch
            size="lg"
            id="lower"
            isChecked={lower}
            onChange={() => setLower(!lower)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="upper" mb="0">
            Upper
          </FormLabel>
          <Switch
            size="lg"
            id="upper"
            isChecked={upper}
            onChange={() => setUpper(!upper)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="numbers" mb="0">
            Nums
          </FormLabel>
          <Switch
            size="lg"
            id="numbers"
            isChecked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="specials" mb="0">
            Specials
          </FormLabel>
          <Switch
            size="lg"
            id="specials"
            isChecked={special}
            onChange={() => setSpecials(!special)}
          />
        </Box>
      </FormControl>
    </Box>
  );
}
