export interface Question {
  questionText: string;
  chices: {
    choiceTxt: string;
    choiceImg: string;
    answer: number;
  }[];
  guide: string;
}
