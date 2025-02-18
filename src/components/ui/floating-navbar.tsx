"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [handelContactBtn , setHAndelContactBtn]=useState<(() => void) | null>(null)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  
  useEffect(()=>
  {
    setHAndelContactBtn (() => () => {
      const phoneNumber = "+923483144231"; // Replace with your WhatsApp number
      const whatsappURL = `https://wa.me/${phoneNumber}`;
      window.open(whatsappURL, "_blank");
    });
  },[])
  

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black   shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 z-[5000] pr-2  py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
         
          <div >
          {
            navItem.name=="Contact" ? <span className="cursor-pointer hover:text-neutral-300 duration-200 text-neutral-100 pr-3"
             onClick={()=>handelContactBtn!()}
            >Contact</span>:
            <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center justify-center p-2  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500  "
            )}
          >
            <span className="block  "
           
            >{ navItem.icon }</span>
         <span className=" sm:block text-base"
            
              >{navItem.name}</span>
            
           
          </Link>
          }

          
          </div>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};
