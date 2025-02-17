"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
 
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingDockFooter } from "@/components/ui/FloatingFooter";
 

const Home = () => {
  return (
    <main className="relative   flex justify-center items-center flex-col overflow-hidden bg-gradient-to-t from-blue-950 to-black-950 mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}   />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        {/* <FloatingDockFooter/>  */}
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Home;