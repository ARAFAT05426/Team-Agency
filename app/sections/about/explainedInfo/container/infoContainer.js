"use client"
import TabButton from "@/app/components/buttons/tabButton/tabButton";
import { useState } from "react";
import AboutInfo from "../tabs/aboutInfo";
import ObjectiveInfo from "../tabs/objectiveInfo";
import ExecelentInfo from "../tabs/ExecelentInfo";
import VissionInfo from "../tabs/vissionInfo";

const InfoContainer = () => {
  const [act, setAct] = useState(0);
  const tabs = ["About", "Objective", "EXCELLENT", "OUR VISSION"];
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex items-center gap-5 flex-wrap">
        {tabs?.map((tab, i) => (
          <TabButton
            key={i}
            label={tab}
            isActive={act === i ? true : false}
            onClick={() => setAct(i)}
            initialbg={"bg-controller text-secondary"}
          />
        ))}
      </div>
      <div className="min-h-80">
        {act === 0 && <AboutInfo />}
        {act === 1 && <ObjectiveInfo />}
        {act === 2 && <ExecelentInfo />}
        {act === 3 && <VissionInfo />}
      </div>
    </div>
  );
};
export default InfoContainer;
