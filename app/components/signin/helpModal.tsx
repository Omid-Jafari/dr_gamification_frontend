import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const HelpModal = ({
  setOpenHelp,
}: {
  setOpenHelp: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-[100dvh] flex justify-center items-center text-sm">
      <button
        type="button"
        className="absolute top-[7.5%] right-[3%]"
        onClick={() => setOpenHelp(false)}
      >
        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
          <Image fill className="" src="/questions/close.svg" alt="" />
        </div>
      </button>
      <div
        className={`w-[80%] max-h-[80%] overflow-auto flex flex-col gap-[15px] `}
      >
        <div className="grid grid-cols-2 gap-[15px]">
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/header/time.png" alt="" />
            <span className="">زمان</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/congrats/coin.png" alt="" />
            <span className="">امتیاز</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/back.svg" alt="" />
            <span className="">بازگشت</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/sound.svg" alt="" />
            <span className="">روشن/خاموش</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/Group.svg" alt="" />
            <span className="">جدول امتیازات</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
            <Image width={35} height={35} src="/questions/guide.png" alt="" />
            <span className="">راهنمای سوال ها</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
          <div className="flex items-center gap-1 ">
            <div className="h-8 w-8 rounded-full border-2 border-[rgba(91,91,91,.36)] bg-white flex justify-center items-center">
              <Image
                width={18}
                height={25}
                src="/header/Boronz.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-[rgba(91,91,91,.36)] bg-white flex justify-center items-center">
              <Image
                width={18}
                height={25}
                src="/header/Silver.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-[rgba(91,91,91,.36)] bg-white flex justify-center items-center">
              <Image
                width={18}
                height={25}
                src="/header/Gold.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-[rgba(91,91,91,.36)] bg-white flex justify-center items-center">
              <Image
                width={18}
                height={25}
                src="/header/green.png"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-center">
            امتیازات رو افزایش بده و نشان‌های محافظت از محیط‌زیست رو بگیر.
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 bg-[#FFEEAE] p-3 rounded-[10px]">
          <div className="flex items-center gap-1 ">
            <Image
              width={40}
              height={40}
              src="/homeIcons/transportation.png"
              alt=""
              className="object-contain"
            />
            <Image
              width={40}
              height={40}
              src="/homeIcons/shop.png"
              alt=""
              className="object-contain"
            />
            <Image
              width={40}
              height={40}
              src="/homeIcons/consumption.png"
              alt=""
              className="object-contain"
            />
            <Image
              width={40}
              height={40}
              src="/homeIcons/recycle.png"
              alt=""
              className="object-contain"
            />
          </div>
          <span className="text-center">
            با انتخاب هر کدام از این آیکون‌ها به آن بخش برو و با پاسخ دادن به
            سوالات هر بخش به دوستات پاداش یا جریمه بده.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
