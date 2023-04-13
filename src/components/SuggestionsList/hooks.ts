import { useState, useEffect } from "react";

import { API_URL, INITIAL_DATA, INITIAL_ERROR } from "./constants";
import { GetDataResult } from "./types";
import { getData } from "./utils";

export const useData = (): GetDataResult => {
  const [data, setData] = useState<Record<string, any>>(INITIAL_DATA);
  const [error, setError] = useState(INITIAL_ERROR);

  useEffect(() => {
    getData(API_URL).then(({ error, data }) => {
      if (data) {
        setData(data);
        setError(INITIAL_ERROR);
      }
      if (error) {
        setError(error);
        setData(INITIAL_DATA);
      }
    });
  }, []);

  return {
    data,
    error,
    isLoading: error === INITIAL_ERROR && data === INITIAL_DATA,
  };
};
