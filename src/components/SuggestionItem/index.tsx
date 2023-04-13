import { useContext, Dispatch, SetStateAction } from "react";

import { AutocompleteInputContext } from "components/AutocompleteInput/context";

const handleClick =
  (setSearchValue: Dispatch<SetStateAction<string>>, title: string) => () => {
    setSearchValue(title);
  };

interface SuggestionItemProps {
  title: string;
  className: string;
}

const SuggestionItem = ({ title, className }: SuggestionItemProps) => {
  const [searchValue, setSearchValue] = useContext(AutocompleteInputContext);

  return (
    <li onClick={handleClick(setSearchValue, title)} className={className}>
      <strong>{searchValue}</strong>
      {title.replace(new RegExp(`^${searchValue}`), "")}
    </li>
  );
};

export default SuggestionItem;
