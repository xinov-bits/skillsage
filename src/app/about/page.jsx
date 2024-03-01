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
            <div className="flex justify-start items-start w-full h-full p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 pb-10 text-[#191919]">
                <div className="flex flex-col justify-start items-center w-full h-full">
                    <div className="flex justify-start items-center w-full text-2xl font-semibold leading-none">
                        About Us
                    </div>

                    <div className="flex justify-start items-start w-full mt-6">
                        <div className="flex justify-start items-start w-auto select-none">
                            <span className="block sm:block md:flex lg:flex xl:flex justify-start items-start w-auto select-none text-wrap text-[#767676] float-right">
                                <span className="cursor-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odio et laudantium <b>consequuntur</b> eum deleniti quam, nisi sint tempora officia, ipsum <b>accusantium</b> iste tenetur inventore? Aspernatur quod nulla ullam qui minus voluptatibus provident harum, necessitatibus esse expedita deserunt ratione quibusdam nesciunt, maxime atque natus <b>voluptas</b> laudantium fugit tempore sit, temporibus vitae dolore consequatur. Perferendis recusandae corrupti reprehenderit aliquam, temporibus minus, at quisquam quis consequuntur, eius quae iusto deserunt.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, labore blanditiis! Voluptate voluptatem, voluptatum quam quibusdam provident ipsum, voluptas quidem ab veritatis velit aut quia enim sint dolores quis saepe perspiciatis nobis. Ducimus eligendi itaque adipisci error? Esse quae sint aliquid hic?
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quisquam officia laborum rem quos, ipsam nostrum laudantium ut laboriosam consequuntur maxime cum beatae, eveniet nam eius nihil incidunt voluptatum quibusdam voluptatibus voluptatem. Minima blanditiis vitae inventore, delectus eos rem saepe fugit a quo rerum consequuntur fugiat aut dolor, dolorum ut nemo et ducimus? Culpa, saepe? Ipsam cumque earum explicabo voluptatibus? Sint quia tempore molestiae assumenda, deserunt tempora provident reprehenderit velit labore omnis voluptatem numquam. Laboriosam quibusdam unde, necessitatibus tempore accusantium nobis aliquid, dolorum pariatur laborum dolor, id quo!
                                </span>

                                <br className="hidden sm:hidden md:block lg:block xl:block" clear="left" />

                                <div className="flex flex-col justify-center items-center w-full h-full m-4 mx-0 sm:mx-0 md:mx-4 lg:mx-4 xl:mx-4 mt-8 sm:mt-8 md:mt-4 lg:mt-4 xl:mt-4">
                                    <Image className="flex justify-center items-center w-auto h-auto rounded-full cursor-pointer"
                                        src={'https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg'}
                                        width={800}
                                        height={800}
                                        alt={'about_us_img'}
                                    />

                                    <div className="flex flex-col justify-center items-center w-full h-full mt-1">
                                        <div className="flex justify-center items-center w-full h-full text-xl font-bold text-[#191919]">
                                            John Doe
                                        </div>
                                        <div className="flex justify-center items-center w-full h-full leading-none text-base font-normal text-[#767676]">
                                            CEO, Founder
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page