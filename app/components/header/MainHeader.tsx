"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const MainHeader = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <header className="w-full max-w-[85%] md:max-w-[1160px] h-20 flex justify-end items-center border">
      <div className="theme-toggle-box flex gap-2">
      {theme === "light" ? (
        <Image
          src="/assets/images/icon-sun-dark.svg"
          width={20}
          height={20}
          alt="Iight-theme Icon"
        />): (
            <Image
          src="/assets/images/icon-sun-light.svg"
          width={20}
          height={20}
          alt="Iight-theme Icon"
        />
        )}

        {theme === "light" ? (
          <div
            onClick={toggleTheme}
            className="theme-toggle bg-[#A729F5] w-10 h-6 px-1 flex items-center rounded-full"
          >
            <div className="w-4 h-4 bg-white z-50 rounded-full"></div>
          </div>
        ) : (
          <div
            onClick={toggleTheme}
            className="theme-toggle bg-[#A729F5] w-10 h-6 px-1 flex items-center justify-end rounded-full"
          >
            <div className="w-4 h-4 bg-white z-50 rounded-full"></div>
          </div>
        )}
         {theme === "light" ? (
        <Image
          src="/assets/images/icon-moon-dark.svg"
          width={20}
          height={20}
          alt="Dark-theme Icon"
        />) : (
        <Image
        src="/assets/images/icon-moon-light.svg"
        width={20}
        height={20}
        alt="Dark-theme Icon"
      />)}
      </div>
    </header>
  );
};
export default MainHeader;
