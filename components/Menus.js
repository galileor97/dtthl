import Link from 'next/link'
import React from 'react'

function Menus() {
  return (
    <div className="fixed w-full bottom-0 lg:px-5 px-5 lg:pb-20 z-70">
    <div className="hidden lg:flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0 space-x-10">
      <Link href="/">
        <a className="text-5xl text-white font-libre hover:text-[#EA3131]">Home</a>
      </Link>
      <Link href="/team">
        <a className="text-5xl text-white font-libre  hover:text-[#EA3131]"> Team</a>
      </Link>
      <Link href="/careers">
        <a className="text-5xl text-white font-libre hover:text-[#EA3131]"> Careers</a>
      </Link>
      <Link href="/about">
        <a className="text-5xl text-white font-libre hover:text-[#EA3131]"> About</a>
      </Link>
    </div>
  </div>
  )
}

export default Menus