"use client";
import { DiMagento } from "react-icons/di";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import StaticNavbar from "@/app/components/navigation/static/staticNavbar";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import Socialbox from "./socialbox/socialbox";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleClick = async () => {
    // Navigate to the services page
    await router.push('/#booknow');

    // Wait for the navigation to complete and then scroll
    setTimeout(() => {
      // Scroll to the 'booknow' section
      document.getElementById("booknow")?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay may need adjustment based on page load time
  };
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(3, 4, 27, 0.65), rgba(3, 4, 27, 0.65)), url('/bg/banner.jpg')`,
      }}
    >
      <StaticNavbar />

      <Slide direction="left" duration={600}>
        <div className="hidden lg:flex absolute w-64 h-64 rotate-45 bg-primary rounded-3xl items-center justify-center -left-36 inset-y-1/4">
          <div className="h-56 w-56 m-3 border-2 border-dotted border-white rounded-3xl" />
        </div>
      </Slide>

      <div className="flex items-center justify-between w-full lg:max-w-7xl mx-auto font-teko py-28 px-7 lg:px-5">
        <div className="space-y-5 overflow-hidden">
          <Fade direction="up" duration={600}>
            <div className="text-2xl text-primary font-semibold flex items-center gap-x-2">
              <DiMagento />
              <h1>Your Trusted Agency</h1>
            </div>
          </Fade>
          <Slide direction="left" duration={600} delay={200}>
            <h1 className="text-white text-6xl lg:text-8xl font-bold leading-tight">
              Digital Marketing <br /> Agency
            </h1>
          </Slide>
          <Fade direction="up" duration={600} delay={400}>
            <div className="flex items-center gap-x-5">
              <button onClick={handleClick} className="text-lg lg:text-2xl px-4 py-3 lg:py-4 lg:px-6 rounded bg-white/25 backdrop-blur-md text-white font-semibold flex items-center gap-x-2 transition duration-300 hover:bg-white hover:text-primary">
                Discover More <HiArrowRight size={25} />
              </button>
              <Link href={"/about"}>
              <PrimaryButton
                text="Learn More"
                className="before:bg-white bg-primary rounded"
              >
                <HiArrowRight size={25} />
              </PrimaryButton>
              </Link>
            </div>
          </Fade>
        </div>

        <Fade direction="right" duration={600} delay={600}>
          <Socialbox />
        </Fade>
      </div>

      <Fade direction="up" duration={800} className="hidden md:flex absolute bottom-0 left-0">
        <Image
          src="/patterns/vector-6.png"
          alt="Decorative pattern"
          width={350}
          height={200}
        />
      </Fade>
      <Fade direction="up" duration={800} className="hidden md:flex absolute bottom-0 left-0">
        <Image
          src="/patterns/vector-7.png"
          alt="Decorative pattern"
          width={300}
          height={250}
        />
      </Fade>
    </div>
  );
};

export default Banner;
