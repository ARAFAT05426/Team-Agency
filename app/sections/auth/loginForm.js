"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypePassword from "@/app/components/form/typePassword/typePassword";
import TypeText from "@/app/components/form/typeText/typeText";
import NotAvailable from "@/app/components/modal/404/notAvailable";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const LoginForm = () => {
  const [act, setAct] = useState(false);
  return (
    <>
      <TypeText
        placeholder=""
        name="username"
        icon={AiOutlineUser}
        isRequired
      />
      <TypePassword />
      <span onClick={() =>setAct(true)} className="text-xs font-semibold ml-1 cursor-pointer hover:underline transition-all duration-300">
        forget password ?
      </span>
      <PrimaryButton
        text={"Login"}
        className="bg-primary before:bg-secondary rounded-sm"
      />
      <h1 className="text-sm text-center font-semibold">
        New here ?
        <Link
          href={"/auth/signup"}
          className="font-bold hover:underline transition-all duration-300 ml-3"
        >
          sign up
        </Link>
      </h1>
      <NotAvailable act={act} setAct={setAct} />
    </>
  );
};
export default LoginForm;
