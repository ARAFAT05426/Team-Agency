"use client";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import PrimaryButton from "./components/buttons/primaryButton/primaryButton";
const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center px-4">
      <img
        src="/common/error.png"
        alt="Error illustration"
        className="max-w-full h-auto"
      />
      <h1 className="font-teko text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center">
        Oops... It looks like you’re lost!
      </h1>
      <p className="text-center text-sm max-w-prose opacity-75">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div onClick={goBack}>
          <PrimaryButton
            text="Previous Page"
            className="bg-secondary before:bg-primary rounded hover:text-secondary"
          >
            <BsArrowRight className="mb-1" />
          </PrimaryButton>
        </div>

        <Link href="/">
          <PrimaryButton
            text="Back to Homepage"
            className="bg-primary before:bg-secondary rounded"
          >
            <BsArrowRight className="mb-1" />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
