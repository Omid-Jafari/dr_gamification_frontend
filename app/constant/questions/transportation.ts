export interface Question {
  questionText: string;
  chices: {
    choiceTxt: string;
    choiceImg: string;
    answer: number;
  }[];
  guide: string;
}

export const fristQuest: Question = {
  questionText:
    "کدام گزینه برای رفتن به فروشگاه با توجه به محیط زیست مناسبتر است؟",
  chices: [
    {
      choiceTxt: "با دوچرخه به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/bike.png",
      answer: 0,
    },
    {
      choiceTxt: "با خودروی شخصی به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/car.png",
      answer: 0,
    },
    {
      choiceTxt: "با خودروی برقی به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/electricCar.png",
      answer: 0,
    },
  ],
  guide: "استفاده از دوچرخه و خودروی برقی آسیب کمتری به محیط زیست وارد می کند.",
};
