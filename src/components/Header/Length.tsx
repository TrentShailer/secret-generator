import {
  Button,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  useNumberInput,
} from "@chakra-ui/react";
import React from "preact";
import { StateUpdater, useEffect } from "preact/hooks";

type Props = {
  length: number;
  setLength: StateUpdater<number>;
};

export default function Length({ length, setLength }: Props) {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: 1,
    defaultValue: 64,
    min: 1,
    max: 8096,
    precision: 0,
  });

  useEffect(() => {
    if (valueAsNumber <= 8096 && valueAsNumber >= 1)
      setLength(Math.round(valueAsNumber));
  }, [valueAsNumber]);

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack w={"264px"}>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
}
