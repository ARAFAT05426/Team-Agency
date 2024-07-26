import LoginForm from "@/app/sections/auth/loginForm";

const Page = () => {
  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('/bg/login.jpg')`,
      }}
    >
      <div className="w-full max-w-sm bg-controller/50 backdrop-blur-2xl px-10 py-14 rounded-lg space-y-5">
        <LoginForm />
      </div>
    </div>
  );
};
export default Page;
