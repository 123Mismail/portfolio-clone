import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20  bg-blue-950/50 p-4" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-50 text-xl min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div>
          <div className=" grid lg:grid-cols-4 mg:grid-cols-3 mt-14 text-center gap-y-2  grid-cols-1">
            <div className="w-full text-left gap-y-6   mt-10">
              <ul>
                <h2 className="text-2xl mb-8">Join on Social Media   </h2>
                 
                <li className="ml-14 cursor-pointer  mb-2 ">
                  <Link href="https://www.linkedin.com/in/muhammad-ismail-2a42822ba/">
                    Linkdin
                  </Link>
                </li>
                <li className="ml-14 cursor-pointer  mb-2 ">
                  <a href="">gitHub</a>
                </li>
                <li className="ml-14 cursor-pointer  mb-2 ">Twitter</li>
                <li className="ml-14 cursor-pointer  mb-2 ">Instagram</li>
              </ul>
            </div>
            <div className="w-full text-left gap-y-3 mt-10">
              <ul>
                <h2 className=" ml-14 mb-8 text-2xl">Contact </h2>
                
                <li className="ml-16  cursor-pointer  mb-2 ">
                   <a href="musafirbaltistani786@gmail.com">Gmail</a><br/>
                   <span className="text-green-200 underline "><a href="">musafirbaltistani786@gmail.com </a> </span>
                </li>
                <li className="ml-16 cursor-pointer  mb-2 ">
                  <a href="">Whattsap</a><br></br>
                  <span className="text-green-200 underline">03483144231</span>
                </li>
                <li className=" ml-16 cursor-pointer  mb-2 ">Twitter</li>
                <li className="ml-16  cursor-pointer  mb-2 ">Instagram</li>
              </ul>
            </div>
            <div className="w-full text-left gap-y-3 mt-10">
              <ul>
                <h2 className="text-xl mb-8">Our Technology stack </h2>
                 
                <li className="ml-16 cursor-pointer  mb-2 ">
                 Reactjs
                </li>
                <li className="ml-16 cursor-pointer  mb-2 ">
                 Next.js
                </li>
                <li className="ml-16 cursor-pointer  mb-2 ">TailwindCss</li>
                <li className="ml-16 cursor-pointer  mb-2 ">Shadcn</li>
                <li className="ml-16 cursor-pointer  mb-2 ">Aceternity</li>
              </ul>
            </div>
            <div className="w-full text-left gap-y-3 ml-10 mt-10">
              <ul>
                <h2 className="text-2xl mb-8   ml-9">About </h2>
                 
                <li className="ml-2  mb-2 cursor-pointer">
                  certified webdeveloper
                </li>
                <li className="ml-2  mb-2  cursor-pointer">
                  pursuing Genrative Ai
                </li>
                <li className="ml-2 cursor-pointer  mb-2  ">Passionate About Ai</li>
                <li className="ml-2 cursor-pointer  mb-2 ">Frontend developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2 md:flex-row flex-col lg:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              
              <a href={info.url}><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
