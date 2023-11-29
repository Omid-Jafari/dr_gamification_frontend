"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { usersData } from "../api/ApiClient";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Records = () => {
  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const getUsersDataQuery = useQuery({
    queryKey: ["getUsersDataQuery"],
    queryFn: () => usersData({ limit: 10 }),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUsers(data?.data);
    },
    onError: (error) => {},
  });
  const closeRecordFunc = () => {
    setOpen(false);
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[100dvh] z-20 px-2 overflow-hidden transition-all duration-[.7s] ${
        open
          ? "bg-[#57959ba7] max-h-[10000px] duration-[.7s]"
          : "bg-[#57959b00] max-h-0 duration-[1.7s]"
      }`}
    >
      <img
        src="/common/ModalBlueBg.svg"
        className={`absolute top-0 left-0 w-full h-[100dvh] object-cover animate__animated ${
          open
            ? "animate__fadeIn animate__slow animate__delay"
            : "animate__fadeOut animate__fast"
        }`}
        alt=""
      />
      <div
        className={`w-full h-[100dvh] flex flex-col items-center justify-center pt-5 gap-4 animate__animated  ${
          open
            ? "animate__fadeInDownBig animate__delay-1s"
            : "animate__fadeOutUpBig"
        }`}
      >
        <button
          type="button"
          className="absolute top-[7.5%] right-[3%]"
          onClick={closeRecordFunc}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image fill className="" src="/questions/close.svg" alt="" />
          </div>
        </button>
        <img
          src="/records/recordsLogo.png"
          className="mb-[-33px] z-10 object-contain max-w-[90px] sm:max-w-[120px] z-50 relative"
          alt=""
        />
        {/* table */}
        <div className="flex w-full flex-col justify-center items-center text-sm sm:text-base">
          {/* table header */}
          <div className="w-full min-h-[55px] bg-[#E2E2E2] box_shadow_gen flex justify-center items-center p-3 z-20 relative">
            <p className="text-[20px] font-bold py-3 px-9 bg-[#E2E2E2] rounded-full -mb-5 ">
              جدول امتیازات
            </p>
          </div>
          <div className="w-[94%] flex flex-col rounded-b-[16px] overflow-hidden record_table_rows text-white text-xs">
            <div className="w-full grid grid-cols-11 gap-x-2 items-end px-3 py-5">
              <span className="col-span-1">رتبه</span>
              <span className="col-span-4">نام کاربری</span>
              <span className="col-span-2">امتیاز</span>
              <span className="col-span-4">نشان</span>
            </div>
            <div className="table_row_Seperator"></div>
            {users?.map((user: any, index) => (
              <div
                key={`userRecords${index}`}
                className="w-full grid grid-cols-11 gap-x-2 items-center p-2"
              >
                <span className="col-span-1">{index + 1}</span>
                <span className="col-span-4 flex items-center gap-2">
                  {user?.policeMale ? (
                    <img
                      src="/records/malePolice.png"
                      alt=""
                      className="max-h-9"
                    />
                  ) : (
                    <img
                      src="/records/femPolice.png"
                      alt=""
                      className="max-h-9"
                    />
                  )}
                  {user?.name}
                </span>
                <span className="col-span-2">{user?.score}</span>
                <span className="col-span-4 flex items-center gap-2">
                  {600 <= user.score && (
                    <Image
                      width={18}
                      height={25}
                      src="/header/Boronz.png"
                      alt=""
                      className="object-contain"
                    />
                  )}
                  {1200 <= user.score && (
                    <Image
                      width={18}
                      height={25}
                      src="/header/Silver.png"
                      alt=""
                      className="object-contain"
                    />
                  )}
                  {2000 <= user.score && (
                    <Image
                      width={18}
                      height={25}
                      src="/header/Gold.png"
                      alt=""
                      className="object-contain"
                    />
                  )}
                  {3000 <= user.score && (
                    <Image
                      width={18}
                      height={25}
                      src="/header/green.png"
                      alt=""
                      className="object-contain"
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
