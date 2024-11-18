import React from 'react'

export default function HeroXlScreenBg() {
  return (
    <div
    className="absolute inset-0 left-0 -z-10 w-full h-screen  "
    style={{
      backgroundImage: "url(/custom-bg/hero-bg-1.svg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover", 
      transform:"rotate(900deg)",
      height:"100%",
      width:"100%",
     
    }}
  />
  )
}
