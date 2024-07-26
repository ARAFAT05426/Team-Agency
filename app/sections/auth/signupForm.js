"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypePassword from "@/app/components/form/typePassword/typePassword";
import TypeText from "@/app/components/form/typeText/typeText";
import Link from "next/link";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

const SignupForm = () => {
  return (
    <>
      <TypeText
        placeholder=""
        name="username"
        icon={AiOutlineUser}
        isRequired
      />
      <TypeText placeholder="" name="email" icon={AiOutlineMail} isRequired />
      <TypePassword />
      <PrimaryButton
        text={"Sign Up"}
        className="bg-primary before:bg-secondary rounded-sm"
      />
      <h1 className="text-sm text-center font-semibold">
        Already have an account ?
        <Link
          href={"/auth/login"}
          className="font-bold hover:underline transition-all duration-300 ml-3"
        >
          login
        </Link>
      </h1>
    </>
  );
};
export default SignupForm;
