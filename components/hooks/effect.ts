"use client"

import { useEffect, useRef, useState } from "react";



export function useInView<T extends HTMLElement>() {

    const ref = useRef<T | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current

        if (!el) {
            return
        }

        const observer = new IntersectionObserver(([entry]) =>
            setIsVisible(entry.isIntersecting), { threshold: 0.2 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return { ref, isVisible }

}