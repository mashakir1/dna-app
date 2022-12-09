import type { NextApiHandler } from "next";

// Types
import { UnitType } from "types";

const units: Array<UnitType> = [
  { id: "1", title: "Unit 1", subtitle: "Bee the change", overviewLink: "" },
  {
    id: "2",
    title: "Unit 2",
    subtitle: "Getting start with Science",
    overviewLink: ""
  },
  { id: "3", title: "Unit 3", subtitle: "Flowers & Plants", overviewLink: "" }
];

const unitHandler: NextApiHandler = (_, response) => {
  response.status(200).json(units);
};

export default unitHandler;
