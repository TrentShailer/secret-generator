import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import theme from "./theme";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export enum Characters {
  lower,
  upper,
  numbers,
  specials,
}

const CharList: Record<Characters, string> = {
  [Characters.lower]: "abcdefghijklmnopqrstuvwxyz",
  [Characters.upper]: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  [Characters.numbers]: "0123456789",
  [Characters.specials]: "!@#$%^&*()_-+=[]{}|/?.>,<",
};

const GenerateSecret = (
  length: number,
  characters: Record<Characters, boolean>
) => {
  let charList = "";
  if (characters[Characters.lower]) charList += CharList[Characters.lower];
  if (characters[Characters.upper]) charList += CharList[Characters.upper];
  if (characters[Characters.numbers]) charList += CharList[Characters.numbers];
  if (characters[Characters.specials])
    charList += CharList[Characters.specials];

  let secret = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charList.length);
    secret += charList[index];
  }

  return secret;
};

export function App() {
  const [length, setLength] = useState(64);
  const [characters, setCharacters] = useState<Record<Characters, boolean>>({
    [Characters.lower]: true,
    [Characters.upper]: true,
    [Characters.numbers]: true,
    [Characters.specials]: false,
  });

  const [secrets, setSecrets] = useState<string[]>([]);

  useEffect(() => {
    Regenerate();
  }, []);

  useEffect(() => {
    Regenerate();
  }, [length, characters]);

  const Regenerate = () => {
    const secrets: string[] = [];
    for (let i = 0; i < 5; i++) {
      secrets.push(GenerateSecret(length, characters));
    }

    setSecrets(secrets);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Box pt={4} minH="calc(100vh - 60px)">
          <Header
            Regenerate={Regenerate}
            length={length}
            setLength={setLength}
            characters={characters}
            setCharacters={setCharacters}
          />
          <Body secrets={secrets} />
        </Box>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

render(<App />, document.getElementById("app"));
