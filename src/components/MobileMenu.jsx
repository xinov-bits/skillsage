'use client';

// REACT JS
import React, { useState, useEffect, useContext, createContext } from 'react'

// NEXT JS
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// SUB COMPONENTS

// FRAMER
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const menuItems = [
        {
            'name': 'home',
            'url': '/',
        },
        {
            'name': 'courses',
            'url': '/',
        },
        {
            'name': 'about us',
            'url': '/',
        },
        {
            'name': 'contact',
            'url': '/',
        },
    ]

    return (
        <AnimatePresence>
            {(isMobileMenuOpen) && (
                <motion.div className="fixed z-[600] top-0 right-0 flex justify-end items-center w-full h-screen select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        ease: "linear",
                    }}
                >
                    <motion.div className="absolute z-[605] top-0 right-0 flex w-full h-full bg-black/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            ease: "linear",
                            delay: 0.2,
                        }}
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                        }}
                    ></motion.div>

                    <motion.div className="z-[610] flex justify-end items-center w-[90%] h-screen select-none"
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 400, opacity: 0 }}
                        transition={{
                            ease: "linear",
                        }}
                    >
                        <div className="absolute z-[610] top-0 left-0 flex justify-center items-center w-full h-full" onClick={() => {
                            setIsMobileMenuOpen(false);
                        }} />

                        <div className="relative z-[620] flex flex-col justify-start items-start w-full sm:w-full md:w-[32%] lg:w-[32%] xl:w-[32%] h-full bg-white">
                            <div className="flex justify-between items-center w-full h-14 bg-white border-b border-[#e5e5e5]">
                                <div className="flex justify-start items-center w-auto px-4 sm:px-4 md:px-6 lg:px-6 xl:px-6 py-4 sm:py-4 md:py-6 lg:py-6 xl:py-6 text-lg font-medium text-[#191919] leading-none cursor-pointer">
                                    Menu
                                </div>

                                <button className="flex justify-center items-center w-14 h-full cursor-pointer bg-white no-focus" onClick={() => {
                                    setIsMobileMenuOpen(false);
                                }}>
                                    <svg className="flex justify-center items-center w-10 h-10 text-[#292929]" width={24} height={24}>
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/on/demandware/svg/non-critical.svg#icon-close"
                                        ></use>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex justify-start items-start w-full h-full">
                                <ul className="flex flex-col justify-start items-center w-full h-full p-2 space-y-2">
                                    {menuItems.map((item, index) => <li key={index} className="flex justify-start items-center w-full h-auto">
                                        <Link href={item.url} className="flex justify-start items-center w-full h-full">
                                            <button className="flex justify-start items-center w-full h-full p-2.5 font-medium leading-none capitalize rounded bg-white hover:bg-[#f7f7f7] border border-white hover:border-[#e5e5e5] active:border-[#c0c0c0] no-focus cursor-pointer">
                                                {item.name}
                                            </button>
                                        </Link>
                                    </li>)}
                                </ul>
                            </div>

                            <div className="absolute bottom-0 flex justify-start items-end w-full h-auto p-2">
                                <div className="flex justify-center w-full h-auto space-x-2">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <button className="flex justify-center items-center w-full h-full p-3 bg-white border border-[#e5e5e5] hover:bg-[#f7f7f7] active:border-[#c0c0c0] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] rounded leading-none text-sm font-medium no-focus">
                                            Sign In
                                        </button>
                                    </div>

                                    <div className="flex justify-center items-center w-full h-full">
                                        <button className="flex justify-center items-center w-full h-full p-3 bg-[#0f102e] border border-[#0f102e] hover:bg-[#1a1c48] active:border-[#0c0d26] focus:border-[#0c0d26] focus:ring-[2.5px] focus:ring-[#9cb9d9] text-white rounded leading-none text-sm font-medium no-focus">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>)}
        </AnimatePresence>
    )
}

export default MobileMenu