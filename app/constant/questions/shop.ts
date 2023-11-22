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
    "باتوجه به مهمانی که آخر هفته برگزار خواهد شد، انتخاب کدام فرد موجب کاهش خرید میشه؟",
  chices: [
    {
      choiceTxt: "از قبل لیست خریدش رو آماده می‌کنه.",
      choiceImg: "/questions/shop/firstQuest/plan.png",
      answer: 1,
    },
    {
      choiceTxt: "هر چه خوشش بیاد رو میخره.",
      choiceImg: "/questions/shop/firstQuest/like.png",
      answer: 0,
    },
    {
      choiceTxt:
        "با اینکه بعضی از وسایل رو اجاره کنه (به جای خریدن) مشکلی نداره.",
      choiceImg: "/questions/shop/firstQuest/barrow.png",
      answer: 1,
    },
  ],
  guide: "استفاده از دوچرخه و خودروی برقی آسیب کمتری به محیط زیست وارد می کند.",
};
export const secondQuest: Question = {
  questionText:
    "کدام گزینه برای رفتن به فروشگاه با توجه به محیط زیست مناسبتر هست؟",
  chices: [
    {
      choiceTxt: "با سرعت کمتری رانندگی می‌کنه.",
      choiceImg: "/questions/shop/secQuest/slow.png",
      answer: 1,
    },
    {
      choiceTxt: " برای زودتر رسیدن به فروشگاه با سرعت بالاتر رانندگی می‌کنه.",
      choiceImg: "/questions/shop/secQuest/fast.png",
      answer: 0,
    },
    {
      choiceTxt: " پیاده به فروشگاه میره.",
      choiceImg: "/questions/shop/secQuest/walk.png",
      answer: 1,
    },
  ],
  guide: "رانندگی با سرعت کمتر و پیاده روی با توجه به محیط زیست مناسب تر است.",
};
export const thirdQuest: Question = {
  questionText:
    "برای رفتن به فروشگاه با ماشین شخصی انتخاب کدام مسیر آسیب کمتری به محیط‌ زیست وارد می‌کنه؟",
  chices: [
    {
      choiceTxt: "کوتاه ترین مسیر را انتخاب می‌کنه.",
      choiceImg: "/questions/shop/thirdQuest/closePass.png",
      answer: 1,
    },
    {
      choiceTxt: " بدون توجه به طول مسیر از رانندگی لذت می‌بره.",
      choiceImg: "/questions/shop/thirdQuest/farPass.png",
      answer: 0,
    },
    {
      choiceTxt: "از فروشگاه های نزدیک خانه خرید می کنه.",
      choiceImg: "/questions/shop/thirdQuest/nearPass.png",
      answer: 1,
    },
  ],
  guide:
    "خرید از فروشگاه های نزدیک خانه و انتخاب کوتاه ترین مسیر آسیب کمتری به محیط زیست وارد می کند.",
};
export const forthQuest: Question = {
  questionText:
    "بهترین روش برای رفتن به فروشگاه همراه با پدربزرگ خود کدام است؟",
  chices: [
    {
      choiceTxt: "با استفاده از خودروی پدربزرگ به فروشگاه میره.",
      choiceImg: "/questions/shop/forthQuest/car.png",
      answer: 0,
    },
    {
      choiceTxt: " با اتوبوس به فروشگاه میره.",
      choiceImg: "/questions/shop/forthQuest/bus.png",
      answer: 1,
    },
    {
      choiceTxt: "با استفاده از دوچرخه اشتراکی (بیدود) به فروشگاه میره.",
      choiceImg: "/questions/shop/forthQuest/bike.png",
      answer: 1,
    },
  ],
  guide:
    "استفاده از وسایل حمل و نقل عمومی و دوچرخه اشتراکی بهترین روش رفتن به فروشگاه است. ",
};
