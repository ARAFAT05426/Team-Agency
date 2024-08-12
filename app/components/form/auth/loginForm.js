"use client";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypePassword from "@/app/components/form/typePassword/typePassword";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import TypeText from "@/app/components/form/typeText/typeText";
import { signIn, useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

const LoginForm = ({ setAct }) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result.error) {
        toast.error("Login failed. Please try again.");
      } else {
        toast.success("Logged in successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Login failed:", error);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signIn(provider, { redirect: false });

      if (result.error) {
        toast.error(`Sign up with ${provider} failed. Please try again.`);
      } else {
        toast.success(`Sign up with ${provider} successful`);
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(`Sign up with ${provider} failed. Please try again.`);
      console.error(`Sign up with ${provider} failed:`, error);
    }
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleLogIn}>
        <TypeText
          placeholder="Your email"
          name="email"
          icon={AiOutlineUser}
          isRequired
        />
        <TypePassword placeholder="Your password" name="password" isRequired />
        <span
          onClick={() => setAct(true)}
          className="text-xs font-semibold ml-1 cursor-pointer hover:underline transition-all duration-300"
        >
          Forgot password?
        </span>
        <PrimaryButton
          text={"Login"}
          className="bg-primary before:bg-secondary rounded-sm w-full"
        />
      </form>
      <h1 className="text-sm text-center font-semibold mt-3">
        New here?
        <Link
          href={"/auth/signup"}
          className="hover:underline transition-all duration-300 ml-3 font-teko"
        >
          Sign up
        </Link>
      </h1>
      <div className="flex items-center mt-3">
        <div className="border-t border-gray-300 flex-grow" />
        <span className="text-gray-700 font-teko font-semibold mx-2">OR</span>
        <div className="border-t border-gray-300 flex-grow" />
      </div>
      <div className="flex items-center justify-center space-x-3 mt-3">
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-blue-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => handleSocialLogin("facebook")}
        >
          <FaFacebookF />
        </button>
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-rose-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => handleSocialLogin("google")}
        >
          <FaGoogle />
        </button>
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-sky-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => handleSocialLogin("twitter")}
        >
          <FaTwitter />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
