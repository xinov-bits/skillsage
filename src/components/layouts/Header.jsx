'use client'

import React, { useState } from 'react'

// NEXT JS
import Link from 'next/link'
import { useRouter } from 'next/navigation';

// SHADCN UI

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// COMPONENTS
import MobileMenu from '../MobileMenu';

const Header = () => {
    const router = useRouter();

    // MENUs
    const [exploreMenu, setExploreMenu] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // SEARCH
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearchSubmit = async (event) => {
        event.preventDefault();

        router.push(`/search?keyword=${searchKeyword}`)
    }

    return (
        <>
            <div className="fixed z-[500] top-0 flex justify-between sm:justify-between md:justify-center lg:justify-center xl:justify-center items-center w-full h-14 py-2.5 px-4 sm:px-4 md:px-6 lg:px-6 xl:px-6 space-x-2 bg-white border-b border-[#e5e5e5] overflow-hidden select-none">
                <div className="flex justify-start items-center w-full sm:w-full md:w-[14%] lg:w-[14%] xl:w-[14%] h-full bg-white">
                    <Link href={'/'} className="no-focus">
                        <svg className="flex justify-center items-center w-32 h-full" width={48} height={48}>
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/on/demandware/svg/non-critical.svg#icon-skillsage"
                            ></use>
                        </svg>
                    </Link>
                </div>

                <div className="hidden sm:hidden md:flex lg:flex xl:flex justify-center items-center w-[64%] h-full bg-white space-x-2.5">
                    <div className="flex justify-center items-center w-auto h-full">
                        <button className="flex justify-between items-center w-28 h-full px-3 py-4 space-x-1 bg-white border border-[#e5e5e5] hover:bg-[#f7f7f7] active:border-[#c0c0c0] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] rounded leading-none text-sm text-[#191919] font-medium duration-100  no-focus" onClick={() => setExploreMenu(!exploreMenu)}>
                            <div className="flex justify-start items-center"> Explore </div>

                            <svg className="flex justify-end items-center w-4 h-4" width={24} height={24}>
                                <use
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="/on/demandware/svg/non-critical.svg#icon-chevron-down"
                                ></use>
                            </svg>
                        </button>
                    </div>

                    <div className="flex justify-center items-center w-full h-full text-[#191919]">
                        <form className="relative flex justify-center items-center w-full h-full bg-white" htmlFor="search_inp_keyw" onSubmit={handleSearchSubmit}>
                            <div className="absolute left-0 flex justify-center items-center w-8 h-full pointer-events-none">
                                <svg className="flex justify-center items-center w-4 h-4" width={16} height={16}>
                                    <use
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/on/demandware/svg/non-critical.svg#icon-search"
                                    ></use>
                                </svg>
                            </div>

                            <input className="flex justify-center items-center w-full h-full pl-8 p-2 border border-[#e5e5e5] hover:bg-[#f7f7f7] active:border-[#c0c0c0] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] rounded leading-none text-sm font-medium duration-100 bg-transparent placeholder:text-[#292929]  no-focus" placeholder="Search for courses, skills, anything" type="text" name="search_inp_keyw"
                                onChange={(event) => {
                                    setSearchKeyword(event.target.value);
                                }}
                            />
                        </form>
                    </div>
                </div>

                <div className="hidden sm:hidden md:flex lg:flex xl:flex justify-end items-center w-[22%] h-full bg-white space-x-2 text-[#191919]">
                    <div className="flex justify-center items-center w-auto h-full">
                        <button className="flex justify-center items-center w-full h-full px-2.5 bg-white border border-[#e5e5e5] hover:bg-[#f7f7f7] active:border-[#c0c0c0] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] rounded leading-none text-sm font-medium no-focus">
                            Sign In
                        </button>
                    </div>

                    <div className="flex justify-center items-center w-auto h-full">
                        <button className="flex justify-center items-center w-full h-full px-2.5 bg-[#0f102e] border border-[#0f102e] hover:bg-[#1a1c48] active:border-[#0c0d26] focus:border-[#0c0d26] focus:ring-[2.5px] focus:ring-[#9cb9d9] text-white rounded leading-none text-sm font-medium space-x-1 no-focus">
                            <svg className="flex justify-center items-center w-5 h-5" strokeWidth={1.5}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <div>
                                Sign Up
                            </div>
                        </button>
                    </div>
                </div>


                <div className="flex sm:flex md:hidden lg:hidden xl:hidden justify-end items-center w-full h-full text-[#191919]">
                    <button className="flex justify-center items-center w-8 h-8 bg-white cursor-pointer  no-focus" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="flex justify-center items-center w-full h-full" strokeWidth={1}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {exploreMenu && <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                        ease: 'linear',
                        delay: 0,
                        duration: 0.1,
                    }}
                    className="fixed z-[550] top-0 left-0 flex justify-cecnter items-start w-full h-full"
                >
                    <div className="absolute z-[1] flex justify-center items-center w-full h-full" onClick={() => setExploreMenu(false)} />

                    <div className="z-[2] flex justify-start items-start w-[45%] h-auto mt-12 ml-48 px-2 py-1 bg-white border border-[#e5e5e5] rounded space-x-4">
                        <div className="flex flex-col justify-end items-center w-full">
                            <div className="flex justify-start items-center w-full px-2 py-2 font-semibold text-sm"> CREATE </div>

                            <ul className="flex flex-col justify-start items-center w-full mt-1 py-1 border-t border-[#e5e5e5] select-none">
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Animation
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Creative Writing
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Film & Video
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Fine Art
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Graphic Design
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Illustration
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Softwares
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    UI/UX Design
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-end items-center w-full">
                            <div className="flex justify-start items-center w-full px-2 py-2 font-semibold text-sm"> BUILD </div>

                            <ul className="flex flex-col justify-start items-center w-full mt-1 py-1 border-t border-[#e5e5e5] select-none">
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Freelance & Entrepreneurship
                                </li>
                                <li className="flex justify-start items-center w-full p-2.5 rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] leading-none cursor-pointer">
                                    Marketing
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>


            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </>
    )
}

export default Header