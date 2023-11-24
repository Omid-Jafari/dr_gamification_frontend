import { Question } from "./questionSchema";

export const fristQuest: Question = {
  questionText:
    "برای کاهش دور ریز مواد غذایی یک مهمانی چه کاری می‌توان انجام داد؟",
  chices: [
    {
      choiceTxt: "غذای دست ‌نخورده را به خیریه‌ها اهدا می‌کنه.",
      choiceImg: "/questions/recycle/firstQuest/food.png",
      answer: 1,
    },
    {
      choiceTxt: "از ظروف چندبار مصرف استفاده می‌کنه.",
      choiceImg: "/questions/recycle/firstQuest/multi.png",
      answer: 1,
    },
    {
      choiceTxt: "فقط از مهمونی لذت میبره براش مهم نیست غذا به سطل زباله برود.",
      choiceImg: "/questions/recycle/firstQuest/enjoy.png",
      answer: 0,
    },
  ],
  guide:
    "برای کاهش دور ریز مواد غذایی می‌توان غذای باقی‌مانده را به خیریه‌ها اهدا کرد‌ و در پذیرایی از ظروف چند بار مصرف به جای ظروف پلاستیکی استفاده کرد.",
};
export const secondQuest: Question = {
  questionText: "هنگام دفع زباله کدام انتخاب مناسبه؟",
  chices: [
    {
      choiceTxt: "همه‌ ی زباله‌ ها را در یک سطل می‌ریزه.",
      choiceImg: "/questions/recycle/secQuest/same.png",
      answer: 0,
    },
    {
      choiceTxt: "زباله‌ها رو تفکیک می‌کنه.",
      choiceImg: "/questions/recycle/secQuest/sep.png",
      answer: 1,
    },
    {
      choiceTxt:
        " باتری‌های استفاده ‌شده رو به مرکز بازیافت وسایل الکتریکی تحویل میده.",
      choiceImg: "/questions/recycle/secQuest/battery.png",
      answer: 1,
    },
  ],
  guide:
    "در هنگام دفع زباله ها رو باید تفکیک کرد و باتری‌های استفاده‌شده را به مرکز بازیافت الکتریکی باید تحویل داد.",
};
export const thirdQuest: Question = {
  questionText: "با توجه به کوچک شدن کاپشن قدیمی ... .",
  chices: [
    {
      choiceTxt: "آن را به یک دوست یا خیریه اهدا می‌کنه.",
      choiceImg: "/questions/recycle/thirdQuest/give.png",
      answer: 1,
    },
    {
      choiceTxt: "آن را می‌فروشه.",
      choiceImg: "/questions/recycle/thirdQuest/sell.png",
      answer: 1,
    },
    {
      choiceTxt: "آن را در کمد نگهداری می‌کنه.",
      choiceImg: "/questions/recycle/thirdQuest/cabinet.png",
      answer: 0,
    },
  ],
  guide:
    " استفاده مجدد از وسایل مانند اهدا کردن آن به یک دوست یا خیریه  و یا فروش مجدد آن می‌تواند به محیط‌زیست  کمک کند تا زباله کمتری تولید شود.",
};
export const forthQuest: Question = {
  questionText: "با پایان یافتن فصل مدرسه ... .",
  chices: [
    {
      choiceTxt: "لوازم اضافی رو دور می‌ریزه.",
      choiceImg: "/questions/recycle/forthQuest/waste.png",
      answer: 0,
    },
    {
      choiceTxt: "از لوازم اضافی در سال آینده در مدرسه یا خانه استفاده می‌کنه.",
      choiceImg: "/questions/recycle/forthQuest/use.png",
      answer: 1,
    },
    {
      choiceTxt: " لوازم اضافی استفاده ‌شده رو بازیافت می‌کنه.",
      choiceImg: "/questions/recycle/forthQuest/recycle.png",
      answer: 1,
    },
  ],
  guide:
    "بازیافت لوازم اضافی مدرسه یا استفاده مجدد از آن در سال آینده به محیط‌زیست کمک می‌کند. ",
};
