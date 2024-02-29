'use client'

import React, { useState } from 'react'

// NEXT JS
import Link from 'next/link'
import Image from 'next/image'

// SHADCN UI

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

const ProductCart = ({ url, name, image, price, description, category, duration }) => {
    let FormatedMoney = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });


    // REVIEWS
    const reviewMean = 4.5;

    const renderStarsCustom = (count, size) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<div key={i}>
                <svg className={`${size} text-[#ce8f14] fill-[#ffd700]`}>
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/on/demandware/svg/non-critical.svg#icon-star_slug"></use>
                </svg>
            </div>);
        }
        return stars;
    };

    const renderStarsCustomE = (count, size) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<div key={i}>
                <svg className={`${size} text-[#8c8c8c]`}>
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/on/demandware/svg/non-critical.svg#icon-e-star_slug"></use>
                </svg>
            </div>);
        }
        return stars;
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    ease: 'linear',
                    delay: 0,
                    // duration: 0.1,
                }}
                className="flex justify-center items-start w-full h-full border border-[#e5e5e5] rounded text-[#191919] shadow-sm hover:shadow-md hover:shadow-black/5 overflow-hidden duration-100"
            >
                <div className="flex flex-col justify-start items-start w-full h-auto">
                    <div className="relative flex justify-start items-center w-full h-auto bg-[#f7f7f7] select-none overflow-hidden">
                        <div className="absolute top-0 flex justify-center items-center w-full h-full bg-gradient-to-b from-black to-transparent opacity-30 pointer-events-none" />

                        <Link href={`/course/${url}`} className="no-focus">
                            <Image className="flex justify-center items-center w-full h-full"
                                src={image}
                                width={800}
                                height={800}
                                alt={url}
                            />
                        </Link>
                    </div>

                    <div className="flex justify-between items-center w-full px-2 py-1.5 capitalize space-x-1 select-none">
                        <div className="flex justify-start items-center w-auto space-x-1 cursor-pointer text-sm">
                            <div className="flex justify-start items-center w-auto">
                                {renderStarsCustom(Math.round(reviewMean), 'w-3.5 h-3.5')}
                                {renderStarsCustomE((5 - Math.round(reviewMean)), 'w-3.5 h-3.5')}
                            </div>

                            <div className="flex justify-start items-center w-auto text-[#767676]">
                                {reviewMean}
                            </div>
                        </div>

                        <div className="flex justify-start items-center w-auto space-x-1 cursor-pointer text-[#767676] font-medium">
                            <svg className="w-4 h-4"
                                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <div className=""> {duration} </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full px-2 pb-2">
                        <Link href={`/course/${url}`} className="flex justify-start items-center w-full  no-focus">
                            <div className="flex justify-start items-center w-full h-auto text-base font-semibold leading-tight hover:underline decoration-[0.5px] underline-offset-1 decoration-[#767676]">
                                {name}
                            </div>
                        </Link>

                        <div className="flex justify-start items-center w-full h-auto mt-1 text-lg font-medium leading-tight select-none">
                            {FormatedMoney.format(price)}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProductCart