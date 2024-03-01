'use client'

import React, { useEffect, useState } from 'react'

// NEXT JS
import Link from 'next/link'
import Image from "next/image";

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// COMPONENTS
import ProductCart from "@/components/sections/ProductCart";

// AXIOS
import axios from 'axios';

export default function Home() {
  const [popularCourses, setPopularCourses] = useState([]);


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

  useEffect(() => {
    for (let i = 0; i < courses.length; i++) {
      const limit = [0, 1, 2, 3];

      const myArr = [];

      for (let index = 0; index < limit.length; index++) {
        myArr.push(courses[i++]);
      }

      setPopularCourses(myArr)
    }
  }, [courses])

  return (
    <>
      <main className="flex justify-cemter items-start w-full h-full py-4 pb-20">
        <div className="block justify-start items-start w-full h-full">
          <div className="flex justify-center items-center w-full h-auto px-4">
            <div className="relative block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[32.5rem] bg-[#fafafa] border border-[#e5e5e5] rounded-lg">
              <div className="absolute top-0 left-4 hidden sm:hidden md:flex lg:flex xlflex justify-center items-center w-0.5 h-full" id="index_page__gradient01" />
              <div className="absolute left-1.5 hidden sm:hidden md:flex lg:flex xlflex justify-center items-center w-6 h-6 bg-white border-[1.5px] border-[#1d8d37] ring-1 ring-[#1d8d3780] ring-offset-1 rounded-full text-[#1d8d37]">
                <svg className="flex justify-end items-center w-4 h-4" fill="currentColor" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>


              <div className="relative flex justify-start items-start sm:items-start md:items-center lg:items-center xl:items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-full px-0 sm:px-0 md:px-8 lg:px-8 xl:px-8 pt-8 sm:pt-8 md:pt-2 lg:pt-2 xl:pt-2 py-2 overflow-hidden">
                <div className="block justify-start items-center w-full h-auto">
                  <div className="hidden sm:hidden md:block lg:block xl:block justify-start items-center w-auto text-[2.8rem] font-bold text-[#0f102e] leading-none tracking-[0.01em] text-start">
                    <span className="flex justify-start items-center">
                      Learn the&nbsp;<span className="flex text-[#1d8d37] font__spline">deep-rooted</span>
                    </span>
                    <span className="block justify-start items-center">
                      knowledege from the&nbsp;<span className="flex text-[#1d8d37] font__spline">experts.</span>
                    </span>
                  </div>

                  <div className="block sm:block md:hidden lg:hidden xl:hidden justify-start items-center w-full text-[1.65rem] font-bold text-[#0f102e] leading-none tracking-[0.01em] text-center">
                    Learn the&nbsp;<span className="text-[#1d8d37] font__spline">deep-rooted</span>&nbsp;knowledege from the&nbsp;<span className="text-[#1d8d37] font__spline">experts.</span>
                  </div>

                  <div className="absolute top-[8.5rem] flex justify-center items-center w-full">
                    <div className="absolute z-[1] flex sm:flex md:hidden lg:hidden xl:hidden justify-center items-center w-full h-0.5" id="index_page__gradient02" />

                    <div className="absolute z-[2] flex sm:flex md:hidden lg:hidden xl:hidden justify-center items-center w-full h-auto">
                      <div className="flex justify-center items-center w-6 h-6 bg-white border-[1.5px] border-[#1d8d37] ring-1 ring-[#1d8d3780] ring-offset-1 rounded-full text-[#1d8d37]">
                        <svg className="flex justify-end items-center w-4 h-4" fill="currentColor" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start items-center w-full h-12 mt-12 text-lg sm:text-lg md:text-base lg:text-base xl:text-base">
                    <Link href="/courses" className="flex justify-center items-center w-auto h-full">
                      <button className="flex justify-center items-center w-auto h-full px-6 bg-[#0f102e] rounded-md border border-[#0f102e] hover:bg-[#1a1c48] active:border-[#0c0d26] focus:border-[#0c0d26] focus:ring-[2.5px] focus:ring-[#9cb9d9] text-white font-medium duration-100  no-focus select-none">
                        Explore Courses
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-0 flex sm:flex md:hidden lg:hidden xl:hidden justify-end items-end w-full h-full overflow-hidden select-none pointer-events-none">
                  <div className="flex justify-end items-end w-full h-auto">
                    <Image className="flex justify-end items-end w-full h-auto"
                      src={'/images/home_banner__01.svg'}
                      width={850}
                      height={680}
                      alt={'home_banner_01'}
                    />
                  </div>
                </div>
              </div>

              <div className="relative hidden sm:hidden md:flex lg:flex xl:flex justify-end items-end w-1/2 h-full overflow-hidden select-none">
                <div className="flex justify-end items-end w-full h-auto">
                  <Image className="flex justify-end items-end w-full h-auto"
                    src={'/images/home_banner__01.svg'}
                    width={850}
                    height={680}
                    alt={'home_banner_01'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full h-2 my-10 border-y border-[#e5e5e5] bg-[#f7f7f7]" />

          <div className="flex justify-start items-start w-full h-full px-4 text-[#191919]">
            <div className="flex flex-col justify-start items-start w-full h-full">
              <div className="flex justify-start items-center w-full text-2xl font-semibold leading-none">
                Explore popular courses
              </div>

              <div className="flex justify-start items-center w-full mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8 justify-center items-center w-full">
                  {Object.keys(popularCourses).map((item) => {
                    return <ProductCart key={popularCourses[item]._id}
                      url={popularCourses[item].slug}
                      name={popularCourses[item].title}
                      image={popularCourses[item].dimg}
                      price={popularCourses[item].price}
                      description={popularCourses[item].desc}
                      category={popularCourses[item].category}
                      duration={popularCourses[item].duration}
                    />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
