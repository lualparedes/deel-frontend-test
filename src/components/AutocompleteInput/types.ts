import { Dispatch, SetStateAction } from "react";

export type AutocompleteInputContextValue = [
  string,
  Dispatch<SetStateAction<string>>
];
