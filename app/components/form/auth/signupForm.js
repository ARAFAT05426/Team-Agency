import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypePassword from "@/app/components/form/typePassword/typePassword";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import TypeText from "@/app/components/form/typeText/typeText";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Modal404 from "../../modal/modal404/modal404";
import { signIn, useSession } from "next-auth/react";
import axiosCommon from "@/lib/axios/axiosCommon";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { useEffect } from "react";

const SignupForm = ({ setAct }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const { data } = await axiosCommon.post("/auth/signup/api", newUser);
      if (data.data.insertedId) {
        const response = await signIn("credentials", {
          email: newUser.email,
          password: newUser.password,
          redirect: false,
        });

        if (response.error) {
          toast.error(response.error);
        } else {
          toast.success("Sign up successfully!");
          router.push("/dashboard");
          e.target.reset();
        }
      }
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
    }
  };

  const handleSocialSignIn = async (provider) => {
    try {
      const response = await signIn(provider, { redirect: false });
      if (response.error) {
        toast.error(`Sign in with ${provider} failed. Please try again.`);
      } else {
        toast.success(`Sign in with ${provider} successful!`);
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(`Sign in with ${provider} failed. Please try again.`);
    }
  };

  return (
    <div>
      <Modal404 />
      <form className="space-y-4" onSubmit={handleSignUp}>
        <TypeText
          placeholder="Username"
          name="username"
          icon={AiOutlineUser}
          isRequired
        />
        <TypeText
          placeholder="Email"
          name="email"
          icon={AiOutlineMail}
          isRequired
        />
        <TypePassword placeholder="Password" name="password" isRequired />
        <PrimaryButton
          text={"Sign Up"}
          className="bg-primary before:bg-secondary rounded-sm w-full"
        />
        <h1 className="text-sm text-center font-semibold">
          Already have an account?
          <Link
            href={"/auth/login"}
            className="font-bold hover:underline transition-all duration-300 ml-3"
          >
            Login
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
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-blue-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => setAct(true)}
        >
          <FaFacebookF />
        </button>
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-rose-600 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => handleSocialSignIn("google")}
        >
          <FaGoogle />
        </button>
        <button
          className="bg-slate-100 border border-slate-300/25 text-xl text-sky-500 p-4 rounded-full hover:bg-slate-200 transition transform hover:scale-105 shadow"
          onClick={() => setAct(true)}
        >
          <FaTwitter />
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
