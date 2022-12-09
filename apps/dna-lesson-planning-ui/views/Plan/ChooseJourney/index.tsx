// Imports
import useSWR from "swr";

// Components
import { Title } from "views/Plan/components";
import { Journey } from "./components";

// Utils
import { fetcher } from "utils";

// Types
import { JourneyType } from "types";

export const ChooseJourney = () => {
  const { data, error } = useSWR("/api/frost/journeys", fetcher);
  // TODO: Create an error page / view
  if (error) return null;
  return (
    <>
      <Title title="choose-journey" subtitle="choose-journey-plan-lesson" />
      <div className={"flex gap-m wrap"}>
        {data?.map((_journey: JourneyType) => (
          <Journey key={_journey.title} journey={_journey} />
        ))}
      </div>
    </>
  );
};
