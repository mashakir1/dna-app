import type { NextApiHandler } from "next";

// Types
import { JourneyType } from "types";

const journeys: Array<JourneyType> = [
  {
    id: "1",
    unit: "Unit 1",
    title: "Journey 1",
    description: "What is a bee's favourite part of the plant?",
    overviewLink: ""
  },
  {
    id: "2",
    unit: "Unit 1",
    title: "Journey 2",
    description: "What is a bee's favourite part of the plant?",
    overviewLink: ""
  },
  {
    id: "3",
    unit: "Unit 1",
    title: "Journey 3",
    description: "What is a bee's favourite part of the plant?",
    overviewLink: ""
  },
  {
    id: "4",
    unit: "Unit 1",
    title: "Journey 4",
    description: "What is a bee's favourite part of the plant?",
    overviewLink: ""
  },
  {
    id: "5",
    unit: "Unit 1",
    title: "Journey 5",
    description: "What is a bee's favourite part of the plant?",
    overviewLink: ""
  }
];

const journeyHandler: NextApiHandler = (_, response) => {
  response.status(200).json(journeys);
};

export default journeyHandler;
