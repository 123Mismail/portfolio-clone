
 "use client"
import React from "react";

const MagicButton = ({
  title,
  position,
  handleOnClick,
  icon,
  otherClasses,
}: {
  title: string;
  position: string;
  handleOnClick?: () => void;
  icon: React.ReactNode;
  otherClasses?: string;
}) => {
  return (
    <button onClick={handleOnClick} className="relative inline-flex  h-14 md:h-[68px] w-full md:w-60   overflow-hidden rounded-lg  p-[2px]     md:pb-2 focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black  gap-2   pb-2  text-white p-3 md:p-6 lg:p-8   font-semibold backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}

        {position === "right" && icon}
         
      </span>
    </button>
  );
};

export default MagicButton;
