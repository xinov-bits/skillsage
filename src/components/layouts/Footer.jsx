'use client'

// React
import React from 'react'
import { useState, useRef, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

// Next JS
import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'

const Footer = () => {
    const lists = [
        {
            'name': 'Courses',
            'lists': [
                'Home',
                'Creative Writing',
                'Graphic Design',
                'Illustration',
                'Softwares',
                'UI/UX Design',
            ]
        },
        {
            'name': 'Community',
            'lists': [
                'Team Plans',
                'Refer a Friend',
                'Limited Memberships',
                'Scholarships',
                'Free Classes',
            ]
        },
        {
            'name': 'Teaching',
            'lists': [
                'Become a teacher',
                'Teacher Help Center',
            ]
        },
    ]

    return (
        <div className="bottom-0 flex justify-center items-end w-full h-full">
            <div className="block justify-center items-center w-full px-8 py-6 bg-[#f7f7f7] text-[#191919] border-t border-[#e5e5e5] divide-y divide-[#e5e5e5]">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-y-4 sm:gap-y-4 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 justify-center items-start w-full">
                    {lists.map((k, index) =>
                        <ul key={index} className="block justify-center items-center w-full text-sm space-y-1.5">
                            <li className="flex justify-start items-center w-auto text-base font-semibold select-none">
                                {k.name}
                            </li>

                            {(k.lists).map((list) => <li key={list} className="flex justify-start items-center w-auto mt-1 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                                {list}
                            </li>)}
                        </ul>
                    )}

                    <ul className="block justify-center items-center w-full text-sm space-y-1.5 select-none">
                        <li className="flex justify-start items-center w-full mb-1 text-base font-semibold"> Mobile </li>

                        <li className="flex justify-start items-center w-full hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            <Image className="flex justify-center items-center w-auto h-10"
                                src={'/images/icons/appstore.png'}
                                width={120}
                                height={35}
                                alt={'appstore_ficon'}
                            />
                        </li>
                        <li className="flex justify-start items-center w-full hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            <Image className="flex justify-center items-center w-auto h-10"
                                src={'/images/icons/googleplay.png'}
                                width={120}
                                height={35}
                                alt={'googleplay_ficon'}
                            />
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center w-full pt-6 mt-6 select-none">
                    <ul className="hidden sm:hidden md:flex lg:flex xl:flex justify-start items-center w-full text-sm">
                        <li className="flex justify-start items-center">
                            © Skill Sage, Inc. 2024
                        </li>
                        <li className="flex justify-start items-center pl-10 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            Help
                        </li>
                        <li className="flex justify-start items-center pl-10 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            Privacy
                        </li>
                        <li className="flex justify-start items-center pl-10 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            Terms
                        </li>
                        <li className="flex justify-start items-center pl-10 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            Your Privacy Choices

                            <svg className="ml-2" width={24} height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.92 16.64h5.44l2.48-9.28H5.92c-2.56 0-4.64 2.08-4.64 4.64 0 2.56 2.08 4.64 4.64 4.64z"
                                    fill="#fff"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.08 6.4H5.92C2.8 6.4.32 8.88.32 12c0 3.12 2.48 5.6 5.6 5.6h12.16c3.12 0 5.6-2.48 5.6-5.6 0-3.12-2.56-5.6-5.6-5.6zM1.28 12c0-2.56 2.08-4.64 4.64-4.64h7.92l-2.48 9.28H5.92c-2.56 0-4.64-2.08-4.64-4.64z"
                                    fill="#06F"
                                />
                                <path
                                    d="M19.68 9.6c.16.16.16.48 0 .64L18 12l1.76 1.76c.16.16.16.48 0 .64-.16.16-.48.16-.64 0l-1.76-1.76-1.76 1.76c-.16.16-.48.16-.64 0a.487.487 0 010-.64L16.64 12l-1.76-1.76a.487.487 0 010-.64c.16-.16.48-.16.64 0l1.76 1.76 1.76-1.76c.16-.16.48-.16.64 0z"
                                    fill="#fff"
                                />
                                <path
                                    d="M10.16 9.68c.16.16.24.48.08.64l-3.36 3.92c-.08.08-.16.16-.24.16-.16.08-.4.08-.56-.08l-1.76-1.76a.487.487 0 010-.64c.16-.16.48-.16.64 0l1.44 1.36 3.04-3.6c.16-.16.48-.16.72 0z"
                                    fill="#06F"
                                />
                            </svg>
                        </li>
                    </ul>

                    <ul className="flex sm:flex md:hidden lg:hidden xl:hidden flex-col justify-start items-center w-full text-sm">
                        <li className="flex justify-start items-center w-full">
                            © Skill Sage, Inc. 2024
                        </li>

                        <div className="flex justify-start items-center w-full my-2 space-x-8">
                            <li className="flex justify-start items-center hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                                Help
                            </li>
                            <li className="flex justify-start items-center hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                                Privacy
                            </li>
                            <li className="flex justify-start items-center hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                                Terms
                            </li>
                        </div>

                        <li className="flex justify-start items-center w-full mt-2 hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676] cursor-pointer">
                            Your Privacy Choices

                            <svg className="ml-2" width={24} height={24}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.92 16.64h5.44l2.48-9.28H5.92c-2.56 0-4.64 2.08-4.64 4.64 0 2.56 2.08 4.64 4.64 4.64z"
                                    fill="#fff"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.08 6.4H5.92C2.8 6.4.32 8.88.32 12c0 3.12 2.48 5.6 5.6 5.6h12.16c3.12 0 5.6-2.48 5.6-5.6 0-3.12-2.56-5.6-5.6-5.6zM1.28 12c0-2.56 2.08-4.64 4.64-4.64h7.92l-2.48 9.28H5.92c-2.56 0-4.64-2.08-4.64-4.64z"
                                    fill="#06F"
                                />
                                <path
                                    d="M19.68 9.6c.16.16.16.48 0 .64L18 12l1.76 1.76c.16.16.16.48 0 .64-.16.16-.48.16-.64 0l-1.76-1.76-1.76 1.76c-.16.16-.48.16-.64 0a.487.487 0 010-.64L16.64 12l-1.76-1.76a.487.487 0 010-.64c.16-.16.48-.16.64 0l1.76 1.76 1.76-1.76c.16-.16.48-.16.64 0z"
                                    fill="#fff"
                                />
                                <path
                                    d="M10.16 9.68c.16.16.24.48.08.64l-3.36 3.92c-.08.08-.16.16-.24.16-.16.08-.4.08-.56-.08l-1.76-1.76a.487.487 0 010-.64c.16-.16.48-.16.64 0l1.44 1.36 3.04-3.6c.16-.16.48-.16.72 0z"
                                    fill="#06F"
                                />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer