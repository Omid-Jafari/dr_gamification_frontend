import { Question } from "./questionSchema";

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
  guide:
    " آماده کردن لیست خرید از قبل  و اجاره‌ی وسایل می‌تواند به کاهش خرید کمک کنه.",
};
export const secondQuest: Question = {
  questionText:
    "کدام گزینه برای رفتن به فروشگاه با توجه به محیط زیست مناسبتر هست؟",
  chices: [
    {
      choiceTxt: "در همان لحظه برای خرید شیر به فروشگاه میره.",
      choiceImg: "/questions/shop/secQuest/moment.png",
      answer: 0,
    },
    {
      choiceTxt: "شیر رو به لیست خرید هفتگی اضافه می‌کنه.",
      choiceImg: "/questions/shop/secQuest/plan.png",
      answer: 1,
    },
    {
      choiceTxt: "  مصرف شیر رو کاهش میده.",
      choiceImg: "/questions/shop/secQuest/low.png",
      answer: 1,
    },
  ],
  guide:
    "برنامه‌ريزي براي خريد مانند تهیه‌ي يك ليست خريد هفتگي و كاهش مصرف مي‌تواند به محيط‌زيست كمك كنه.",
};
export const thirdQuest: Question = {
  questionText: "موقع خريد، ... .",
  chices: [
    {
      choiceTxt: "يك كيسه پارچه‌اي به همراه داره.",
      choiceImg: "/questions/shop/thirdQuest/basket.png",
      answer: 1,
    },
    {
      choiceTxt: "از خود فروشنده کیسه پلاستیکی می‌گیره.",
      choiceImg: "/questions/shop/thirdQuest/nilon.png",
      answer: 0,
    },
    {
      choiceTxt: "اگر خرید کم باشه کیسه پلاستیکی نمی‌گیره.",
      choiceImg: "/questions/shop/thirdQuest/none.png",
      answer: 1,
    },
  ],
  guide:
    "در هنگام خرید توجه به بسته‌بندی اهمیت داره برای کمک به محیط زیست از کیسه‌های چند بار مصرف (کیسه‌های پارچه‌ای) استفاده شود و مصرف کیسه‌های پلاستیکی را کاهش دهید . ",
};
export const forthQuest: Question = {
  questionText: "موقع خرید کادو تولد، ... .",
  chices: [
    {
      choiceTxt: "محصولاتی با بسته ‌بندی ساده رو انتخاب ‌می‌کنه.",
      choiceImg: "/questions/shop/forthQuest/simple.png",
      answer: 1,
    },
    {
      choiceTxt: "محصولات با بسته‌ بندی بازیافتی رو انتخاب می‌کنه.",
      choiceImg: "/questions/shop/forthQuest/recycle.png",
      answer: 1,
    },
    {
      choiceTxt: "محصولات با بسته ‌بندی شیک رو انتخاب می‌کنه.",
      choiceImg: "/questions/shop/forthQuest/chick.png",
      answer: 0,
    },
  ],
  guide:
    "در هنگام خرید توجه به بسته‌بندی اهمیت داره برای کمک به محیط زیست محصولات دارای بسته‌بندی ساده و بازیافتی رو انتخاب کنید. ",
};
export const fifthQuest: Question = {
  questionText: "سه مدل کفش در فروشگاه وجود داره، ... .",
  chices: [
    {
      choiceTxt:
        "کفشی با برچسب سبز که در تولید آن از مواد بازیافت‌ شده استفاده ‌شده رو میخره.",
      choiceImg: "/questions/shop/fifthQuest/recycle.png",
      answer: 1,
    },
    {
      choiceTxt: " یک جفت کفش شیک چرم میخره.",
      choiceImg: "/questions/shop/fifthQuest/leather.png",
      answer: 0,
    },
    {
      choiceTxt:
        " اگر بدونه برای محیط ‌زیست مفیده حاضره یک جفت کفش دست دوم بخره.",
      choiceImg: "/questions/shop/fifthQuest/secondHand.png",
      answer: 1,
    },
  ],
  guide:
    "خرید کفش با برچسب سبز و ساخته شده با مواد بازیافتی و خرید کفش دست دوم با توجه به محیط‌زیست مناسبتر هست.",
};
export const sixthQuest: Question = {
  questionText: "در هنگام خرید لامپ برای خانه انتخاب ... .",
  chices: [
    {
      choiceTxt: "چراغ‌ های خورشیدی با مصرف انرژی صفر هست.",
      choiceImg: "/questions/shop/sixthQuest/sun.png",
      answer: 1,
    },
    {
      choiceTxt: " چراغ ‌های معمولی را بدون توجه مصرف انرژی آن هست.",
      choiceImg: "/questions/shop/sixthQuest/lamp.png",
      answer: 0,
    },
    {
      choiceTxt: "چراغ‌ های ال‌ای‌دی با مصرف انرژی کم هست.",
      choiceImg: "/questions/shop/sixthQuest/led.png",
      answer: 1,
    },
  ],
  guide:
    "چراغ‌های خورشیدی و چراغ‌های ال‌ای‌دی مصرف انرژی کمتری دارند که به حفظ محیط‌زیست کمک می‌کنند. ",
};
export const seventhQuest: Question = {
  questionText: "با توجه به اینکه فصل مدارس شروع شده برای خرید کفش ... .",
  chices: [
    {
      choiceTxt: "دو جفت کفش ارزان رو بدون توجه به کیفیت آن میخره.",
      choiceImg: "/questions/shop/seventhQuest/twoPaire.png",
      answer: 1,
    },
    {
      choiceTxt: " یک جفت کفش با کیفیت میخره.",
      choiceImg: "/questions/shop/seventhQuest/good.png",
      answer: 0,
    },
    {
      choiceTxt: "یک جفت کفش مد روز رو میخره.",
      choiceImg: "/questions/shop/seventhQuest/fashion.png",
      answer: 1,
    },
  ],
  guide:
    "  در هنگام خرید انتخاب کفش با کیفیت با توجه به محیط زیست مناسب‌تر است. ",
};
