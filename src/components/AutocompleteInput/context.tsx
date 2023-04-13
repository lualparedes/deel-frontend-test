import { createContext, ReactNode } from "react";

import { AutocompleteInputContextValue } from "./types";

const INITIAL_CONTEXT = ["", () => {}] as AutocompleteInputContextValue;

export const AutocompleteInputContext =
  createContext<AutocompleteInputContextValue>(INITIAL_CONTEXT);

interface AutocompleteInputProviderProps {
  children: ReactNode;
  value: AutocompleteInputContextValue;
}

export const AutocompleteInputProvider = ({
  children,
  value,
}: AutocompleteInputProviderProps) => {
  return (
    <AutocompleteInputContext.Provider value={value}>
      {children}
    </AutocompleteInputContext.Provider>
  );
};
