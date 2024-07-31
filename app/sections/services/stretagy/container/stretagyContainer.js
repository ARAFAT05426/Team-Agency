"use client";
import TabButton from "@/app/components/buttons/tabButton/tabButton";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

const StretagyContainer = () => {
  const [act, setAct] = useState(0);
  const controllers = ["OUR VALUE", "OUR VISION", "OUR MISSION"];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        {controllers.map((controller, i) => (
          <TabButton
            key={i}
            label={controller}
            isActive={act === i ? true : false}
            onClick={() => setAct(i)}
            initialbg={"bg-controller text-primary"}
          />
        ))}
      </div>
      <div className="pt-7 max-w-xl">
        {act === 0 && (
          <Fade triggerOnce>
            <div className="space-y-5">
              <p>
                “Pellentesque tempor egestas risus, assessment of the company’s
                competitiveness and market position, financial condition, as well
                as all possible’’
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Vivamus porta est et mi posuere, et cursus dolor porta.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">Etiam vulputate, aliquam vehicula,</p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Vivamus porta est et mi posuere, et cursus dolor porta.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        )}
        {act === 1 && (
          <Fade triggerOnce>
            <div className="space-y-5">
              <p>
                “Sed fermentum urna turpis, model, assessment of the company’s
                competitiveness and market position, financial condition, as well
                as all possible’’
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Etiam iaculis diam non mollis tincidunt.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">Nulla sit amet gravida facilisi.</p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Donec risus neque, condimentum ut auctor vel.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        )}
        {act === 2 && (
          <Fade triggerOnce>
            <div className="space-y-5">
              <p>
                “Pellentesque tempor egestas risus, assessment of the company’s
                competitiveness and market position, financial condition, as well
                as all possible’’
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Vivamus porta est et mi posuere, et cursus dolor porta.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">Etiam vulputate, aliquam vehicula,</p>
                </div>
                <div className="flex items-center gap-3">
                  <GiCheckMark className="bg-controller p-2 text-3xl text-primary rounded-full shadow-md" />
                  <p className="opacity-90">
                    Bortis tortor eu arcu efficitur vestibulum eget et nisi.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default StretagyContainer;
