"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    <div>
        <button onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark') }>
            {theme==='dark'?'Dark':'Light'}
          </button>
    </div>
  )
}
