import React from 'react'

function TeamsCard() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
        <section className="grid lg:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
            <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-[#D45B27] py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">

                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">Mikey</h1>
                <h2 className="font-bold mb-5 text-gray-800">Developer</h2>
                <p className="text-sm leading-relaxed text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </article>

            <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-[#EA3131] py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">Galil</h1>
                <h2 className="font-bold mb-5 text-gray-800">UI/UX Engineer</h2>
                <p className="text-sm leading-relaxed text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </article>

            <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-[#D45B27] py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">Reymaru</h1>
                <h2 className="font-bold mb-5 text-gray-800">Artist</h2>
                <p className="text-sm leading-relaxed text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </article>

            <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-[#EA3131] py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                
                <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">Vieri</h1>
                <h2 className="font-bold mb-5 text-gray-800">Animator</h2>
                <p className="text-sm leading-relaxed text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                </p>
            </article>
        </section>
    </section>
  )
}

export default TeamsCard