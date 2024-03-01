'use client'

import React, { useEffect, useState } from 'react'

// NEXT JS
import Link from 'next/link'
import Image from 'next/image';

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// COMPONENTS
import ProductCart from '@/components/sections/ProductCart';

// AXIOS
import axios from 'axios';

const Page = () => {
    return (
        <>
            <div className="flex justify-start items-start w-full h-full p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 pb-20 text-[#191919]">
                <div className="flex flex-col justify-start items-center w-full h-full">
                    <div className="flex justify-start items-center w-full text-2xl font-semibold leading-none">
                        Contact Us
                    </div>

                    <div className="flex justify-start items-center w-full mt-1 text-base leading-none text-[#767676]">
                        Let us know how we can help.
                    </div>

                    <div className="block sm:block md:flex lg:flex xl:flex justify-start items-start w-full mt-6 space-x-0 sm:space-x-0 md:space-x-6 lg:space-x-6 xl:space-x-6 space-y-4 sm:space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0 text-[#191919]">
                        <div className="flex justify-start items-start w-full sm:w-full md:w-[16rem] lg:w-[16rem] xl:w-[16rem] select-none">
                            <button className="flex flex-col justify-start items-center w-full h-full p-2.5 bg-white rounded border border-[#e5e5e5] hover:border-[#c0c0c0] active:border-[#767676] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] no-focus">
                                <div className="flex justify-start items-center w-full">
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded border border-[#e5e5e5]">
                                        <svg className="w-5 h-5" strokeWidth={1.5}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-center w-full mt-4 leading-none">
                                    <div className="flex justify-start items-center w-full leading-none text-base font-semibold">
                                        Chat to support
                                    </div>
                                    <div className="flex justify-start items-center w-full mt-1 text-sm leading-none text-[#767676]">
                                        We're here to help.
                                    </div>
                                </div>

                                <div className="flex justify-start items-center w-full mt-4 leading-none text-sm font-bold underline">
                                    support@skillsage.com
                                </div>
                            </button>
                        </div>

                        <div className="flex justify-start items-start w-full sm:w-full md:w-[16rem] lg:w-[16rem] xl:w-[16rem] select-none">
                            <button className="flex flex-col justify-start items-center w-full h-full p-2.5 bg-white rounded border border-[#e5e5e5] hover:border-[#c0c0c0] active:border-[#767676] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] no-focus">
                                <div className="flex justify-start items-center w-full">
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded border border-[#e5e5e5]">
                                        <svg className="w-5 h-5" strokeWidth={1.5}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-center w-full mt-4 leading-none">
                                    <div className="flex justify-start items-center w-full leading-none text-base font-semibold">
                                        Visit us
                                    </div>
                                    <div className="flex justify-start items-center w-full mt-1 text-sm leading-none text-[#767676]">
                                        Visit our office HQ.
                                    </div>
                                </div>

                                <div className="flex justify-start items-center w-full mt-4 leading-none text-sm font-bold underline">
                                    View on Google Maps
                                </div>
                            </button>
                        </div>

                        <div className="flex justify-start items-start w-full sm:w-full md:w-[16rem] lg:w-[16rem] xl:w-[16rem] select-none">
                            <button className="flex flex-col justify-start items-center w-full h-full p-2.5 bg-white rounded border border-[#e5e5e5] hover:border-[#c0c0c0] active:border-[#767676] focus:border-[#c0c0c0] focus:ring-[2.5px] focus:ring-[#f1f1f1] no-focus">
                                <div className="flex justify-start items-center w-full">
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded border border-[#e5e5e5]">
                                        <svg className="w-5 h-5" strokeWidth={1.5}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-center w-full mt-4 leading-none">
                                    <div className="flex justify-start items-center w-full leading-none text-base font-semibold">
                                        Call us
                                    </div>
                                    <div className="flex justify-start items-center w-full mt-1 text-sm leading-none text-[#767676]">
                                        Mon-Fri from 8pm to 5pm
                                    </div>
                                </div>

                                <div className="flex justify-start items-center w-full mt-4 leading-none text-sm font-bold underline">
                                    +91 XXX XXX XXXX
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page