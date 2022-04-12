import React from 'react'

function Menus() {
  return (
    <div className="fixed w-full bottom-0 lg:px-5 px-5 lg:pb-20 z-70">
    <div className="hidden lg:flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0 space-x-10">
      <a href="/">
        <h1 className="text-5xl text-white font-libre hover:text-[#D45B27]"> Home</h1>
      </a>
      <a href="/team">
        <h1 className="text-5xl text-white font-libre  hover:text-[#D45B27]"> Team</h1>
      </a>
      <a href="/careers">
        <h1 className="text-5xl text-white font-libre hover:text-[#D45B27]"> Careers</h1>
      </a>
      <a href="/about">
        <h1 className="text-5xl text-white font-libre hover:text-[#D45B27]"> About</h1>
      </a>
    </div>
  </div>
  )
}

export default Menus