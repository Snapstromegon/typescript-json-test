import TSON from "typescript-json";

type InputType = {
  hi: string;
  this: number;
  is: { a: { test: boolean } };
};

export const stringify = (input: InputType) => {
  return TSON.stringify<InputType>(input);
};
