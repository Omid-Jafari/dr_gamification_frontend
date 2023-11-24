import { Question } from "./questionSchema";

export const fristQuest: Question = {
  questionText: "کدوم روش روشنایی در خانه بهتره؟  ",
  chices: [
    {
      choiceTxt: "همه‌ی لامپ‌ها رو دائما روشن میزاره.",
      choiceImg: "/questions/consumption/firstQuest/always.png",
      answer: 0,
    },
    {
      choiceTxt: "از نور طبیعی در هنگام روز استفاده می‌کنه.",
      choiceImg: "/questions/consumption/firstQuest/natural.png",
      answer: 1,
    },
    {
      choiceTxt: "از لامپ استفاده می کنه و خاموش کردن آن هنگامی که نیاز نیست.",
      choiceImg: "/questions/consumption/firstQuest/needed.png",
      answer: 1,
    },
  ],
  guide:
    " استفاده از نور طبیعی و خاموش کردن وسایل برقی هنگامی که به آن‌ها نیازی نیست به محیط‌زیست کمک می‌کنه.",
};
export const secondQuest: Question = {
  questionText:
    "استفاده از کدوم روش برای نگهداری مواد غذایی باقی‌مانده مناسب تره؟",
  chices: [
    {
      choiceTxt: "از ظروف موجود در خانه استفاده می‌کنه.",
      choiceImg: "/questions/consumption/secQuest/hadOnes.png",
      answer: 1,
    },
    {
      choiceTxt: "از ظروف یکبار مصرف تجزیه‌پذیر استفاده می‌کنه.",
      choiceImg: "/questions/consumption/secQuest/oneOnly.png",
      answer: 1,
    },
    {
      choiceTxt: " از بسته‌بندی‌های یکبار مصرف استفاده می‍‌کنه.",
      choiceImg: "/questions/consumption/secQuest/onePack.png",
      answer: 1,
    },
  ],
  guide:
    "در هنگام بسته‌بندی مواد غذایی باقی‌مانده برای حفظ محیط‌زیست می‌توان از ظروف یکبار‌مصرف تجزیه‌پذیر و یا از ظروف موجود در خانه استفاده کرد.",
};
export const thirdQuest: Question = {
  questionText:
    "انتخاب کدوم یک از افراد در هنگام ناهار به کاهش زباله کمک می‌کند؟ ",
  chices: [
    {
      choiceTxt:
        "مواد غذایی که تاریخ انقضای آن ها نزدیک‌تر است را زودتر مصرف می‌کنه.",
      choiceImg: "/questions/consumption/thirdQuest/close.png",
      answer: 1,
    },
    {
      choiceTxt: "مواد غذایی پیچیده شده در ظروف یکبار مصرف استفاده می‌کنه.",
      choiceImg: "/questions/consumption/thirdQuest/packed.png",
      answer: 0,
    },
    {
      choiceTxt: "از ظروف ناهار چند بار مصرف استفاده می‌کنه.",
      choiceImg: "/questions/consumption/thirdQuest/multi.png",
      answer: 1,
    },
  ],
  guide:
    "استفاده از ظروف چند بار مصرف و مصرف مواد غذایی که تاریخ انقضای نزدیکی‌تری دارند به کاهش زباله کمک می‌کند. ",
};
export const forthQuest: Question = {
  questionText: "در زمستان... .",
  chices: [
    {
      choiceTxt: "لباس گرم می‌پوشه و حرارت بخاری رو کم می‌کنه.",
      choiceImg: "/questions/consumption/forthQuest/dress.png",
      answer: 1,
    },
    {
      choiceTxt: "لباس راحتی می‌پوشه و حرارت بخاری رو زیاد می‌کنه.",
      choiceImg: "/questions/consumption/forthQuest/easy.png",
      answer: 0,
    },
    {
      choiceTxt:
        "درب و پنجره‌ها رو جهت جلوگیری از هدر‌رفت انرژی بسته نگه می‌داره.",
      choiceImg: "/questions/consumption/forthQuest/close.png",
      answer: 1,
    },
  ],
  guide:
    "در هنگام زمستان پوشیدن لباس گرم و بستن در و پنجره‌ها موجب کاهش مصرف انرژِی می‌شود. ",
};
export const fifthQuest: Question = {
  questionText:
    "با توجه به مصرف سبز انتخاب کدوم گزینه آسیب کمتری به محیط‌زیست وارد می‌کنه؟",
  chices: [
    {
      choiceTxt: "یک همبرگر یا سوسیس انتخاب می‌کنه.",
      choiceImg: "/questions/consumption/fifthQuest/hamber.png",
      answer: 0,
    },
    {
      choiceTxt:
        " میوه‌های مخصوص همان فصل رو انتخاب می‌کنه (انتخاب سیب در زمستان).",
      choiceImg: "/questions/consumption/fifthQuest/fruite.png",
      answer: 1,
    },
    {
      choiceTxt: " یک ظرف سالاد سبزیجات انتخاب می‌کنه.",
      choiceImg: "/questions/consumption/fifthQuest/salad.png",
      answer: 1,
    },
  ],
  guide:
    "  مصرف غذاهای گیاهی و کاهش مصرف مواد غذایی حیوانی و فرآوری‌شده مانند سوسیس و کالباس آسیب کمتری به محیط‌زیست وارد می‌کنه.",
};
export const sixthQuest: Question = {
  questionText: " کدوم گزینه باعث افزایش طول عمر لباس میشه؟",
  chices: [
    {
      choiceTxt:
        "به جای دور انداختن لباس‌ها آن‌ها رو تعمیر می‌کنه و دوباره می‌پوشه.",
      choiceImg: "/questions/consumption/sixthQuest/again.png",
      answer: 1,
    },
    {
      choiceTxt: " از دما و روش مناسب برای شستشوی لباس‌ها استفاده می‌کنه .",
      choiceImg: "/questions/consumption/sixthQuest/wash.png",
      answer: 0,
    },
    {
      choiceTxt: "معمولا بعد از هر بار استفاده لباس‌ها رو میشوره.",
      choiceImg: "/questions/consumption/sixthQuest/veryWash.png",
      answer: 1,
    },
  ],
  guide:
    "تعمیر لباس‌ها و استفاده از دما و روش شستشوی مناسب موجب ماندگاری بیشتر  لباس‌ها میشه. ",
};
