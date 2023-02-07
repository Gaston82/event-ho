import { ApiResponseStructure } from "../data/types";
import EventsContext from "../store/contexts/events/EventsContext";
import { useContext, useCallback } from "react";
import { loadEventsActionCreator } from "../store/actions/events/loadEventsActionCreator";

const useApi = () => {
  const { dispatch } = useContext(EventsContext);

  const loadEvents = useCallback(
    async (keyword: string) => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_URL_API}&keyword=${keyword}!`
        );
        const events = (await result.json()) as ApiResponseStructure;
        dispatch(loadEventsActionCreator(events._embedded.events));
      } catch (error: unknown) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  return { loadEvents };
};

export default useApi;
