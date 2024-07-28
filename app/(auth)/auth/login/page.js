"use client";
import LoginForm from "@/app/components/form/auth/loginForm";
import Modal404 from "@/app/components/modal/modal404/modal404";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [act, setAct] = useState(false);

  return (
    <>
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/bg/login.png")` }}
      >
        <div className="w-[95%] h-fit md:w-3/4 md:h-3/4  flex items-center justify-between bg-white/75 shadow-lg rounded-md backdrop-blur-lg">
          <div
            className="hidden md:flex items-center justify-center flex-1 bg-cover bg-no-repeat bg-center w-full h-full p-5 lg:p-10"
            style={{ backgroundImage: `url("/bg/login.png")` }}
          >
            <div className="rounded-md p-10 flex flex-col items-center gap-3">
              <Link href={"/"}>
                <Image
                  className="w-48"
                  src={`/common/navlogo.svg`}
                  alt="logo"
                  width={75}
                  height={50}
                />
              </Link>
              <p className="text-center text-sm font-semibold max-w-xs text-gray-700">
                Welcome to our platform. Please login to continue.
              </p>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-center p-10 bg-slate-50">
            <div className="space-y-4 w-full max-w-md">
              <h2 className="text-3xl font-teko font-semibold text-center text-gray-800">
                Login to Your Account
              </h2>
              <LoginForm setAct={setAct} />
            </div>
          </div>
        </div>
      </div>
      <Modal404 isOpen={act} setIsOpen={setAct} />
    </>
  );
};

export default Page;
