'use client'
// import Image from "next/image";
import {useState, useEffect} from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import MainHeader from "./components/header/MainHeader";

export default function Home() {


    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    }, []);

  return (
    <main className={`h-screen text-black dark:text-white bg-[#D6DBDC] dark:bg-[#313e51] flex flex-col justify-start items-center gap-8 ${theme === 'light' ? styles.lightBackground : styles.darkBackground} ${styles.body}`}
    style={{

    }}>
      <MainHeader />
      <div className="container w-full h-[70%] max-w-[85%] md:max-w-[1160px] flex flex-col md:flex-row items-start justify-between md:justify-between border">
      <div className="left w-[465px] flex flex-col items-start">
        <h1 className="text-[60px] flex flex-col items-start">Welcome to the <strong> Frontend Quiz! </strong></h1>
        <p><i>Pick a subject to get started</i></p>
      </div>

      <div className="right w-[564px] flex flex-col gap-6">
        <div className="categ-1 bg-white dark:bg-[#3e4f68] h-[96px] px-4 flex items-center gap-8 rounded-2xl">
          <span className="categ-icon w-14 h-14 bg-[#FFF1E9] p-1 flex justify-center items-center rounded-lg">
            <Image
            src="/assets/images/icon-html.svg"
            width={40}
            height={40}
            alt="HTML Icon"
            />
          </span>
          <p className="text-[28px]"><b>HTML</b></p>
        </div>

        <div className="categ-2 bg-white dark:bg-[#3e4f68] h-[96px] px-4 flex items-center gap-8 rounded-2xl">
          <span className="categ-icon w-14 h-14 bg-[#FFF1E9] p-1 flex justify-center items-center rounded-lg">
            <Image
            src="/assets/images/icon-css.svg"
            width={40}
            height={40}
            alt="HTML Icon"
            />
          </span>
          <p className="text-[28px]"><b>CSS</b></p>
        </div>

        <div className="categ-3 bg-white dark:bg-[#3e4f68] h-[96px] px-4 flex items-center gap-8 rounded-2xl">
          <span className="categ-icon w-14 h-14 bg-[#FFF1E9] p-1 flex justify-center items-center rounded-lg">
            <Image
            src="/assets/images/icon-js.svg"
            width={40}
            height={40}
            alt="HTML Icon"
            />
          </span>
          <p className="text-[28px]"><b>Javascript</b></p>
        </div>

        <div className="categ-4 bg-white dark:bg-[#3e4f68] h-[96px] px-4 flex items-center gap-8 rounded-2xl">
          <span className="categ-icon w-14 h-14 bg-[#FFF1E9] p-1 flex justify-center items-center rounded-lg">
            <Image
            src="/assets/images/icon-accessibility.svg"
            width={40}
            height={40}
            alt="HTML Icon"
            />
          </span>
          <p className="text-[28px]"><b>Accessibility</b></p>
        </div>
      </div>
      </div>
    </main>
  );
}
