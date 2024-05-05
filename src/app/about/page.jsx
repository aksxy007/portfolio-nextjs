"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER  */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          {/* BIOGRAPHY CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-sm md:text-lg lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              illum earum molestias ullam recusandae velit repudiandae, eaque
              iste sapiente deleniti ipsam provident consequatur, qui
              exercitationem omnis minus laborum voluptas quam dolores.
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>

            <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* SKILLS CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST  */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Machine learning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Deep Learning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Big Data
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Pyspark
              </div>
            </div>
            {/* SKILL SCROLL SVG  */}
            <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center pb-48 sm:gap-9">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST  */}
            <div className="">
              {/* EXEPERIENCE LIST ITEM  */}
              <div className="flex justify-between h-48 xl:my-0 lg:my-0 md:my-0 sm:my-4">
                {/* LEFT  */}
                <div className="w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-1 md:pl-1 font-semibold rounded-b-lg rounded-s-lg">
                    Associate Software Engineer 3
                  </div>
                  {/* JOB DESC  */}
                  <div className="p-3 text-sm italic">
                    My Current employment. Way worse than previous one.
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July 2024 - Present
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Carelon Global Solutions
                  </div>
                </div>
                {/* CENTER  */}
                <div className="w-1/6 flex justify-center sm:items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full xl:flex lg:flex md:flex sm:hidden bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  <div className="hidden lg:hidden md:hidden sm:flex w-7 h-7 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3 xl:flex lg:flex md:flex sm:hidden"></div>
              </div>
              {/* EXEPERIENCE LIST ITEM  */}
              <div className="flex justify-between h-48 xl:my-0 lg:my-0 md:my-0 sm:my-4">
                {/* LEFT  */}
                <div className="w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 lg:flex xl:flex md:flex sm:hidden">{/* JOB TITLE  */}</div>
                {/* CENTER  */}
                <div className="w-1/6 flex justify-center sm:items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full xl:flex lg:flex md:flex sm:hidden bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  <div className="hidden lg:hidden md:hidden sm:flex w-7 h-7 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 xl:flex xl:flex-col lg:flex-col md:flex-col lg:flex md:flex sm:w-full">
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg xl:block md:block lg:block sm:hidden">
                    Associate Software Engineer 3
                  </div>
                  {/* JOB DESC  */}
                  <div className="p-3 text-sm italic xl:block md:block lg:block sm:hidden">
                    My Current employment. Way worse than previous one.
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold xl:block md:block lg:block sm:hidden">
                    July 2024 - Present
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit xl:block md:block lg:block sm:hidden">
                    Carelon Global Solutions
                  </div>
                  <div className="hidden xl:hidden lg:hidden md:hidden w-full h-full sm:flex ">
                    <div className="hidden w-[40%] sm:flex"></div>
                    <div className="w-full flex flex-col items-start">
                    <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg ">
                      Associate Software Engineer 3
                    </div>
                    {/* JOB DESC  */}
                    <div className="p-3 text-sm italic">
                      My Current employment. Way worse than previous one.
                    </div>
                    {/* JOB DATE  */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      July 2024 - Present
                    </div>
                    {/* JOB COMPANY  */}
                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit ">
                      Carelon Global Solutions
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* EXEPERIENCE LIST ITEM  */}
              <div className="flex justify-between h-48 xl:my-0 lg:my-0 md:my-0 sm:my-4">
                {/* LEFT  */}
                <div className="w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg">
                    Associate Software Engineer 3
                  </div>
                  {/* JOB DESC  */}
                  <div className="p-3 text-sm italic">
                    My Current employment. Way worse than previous one.
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July 2024 - Present
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Carelon Global Solutions
                  </div>
                </div>
                {/* CENTER  */}
                <div className="w-1/6 flex justify-center sm:items-center">
                  {/* LINE  */}
                  <div className="w-1 h-full xl:flex lg:flex md:flex sm:hidden bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  <div className="hidden xl:hidden lg:hidden md:hidden sm:flex w-7 h-7 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3 xl:flex lg:flex md:flex sm:hidden"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 lg:w-1/3 xl:w-1/3">
          <Brain scrollYProgress={scrollYProgress}></Brain>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
