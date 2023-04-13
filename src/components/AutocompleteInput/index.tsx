import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import SuggestionsList from "components/SuggestionsList";

import { AutocompleteInputProvider } from "./context";
import { AutocompleteInputContextValue } from "./types";
import classes from "./index.module.css";

const handleChange =
  (setValue: Dispatch<SetStateAction<string>>) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

const AutocompleteInput = () => {
  const [value, setValue] = useState("");

  return (
    <AutocompleteInputProvider
      value={[value, setValue] as AutocompleteInputContextValue}
    >
      <input
        value={value}
        onChange={handleChange(setValue)}
        className={`${classes.input}${
          value !== "" ? ` ${classes.input__searching}` : ""
        }`}
        placeholder="Search..."
      />
      {value !== "" && <SuggestionsList />}
    </AutocompleteInputProvider>
  );
};

export default AutocompleteInput;
