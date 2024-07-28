"use client"
import SignupForm from "@/app/components/form/auth/signupForm";
import Modal404 from "@/app/components/modal/modal404/modal404";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignupPage = () => {
  const [act, setAct] = useState(false)
  return (
    <>
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/bg/signup.png")` }}
    >
      <div className="w-[95%] h-fit md:w-3/4 md:h-3/4 flex items-center justify-between bg-white/75 shadow-lg rounded overflow-hidden backdrop-blur-lg">
        <div
          className="hidden md:flex items-center justify-center flex-1 bg-cover bg-no-repeat bg-center w-full h-full p-10"
          style={{ backgroundImage: `url("/bg/signup.png")` }}
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
              Join our platform today. Create an account to get started.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-cover bg-no-repeat h-full flex items-center justify-center p-10 bg-white/75 bg-opacity-75">
          <div className="space-y-4 w-full max-w-md">
            <h2 className="text-3xl font-teko font-semibold text-center text-gray-800">
              Create Your Account
            </h2>
            <SignupForm setAct={setAct} />
          </div>
        </div>
      </div>
    </div>
    <Modal404 isOpen={act} setIsOpen={setAct} />
    </>
  );
};

export default SignupPage;
