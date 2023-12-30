import { Question } from "./questionSchema";

export const fristQuest: Question = {
  questionText:
    "کدوم وسیله ی حمل و نقل برای رفتن به فروشگاه با توجه به محیط زیست مناسبتر هست؟",
  chices: [
    {
      choiceTxt: "با دوچرخه به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/bike.png",
      answer: 1,
    },
    {
      choiceTxt: "با خودروی شخصی به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/car.png",
      answer: 0,
    },
    {
      choiceTxt: "با خودروی برقی به فروشگاه میره.",
      choiceImg: "/questions/transportation/firstQuest/electricCar.png",
      answer: 1,
    },
  ],
  guide: "استفاده از دوچرخه و خودروی برقی آسیب کمتری به محیط زیست وارد می کند.",
};
export const secondQuest: Question = {
  questionText:
    "کدوم گزینه برای رفتن به فروشگاه با توجه به محیط زیست مناسبتر هست؟",
  chices: [
    {
      choiceTxt: "با سرعت کمتری رانندگی می‌کنه.",
      choiceImg: "/questions/transportation/secQuest/slow.png",
      answer: 1,
    },
    {
      choiceTxt: " برای زودتر رسیدن به فروشگاه با سرعت بالاتر رانندگی می‌کنه.",
      choiceImg: "/questions/transportation/secQuest/fast.png",
      answer: 0,
    },
    {
      choiceTxt: " پیاده به فروشگاه میره.",
      choiceImg: "/questions/transportation/secQuest/walk.png",
      answer: 1,
    },
  ],
  guide: "رانندگی با سرعت کمتر و پیاده روی با توجه به محیط زیست مناسب تر است.",
};
export const thirdQuest: Question = {
  questionText:
    "برای رفتن به فروشگاه با ماشین شخصی انتخاب کدوم مسیر آسیب کمتری به محیط‌ زیست وارد می‌کنه؟",
  chices: [
    {
      choiceTxt: "کوتاه ترین مسیر را انتخاب می‌کنه.",
      choiceImg: "/questions/transportation/thirdQuest/closePass.png",
      answer: 1,
    },
    {
      choiceTxt: " بدون توجه به طول مسیر از رانندگی لذت می‌بره.",
      choiceImg: "/questions/transportation/thirdQuest/farPass.png",
      answer: 0,
    },
    {
      choiceTxt: "از فروشگاه های نزدیک خانه خرید می کنه.",
      choiceImg: "/questions/transportation/thirdQuest/nearPass.png",
      answer: 1,
    },
  ],
  guide:
    "خرید از فروشگاه های نزدیک خانه و انتخاب کوتاه ترین مسیر آسیب کمتری به محیط زیست وارد می کند.",
};
export const forthQuest: Question = {
  questionText:
    "بهترین روش برای رفتن به فروشگاه همراه با پدربزرگ خود کدوم هست؟",
  chices: [
    {
      choiceTxt: "با استفاده از خودروی پدربزرگ به فروشگاه میره.",
      choiceImg: "/questions/transportation/forthQuest/car.png",
      answer: 0,
    },
    {
      choiceTxt: " با اتوبوس به فروشگاه میره.",
      choiceImg: "/questions/transportation/forthQuest/bus.png",
      answer: 1,
    },
    {
      choiceTxt: "با استفاده از دوچرخه اشتراکی (بیدود) به فروشگاه میره.",
      choiceImg: "/questions/transportation/forthQuest/bike.png",
      answer: 1,
    },
  ],
  guide:
    "استفاده از وسایل حمل و نقل عمومی و دوچرخه اشتراکی بهترین روش رفتن به فروشگاه است. ",
};
