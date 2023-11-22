import { updateUser } from "@/app/api/ApiClient";
import { RootState } from "@/app/redux/store";
import { updateUserScore } from "@/app/redux/user";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";

const WheelOfFortuneComp = ({
  whichQuest,
  fortune,
  congratsRefOpen,
  setOpen,
}: {
  whichQuest: string;
  fortune: boolean;
  congratsRefOpen: any;
  setOpen: any;
}) => {
  let data: any = [];
  // fortune
  //   ? data.push([
  //       {
  //         option: "0",
  //         image: { uri: "/spinner/option0.svg", offsetY: 200 },
  //         style: { backgroundColor: "#FF001E", textColor: "#fff" },
  //       },
  //       {
  //         option: "160",
  //         image: { uri: "/spinner/option1.svg", offsetY: 200 },
  //         style: { backgroundColor: "#00A200", textColor: "#fff" },
  //       },
  //       {
  //         option: "30",
  //         image: { uri: "/spinner/option2.svg", offsetY: 200 },
  //         style: { backgroundColor: "#00AEFF", textColor: "#fff" },
  //       },
  //       {
  //         option: "20",
  //         image: { uri: "/spinner/option3.svg", offsetY: 200 },
  //         style: { backgroundColor: "#FF9D00", textColor: "#fff" },
  //       },
  //       {
  //         option: "440",
  //         image: { uri: "/spinner/option4.svg", offsetY: 200 },
  //         style: { backgroundColor: "#8504FF", textColor: "#fff" },
  //       },
  //       {
  //         option: "200",
  //         image: { uri: "/spinner/option5.svg", offsetY: 200 },
  //         style: { backgroundColor: "#0047D0", textColor: "#fff" },
  //       },
  //       {
  //         option: "-100",
  //         image: { uri: "/spinner/option6.svg", offsetY: 200 },
  //         style: { backgroundColor: "#B97100", textColor: "#fff" },
  //       },
  //       {
  //         option: "-40",
  //         image: { uri: "/spinner/option7.svg", offsetY: 200 },
  //         style: { backgroundColor: "#6AD000", textColor: "#fff" },
  //       },
  //       {
  //         option: "-80",
  //         image: { uri: "/spinner/option8.svg", offsetY: 200 },
  //         style: { backgroundColor: "#FFDA00", textColor: "#fff" },
  //       },
  //     ])
  //   : data.push([
  //       {
  //         option: "0",
  //         image: { uri: "/spinner/option0.svg", offsetY: 200 },
  //         style: { backgroundColor: "#FF001E", textColor: "#fff" },
  //       },
  //       {
  //         option: "160",
  //         image: { uri: "/spinner/option1.svg", offsetY: 200 },
  //         style: { backgroundColor: "#00A200", textColor: "#fff" },
  //       },
  //       {
  //         option: "30",
  //         image: { uri: "/spinner/option2.svg", offsetY: 200 },
  //         style: { backgroundColor: "#00AEFF", textColor: "#fff" },
  //       },
  //       {
  //         option: "20",
  //         image: { uri: "/spinner/option3.svg", offsetY: 200 },
  //         style: { backgroundColor: "#FF9D00", textColor: "#fff" },
  //       },
  //       {
  //         option: "440",
  //         image: { uri: "/spinner/option4.svg", offsetY: 200 },
  //         style: { backgroundColor: "#8504FF", textColor: "#fff" },
  //       },
  //     ]);
  if (fortune) {
    data = [
      {
        option: "0",
        image: { uri: "/spinner/option0.svg", offsetY: 200 },
        style: { backgroundColor: "#FF001E", textColor: "#fff" },
      },
      {
        option: "160",
        image: { uri: "/spinner/option1.svg", offsetY: 200 },
        style: { backgroundColor: "#00A200", textColor: "#fff" },
      },
      {
        option: "30",
        image: { uri: "/spinner/option2.svg", offsetY: 200 },
        style: { backgroundColor: "#00AEFF", textColor: "#fff" },
      },
      {
        option: "20",
        image: { uri: "/spinner/option3.svg", offsetY: 200 },
        style: { backgroundColor: "#FF9D00", textColor: "#fff" },
      },
      {
        option: "440",
        image: { uri: "/spinner/option4.svg", offsetY: 200 },
        style: { backgroundColor: "#8504FF", textColor: "#fff" },
      },
      {
        option: "200",
        image: { uri: "/spinner/option5.svg", offsetY: 200 },
        style: { backgroundColor: "#0047D0", textColor: "#fff" },
      },
      {
        option: "-100",
        image: { uri: "/spinner/option6.svg", offsetY: 200 },
        style: { backgroundColor: "#B97100", textColor: "#fff" },
      },
      {
        option: "-40",
        image: { uri: "/spinner/option7.svg", offsetY: 200 },
        style: { backgroundColor: "#6AD000", textColor: "#fff" },
      },
      {
        option: "-80",
        image: { uri: "/spinner/option8.svg", offsetY: 200 },
        style: { backgroundColor: "#FFDA00", textColor: "#fff" },
      },
    ];
  } else {
    data = [
      {
        option: "-230",
        image: { uri: "/deathSpinner/option0.svg", offsetY: 200 },
        style: { backgroundColor: "#FF001E", textColor: "#fff" },
      },
      {
        option: "-30",
        image: { uri: "/deathSpinner/option1.svg", offsetY: 200 },
        style: { backgroundColor: "#00A200", textColor: "#fff" },
      },
      {
        option: "-180",
        image: { uri: "/deathSpinner/option2.svg", offsetY: 200 },
        style: { backgroundColor: "#00AEFF", textColor: "#fff" },
      },
      {
        option: "-10",
        image: { uri: "/deathSpinner/option3.svg", offsetY: 200 },
        style: { backgroundColor: "#FF9D00", textColor: "#fff" },
      },
      {
        option: "-40",
        image: { uri: "/deathSpinner/option4.svg", offsetY: 200 },
        style: { backgroundColor: "#8504FF", textColor: "#fff" },
      },
      {
        option: "100",
        image: { uri: "/deathSpinner/option5.svg", offsetY: 200 },
        style: { backgroundColor: "#0047D0", textColor: "#fff" },
      },
      {
        option: "50",
        image: { uri: "/deathSpinner/option6.svg", offsetY: 200 },
        style: { backgroundColor: "#B97100", textColor: "#fff" },
      },
      {
        option: "160",
        image: { uri: "/deathSpinner/option7.svg", offsetY: 200 },
        style: { backgroundColor: "#6AD000", textColor: "#fff" },
      },
      {
        option: "0",
        image: { uri: "/deathSpinner/option8.svg", offsetY: 200 },
        style: { backgroundColor: "#FFDA00", textColor: "#fff" },
      },
    ];
  }
  const dataFacts = [
    {
      imgSrc: "/congrats/facts/fact0.svg",
      txt: "قطعات پلاستیک بیش از 400 سال در محل‌های دفن زباله باقی می ماند و این قطعات می‌توانند به اقیانوس‌ها راه یابند.درصورت بلیده شدن توسط ماهی‌ها و سایر حیات‌وحش آسیب قابل توجهی وارد می‌كنند.",
    },
    {
      imgSrc: "/congrats/facts/fact1.svg",
      txt: "كشاورزي و توليد مواد غذايي حدود 20 درصد از انتشار كربن را تشكيل مي‌دهند، براي كمك به محيط‌زيست مصرف گوشت وغذاهاي فرآوري شده را كاهش دهيد و دريافت غذا از منابع محلي را در نظر بگيريد.",
    },
    {
      imgSrc: "/congrats/facts/fact2.svg",
      txt: " لامپ‌های ال‌ای‌دی بهتر از لامپ‌های قدیمی است زیرا مصرف را کاهش می‌دهند و مصرف برق کمتر یعنی هوای پاک‌تر.",
    },
    {
      imgSrc: "/congrats/facts/fact3.svg",
      txt: "با بازيافت کردن به صرفه‌جويي در انرژی، حفظ منابع طبیعی و کاهش آلودگی هوا و آب کمک کنیم.",
    },
    {
      imgSrc: "/congrats/facts/fact4.svg",
      txt: "برای کمک به محیط‌ زیست باید، استفاده از خودرو را کاهش بریم و از وسایل حمل و نقل عمومی و اشتراکی و تاحد ممکن از پیاده روی استفاده کنیم.",
    },
    {
      imgSrc: "/congrats/facts/fact5.svg",
      txt: "با دوچرخه سواری کردن که یک روش حمل ونقل بدون آلودگی است، به محیط‌ زیست کمک کنیم.",
    },
    {
      imgSrc: "/congrats/facts/fact6.svg",
      txt: "برای کمک به محیط‌ زیست باید کمتر خرید کنیم، وسایل باکیفیت بخریم، خرید دست دوم و کالاهای ساخته شده با مواد بازیافتی را در نظر بگیریم.",
    },
    {
      imgSrc: "/congrats/facts/fact7.svg",
      txt: "با بازیافت، کمپوست کردن و خرید محصولات با حداقل بسته‌بندی، میزان زباله‌های خود را کاهش دهیم.",
    },
    {
      imgSrc: "/congrats/facts/fact8.svg",
      txt: "یکی از راه‌های کمک به محیط‌‌زیست استفاده از انرژِ‌های تجدید‌پذیر است. استفاده از پنل‌های خورشیدی در ساختمان‌ها باعث کاهش انتشار گازهای گلخانه‌ای و آلودگی می‌شود.",
    },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const updateUserMutation = useMutation({
    mutationKey: ["updateUserMutation"],
    mutationFn: updateUser,
    onSuccess: () => {
      dispatch(
        updateUserScore({
          score: user.score + +data[prizeNumber].option,
          [whichQuest]: true,
        })
      );
    },
    onError: () => {},
  });
  const onStopSpinning = () => {
    setMustSpin(false);

    updateUserMutation.mutate({
      _id: user._id,
      body: {
        score: user.score + +data[prizeNumber].option,
        [whichQuest]: true,
      },
    });
    congratsRefOpen({
      score: +data[prizeNumber].option,
      fact: dataFacts[prizeNumber],
    });
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={onStopSpinning}
        outerBorderColor="#FBD600"
        outerBorderWidth={2}
        innerBorderColor="#FBD600"
        innerBorderWidth={2}
        pointerProps={{ src: "/spinner/pointer.png" }}
      />
      <button
        type="button"
        onClick={handleSpinClick}
        className="w-1/2 spinner_btn shadow-light flex items-center justify-center gap-1"
      >
        یک دور چرخاندن
      </button>
    </>
  );
};

export default WheelOfFortuneComp;
