"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function ThemeSwitch({svgSize,className=" "}:any) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div></div>
    );

  if (resolvedTheme === "dark") {
    return (
      <div className={`inline-flex items-center `}>
        <FaSun
          className={`${svgSize} ${className} fill-black stroke-black dark:stroke-white dark:fill-white`}
          onClick={() => setTheme("light")}
        />
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div className={`inline-flex items-center `}>
        <BsFillMoonStarsFill
          className={`${svgSize} ${className} fill-[#3b3b3b] stroke-black dark:stroke-white dark:fill-white`}
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
}
