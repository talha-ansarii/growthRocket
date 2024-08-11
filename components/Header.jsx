import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full p-4 ">
      <div className="w-[80%] fixed z-[100] left-[50%] translate-x-[-50%] flex justify-between items-center b m-auto">
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" width={48} height={44} alt="logo" />
          <div className="htext">GrowthRocket</div>
        </div>
        <div className="w-[642.7px]  border border-white flex gap-2 rounded-[160px] headerBorder p-[10px] ">
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
        <Link href={"#"} className="goViral flex gap-1 justify-center items-center">
        <div>
            GO VIRAL

        </div>
        <img src="/SVG.svg" alt="svg" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
