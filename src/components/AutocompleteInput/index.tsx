import { Dispatch, SetStateAction, useState } from "react";

import SuggestionsList from "components/SuggestionsList";

import { AutocompleteInputProvider } from "./context";
import classes from "./index.module.css";

const handleChange =
  (setValue: Dispatch<SetStateAction<string>>) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

const AutocompleteInput = ({}: AutocompleteInputProps) => {
  const [value, setValue] = useState("");

  return (
    <AutocompleteInputProvider value={[value, setValue]}>
      <input
        value={value}
        onChange={handleChange(setValue)}
        className={`${classes.input}${
          value !== "" ? ` ${classes.input__searching}` : ""
        }`}
        placeholder="Search..."
      />
      {value !== "" && <SuggestionsList value={value} />}
    </AutocompleteInputProvider>
  );
};

export default AutocompleteInput;
