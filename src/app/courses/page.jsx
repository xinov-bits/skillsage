'use client'

import React, { useEffect, useState } from 'react'

// NEXT JS
import Link from 'next/link'

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// COMPONENTS
import ProductCart from '@/components/sections/ProductCart';

// AXIOS
import axios from 'axios';

const Page = () => {
    const popularCourses = [
        {
            url: 'a_b_c',
            name: 'Notion Masterclass: Maximise Your Productivity & Organisation',
            image: 'https://i.ibb.co/qF3ppYX/original.webp',
            price: 4999,
            description: "Notion is one of the best productivity apps out there. It's designed to make organising and systemising your personal or professional life much simpler, and much more productive.",
            category: 'Softwares',
            duration: '2 months',
        },
    ]


    // GET COURSES
    const [courses, setCourses] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getcourses`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setCourses(response.data);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-start items-start w-full h-full p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 pb-20 text-[#191919]">
                <div className="flex flex-col justify-start items-center w-full h-full">
                    <div className="flex justify-start items-center w-full text-2xl font-semibold leading-none">
                        All courses
                    </div>

                    {<div className="flex justify-start items-center w-full h-6 text-base leading-none text-[#767676]">
                        {!(courses == [] || courses === undefined || courses === null || courses === '' || courses.length === 0) &&
                            `${courses?.length} courses`
                        }
                    </div>}


                    <div className="flex justify-start items-center w-full mt-6">
                        {(courses == [] || courses === undefined || courses === null || courses === '' || courses.length === 0) && <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8 justify-center items-center w-full">
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[17rem] lg:w-[17rem] xl:w-[17rem] h-[18.6rem] sm:h-[18.6rem] md:h-[16.5rem] lg:h-[16.5rem] xl:h-[16.5rem] bg-[#ededed]" id="skeleton__anim" />
                        </div>}

                        {!(courses == [] || courses === undefined || courses === null || courses === '' || courses.length === 0) && <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8 justify-center items-center w-full">
                            {Object.keys(courses).map((item) => {
                                return <ProductCart key={courses[item]._id}
                                    url={courses[item].slug}
                                    name={courses[item].title}
                                    image={courses[item].dimg}
                                    price={courses[item].price}
                                    description={courses[item].desc}
                                    category={courses[item].category}
                                    duration={courses[item].duration}
                                />
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page