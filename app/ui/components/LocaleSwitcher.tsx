"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { i18n } from "@/i18n.config"
import { MdOutlineLanguage } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import useComponentVisible from "./useComponentVisible";

export default function LocaleSwitcher({svgSize}:{svgSize:any}) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();
  
  return (
    <div className="relative">
      <button
        ref={ref}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-white rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <FaEarthAmericas className={`${svgSize} duration-25 delay-75 dark:fill-white fill-gray-500`} />
      </button>
      {isComponentVisible && (
        <DropdownMenu>
          { Object.entries(i18n.locales).map(([key, val]) =>{
            return (
              <li
                key={key}
                className="h-12 flex items-center rounded-var(--border-radius) transition-background var(--speed) p-2"
              >
                <Link href={redirectedPathName(key)} className="h-12 flex items-center rounded-var(--border-radius) transition-background var(--speed) p-2" >
                  {val}
                </Link>
              </li>
            );
          })}
        </DropdownMenu>
      )}
    </div>
  );
}

function DropdownMenu({ children }: any) {

  return (
    <div className=" z-50 bg-gray-100/75 dark:bg-gray-900/75  border shadow-xl border-gray-300 dark:border-gray-800  rounded-xl absolute  origin-bottom-left  transform -translate-x-1/2 p-4 overflow-hidden transition-height  ease">
      <div>
        <div className="menu">{children}</div>
      </div>
    </div>
  );
}
