"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypePassword from "@/app/components/form/typePassword/typePassword";
import TypeText from "@/app/components/form/typeText/typeText";
import axiosCommon from "@/lib/axios/axiosCommon";
import Link from "next/link";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";

const SignupForm = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axiosCommon.post("/auth/signup/api", newUser);
      e.target.reset()
      toast.success("Sign up successful! Welcome to team-agency");
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
    }
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSignUp}>
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
          className="bg-primary before:bg-secondary rounded-sm w-full"
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
      </form>
      <div className="flex items-center">
        <div className="border-t border-gray-300 flex-grow" />
        <span className="text-gray-700 font-teko font-semibold mt-1 mx-2">
          OR
        </span>
        <div className="border-t border-gray-300 flex-grow" />
      </div>
      <div className="flex items-center justify-center space-x-3">
        <button className="bg-slate-100 border border-slate-300/25 text-xl text-blue-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow">
          <FaFacebookF />
        </button>
        <button className="bg-slate-100 border border-slate-300/25 text-xl text-rose-600 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow">
          <FaGoogle />
        </button>
        <button className="bg-slate-100 border border-slate-300/25 text-xl text-sky-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow">
          <FaTwitter />
        </button>
      </div>
    </>
  );
};
export default SignupForm;
