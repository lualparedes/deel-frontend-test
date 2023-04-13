import { GetDataResult } from "./types";

export const getData = async (url: string): Promise<GetDataResult> => {
  try {
    const res = await fetch(url);
    return { data: await res.json() };
  } catch (error) {
    return { error: String(error) };
  }
  return;
};
