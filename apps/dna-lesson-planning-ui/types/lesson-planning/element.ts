export interface GETElement {
  elements: Array<Element>;
}

export interface Element {
  id: string;
  subject: string;
  subjectColour: string;
  title: string;
  duration: number;
}
