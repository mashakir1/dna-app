import { NextApiHandler } from "next";

// Types
import { Element, GETElement } from "types";

const mockElements: Array<Element> = [
  {
    id: "1",
    subject: "Maths",
    subjectColour: "blue",
    title: "Dank division",
    duration: 20
  },
  {
    id: "2",
    subject: "Maths",
    subjectColour: "blue",
    title: "Mental multiplication mmmmm mmmm mmm  mmmmm m m m m m",
    duration: 20
  },
  {
    id: "3",
    subject: "Maths",
    subjectColour: "blue",
    title: "Interesting integration",
    duration: 20
  },
  {
    id: "4",
    subject: "Science",
    subjectColour: "aquamarine",
    title: "Bizarre biology",
    duration: 40
  },
  {
    id: "5",
    subject: "Science",
    subjectColour: "aquamarine",
    title: "Crazy chemistry",
    duration: 40
  },
  {
    id: "6",
    subject: "History",
    subjectColour: "blueviolet",
    title: "Rad romans",
    duration: 35
  },
  {
    id: "7",
    subject: "History",
    subjectColour: "blueviolet",
    title: "Great greeks",
    duration: 35
  }
];

const elementHandler: NextApiHandler<GETElement> = (_, response) => {
  response.status(200).json({ elements: mockElements });
};

export default elementHandler;
