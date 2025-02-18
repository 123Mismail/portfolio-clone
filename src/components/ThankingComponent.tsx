"use client"; // Add this if using Next.js App Router

import { motion } from "framer-motion"; // For animations
import { FaHandshake } from "react-icons/fa"; // For a handshake icon
import MagicButton from "./ui/MagicButton";

import { useEffect, useState } from "react";

const ThankYou = () => {
    const [handelContactBtn , setHAndelContactBtn]=useState<(() => void) | null>(null)

     useEffect(()=>
      {
        setHAndelContactBtn (() => () => {
          const phoneNumber = "+923483144231"; // Replace with your WhatsApp number
          const whatsappURL = `https://wa.me/${phoneNumber}`;
          window.open(whatsappURL, "_blank");
        });
      },[])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen   text-white text-center p-8"
    >
      <div className="max-w-2xl mx-auto sm:-mt-36 -mt-56 py-10 md:-mt-36">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
          className="mb-6"
        >
          <FaHandshake className="w-16 h-16  " />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Thank You for Visiting!
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          I appreciate you taking the time to explore my portfolio. If you have any
          questions or would like to collaborate, feel free to reach out!
        </p>

        {/* Button */}
        <MagicButton
                title={"Get In Touch" }
                icon={<FaHandshake className="text-xl" />}
                position="left"
                handleOnClick={()=>handelContactBtn!()}
                otherClasses="!bg-[#161A31]"
              />
      </div>
    </motion.div>
  );
};

export default ThankYou;