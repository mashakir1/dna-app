import { Element } from "types";

export const testElement = {
  subject: "testSubject",
  title: "testTitle",
  subjectColour: "testColour",
  duration: 0
};

export const testElements: Array<Element> = ["testId1", "testId2", "testId3"].map(id => ({
  ...testElement, id
}));
