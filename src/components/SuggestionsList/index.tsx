import SuggestionsListItems from "components/SuggestionsListItems";

import { useData } from "./hooks";
import classes from "./index.module.css";

const SuggestionsList = () => {
  const { error, data, isLoading } = useData();

  return (
    <div className={classes.suggestionsList}>
      {isLoading && (
        <span className={classes.suggestionsList__message}>
          Loading items...
        </span>
      )}
      {!isLoading && error && (
        <span className={classes.suggestionsList__message}>
          An error ocurred while fetching the data
        </span>
      )}
      {!isLoading && data && <SuggestionsListItems data={data} />}
    </div>
  );
};

export default SuggestionsList;
