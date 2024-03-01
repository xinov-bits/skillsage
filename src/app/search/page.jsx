'use client'

import React, { useEffect, useState } from 'react'

// NEXT JS
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// COMPONENTS
import ProductCart from '@/components/sections/ProductCart';
import { Search } from '@/components/core/Search';

// AXIOS
import axios from 'axios';

const Page = () => {

    return (
        <>
            <div className="flex justify-start items-start w-full h-full p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 pb-20 text-[#191919]">
                <div className="flex flex-col justify-start items-center w-full h-full">
                    <div className="flex justify-start items-center w-full text-2xl font-semibold leading-none">
                        Search results for &#34;{searchKeyword}&#34;
                    </div>

                    <Search />
                </div>
            </div>
        </>
    )
}

export default Page