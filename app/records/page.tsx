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
    queryFn: () => usersData(),
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
      className={`absolute top-0 left-0 w-full h-[100vh] z-20 px-2 overflow-hidden transition-all duration-[1s] ${
        open ? "bg-[#57959ba7] max-h-[10000px]" : "bg-[#57959b00] max-h-0"
      }`}
    >
      <div
        className={`w-full h-[100vh] flex flex-col items-center justify-start pt-6 gap-4 animate__animated ${
          open ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"
        }`}
      >
        <button
          type="button"
          className="absolute top-[7.5%] right-[3%]"
          onClick={closeRecordFunc}
        >
          <img
            className="w-10 h-10 sm:w-12 sm:h-12"
            src="/questions/close.png"
            alt=""
          />
        </button>
        <p className="text-[28px] font-bold pb-3">جدول امتیازات</p>
        <img
          src="/records/recordsLogo.png"
          className="mb-[-33px] z-10"
          alt=""
        />
        {/* table */}
        <div className="flex w-full flex-col text-sm sm:text-base">
          {/* table header */}
          <div className="w-full min-h-[55px] bg-[#E2E2E2] box_shadow_gen grid grid-cols-11 gap-x-2 items-end p-3">
            <span className="col-span-1">رتبه</span>
            <span className="col-span-4">نام کاربری</span>
            <span className="col-span-2">امتیاز</span>
            <span className="col-span-4">نشان</span>
          </div>
          <div className="w-full flex flex-col px-3 record_table_rows text-white text-xs max-h-[450px] overflow-y-auto sm:max-h-max">
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
