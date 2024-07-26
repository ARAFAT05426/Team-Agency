import SignupForm from "@/app/sections/auth/signupForm";
import Image from "next/image";

const Page = () => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: `url("/bg/auth.png")` }}
    >
      <div className="w-4/5 h-4/5 flex items-center justify-between bg-slate-300/25 shadow rounded overflow-hidden">
        <div
          className="hidden md:flex items-start flex-1 bg-cover bg-no-repeat bg-center w-full h-full"
          style={{
            backgroundImage: `url("/bg/signup.png")`,
          }}
        >
          <Image
            className="w-48 ml-10 mt-10"
            src={`/common/navlogo.svg`}
            alt="logo"
            width={75}
            height={50}
          />
        </div>
        <div className="flex-1">
          <div className="space-y-4 mx-auto max-w-full md:max-w-md px-5 lg:px-0">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
