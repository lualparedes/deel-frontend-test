import { useContext } from "react";

import { AutocompleteInputContext } from "components/AutocompleteInput/context";
import SuggestionItem from "components/SuggestionItem";

import { getPostTitles } from "./utils";
import classes from "./index.module.css";

interface SuggestionsListItemsProps {
  data: Record<string, any>;
}

const SuggestionsListItems = ({ data }: SuggestionsListItemsProps) => {
  const [searchValue] = useContext(AutocompleteInputContext);

  const postTitles = getPostTitles(data).filter((title: string) =>
    searchValue === "" ? title : title.startsWith(searchValue)
  );

  return (
    <>
      {postTitles?.length > 0 ? (
        <ul className={classes.suggestionsListItems}>
          {postTitles.map((title: string, key: number) => {
            return searchValue === "" ? (
              <li key={key} className={classes.suggestionsListItems__item}>
                {title}
              </li>
            ) : (
              <SuggestionItem
                title={title}
                key={key}
                className={classes.suggestionsListItems__item}
              />
            );
          })}
        </ul>
      ) : (
        <span className={classes.message}>No items match this search</span>
      )}
    </>
  );
};

export default SuggestionsListItems;
