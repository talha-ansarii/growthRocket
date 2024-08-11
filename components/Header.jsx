"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, easeIn } from "framer-motion";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
    const containerVariants = {
        hidden: {
          x: "100%",
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      };
    const linkVariants = {
        hidden: {
          opacity: 0,
          x: 50,
          transition: {
            duration: 0.3,
          },
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
          },
        },
      };
  return (
    <div className="w-full relative p-4 ">
      <div className="w-[80%] lg:fixed md:absolute absolute z-[100] left-[50%] translate-x-[-50%] flex justify-between items-center b m-auto">
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" width={48} height={44} alt="logo" />
          <div className="htext md:hidden lg:block hidden">GrowthRocket</div>
        </div>
        <div className="w-[642.7px] hidden  md:hidden  border border-white lg:flex gap-2 rounded-[160px] headerBorder p-[10px] ">
        <div>
          <Link className=" navLinkActive text-[#F58327]" href={"/"}>
            HOME
          </Link>
         

        </div>
        <div>
          <Link className=" navLinks text-white" href={"/"}>
            ABOUT
          </Link>
         

        </div>
        <div>
          <Link className=" navLinks text-white" href={"/"}>
            SERVICES
          </Link>
         

        </div>
        <div>
          <Link className=" navLinks text-white" href={"/"}>
            PROJECTS
          </Link>
         

        </div>
        <div>
          <Link className=" navLinks text-white" href={"/"}>
            REVIEWS
          </Link>
         

        </div>
        <div>
          <Link className=" navLinks text-white" href={"/"}>
            CONTACT
          </Link>
         

        </div>
        
        </div>
        <Link href={"#"} className="goViral lg:flex md:hidden hidden gap-1 justify-center items-center">
        <div>
            GO VIRAL

        </div>
        <img src="/SVG.svg" alt="svg" />
        </Link>
        {!isOpen ? (
                  <button
                  className="md:mr-[-40px] lg:hidden  "
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <svg
                      className="block h-6 w-6 rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                  className="md:mr-[-40px]"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
      </div>

      <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="fixed md:flex overflow-hidden top-[-30px] playfair  bg-black mt-[110px]   h-[100vh] lg:hidden inset-0 z-[200] justify-center pb-[80px] items-center pl-8 text-font-blue inter font-[600] text-[20px] flex flex-col space-y-[50px]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                  >
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/"
                      >
                        Home
                      </Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/products"
                      >
                        ABOUT
                      </Link>
                    </motion.div>

                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/aboutus"
                      >
                        SERVICES
                      </Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/contactus"
                      >
                        PROJECTS
                      </Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/contactus"
                      >
                        REVIEWS
                      </Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/contactus"
                      >
                        CONTACT
                      </Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <Link
                        className="flex gap-3 text-[#FFFFFF] text-[30px] leading-[28.66px] text-center -10"
                        href="/contactus"
                      >
                        GO VIRAL
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
    </div>
  );
};

export default Header;
