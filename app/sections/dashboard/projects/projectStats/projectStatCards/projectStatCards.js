"use client";

import { useParams } from "next/navigation";

const ProjectStatCards = () => {
  const { id } = useParams();
  console.log(id);
  return <></>;
};
export default ProjectStatCards;
