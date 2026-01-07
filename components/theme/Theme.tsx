"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HalfMoon, SunLight } from "iconoir-react";

export const Theme = () => {
  
  const {theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
   setMounted(true)
  }, [])
  if (!mounted) {
    return null;
  }
  
  return (
    <div className=" w-10 h-10 rounded-full align-center flex justify-center items-center hover:scale-110 transition-colors duration-300">
        <button className=" cursor-pointer" onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark') }>
            {theme==='dark'?<SunLight/>:<HalfMoon/>}

          </button>
    </div>
  )
}
