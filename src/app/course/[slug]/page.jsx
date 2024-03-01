'use client';

import React, { useState, useEffect, useContext, useRef } from 'react'

// NEXT JS
import Link from 'next/link'
import Image from 'next/image'

// CRYPTO JS
import CryptoJS from 'crypto-js'

// AXIOS
import axios from 'axios';

// FRAMER
import { motion, AnimatePresence } from "framer-motion";

export default function Page({ params }) {
    const slug = params.slug;

    let FormatedMoney = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });


    // GET COURSE
    const [course, setCourse] = useState([]);
    const [lecturesArr, setLecturesArr] = useState([]);
    const [lecturesSetArr, setLecturesSetArr] = useState([]);

    const fetchCourse = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getcourse?slug="${slug}"`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let courseData = response.data;

            if (courseData?.length > 0) {
                setCourse(courseData[0]);
            } else {
                setCourse(courseData);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    const fetchLectures = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getlecture?course="${slug}"`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let lectureData = response.data;

            setLecturesArr(lectureData);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, []);

    useEffect(() => {
        fetchLectures();
        setLecturesSetArr((lecturesArr?.map((k) => k['lectures']))[0]);
    }, [lecturesArr]);


    const level = 2;


    // COPIED
    const [selectedTab, setSelectedTab] = useState('lesson-in-this-class')

    const [pageSec, setPageSec] = useState('')

    const tabs = [
        'lesson-in-this-class',
        'about-this-class',
        'meet-your-trainer',
        'class-ratings'
    ]

    return (
        <>
            <div className="block justify-start items-center w-screen h-full pt-2 sm:pt-2 md:pt-4 lg:pt-4 xl:pt-4 pb-20 bg-white text-[#191919] overflow-x-hidden">
                <div className="block justify-start items-center w-full h-full px-2 sm:px-2 md:px-4 lg:px-4 xl:px-4">
                    {!(course.title === undefined || course.title === '' || course.title == [] || course.title === null) ? <div className="relative block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-full p-4 sm:p-4 m:p-8 lg:p-8 xl:p-8 bg-[#fafafa] border border-[#e5e5e5] rounded-lg">
                        <div className="flex justify-start items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-full">
                            <div className="block justify-start items-center w-auto h-full">
                                <div className="flex justify-start items-center w-auto h-6 select-none">
                                    <div className="flex justify-start items-center w-auto h-full p-2 leading-none bg-[#0f102e] rounded-full font-medium text-white text-xs">
                                        {course.category}
                                    </div>
                                </div>

                                <div className="flex justify-start items-center w-full mt-1 text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold leading-tight">
                                    {course.title}
                                </div>

                                <div className="flex justify-start items-center w-full mt-2 text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium leading-tight text-[#292929]">
                                    {FormatedMoney.format(course.price)}
                                </div>

                                <div className="flex justify-start items-center w-full my-2.5 sm:my-2.5 md:my-4 lg:my-4 xl:my-4 text-base font-medium text-[#767676] select-none">
                                    {course.desc}
                                </div>

                                <div className="flex space-x-2 justify-start items-center w-full sm:w-full md:w-[54%] lg:w-[54%] xl:w-[54%] select-none text-[#002333]">
                                    <div className="flex justify-center items-center w-full h-[65px] bg-white border border-[#dcdee1] rounded cursor-pointer">
                                        <div className="block justify-center items-center">
                                            <div className="flex justify-center items-center w-full text-sm">
                                                duration
                                            </div>
                                            <div className="flex justify-center items-center w-full text-lg font-semibold leading-none" id="#F_INTER">
                                                <div className="flex justify-center items-center">
                                                    {course.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center w-full h-[65px] bg-white border border-[#dcdee1] rounded cursor-pointer">
                                        <div className="block justify-center items-center">
                                            <div className="flex justify-center items-center w-full text-sm">
                                                {level == 1 && 'beginner'}
                                                {level == 2 && 'intermediate'}
                                                {level == 3 && 'expert'}&nbsp;level
                                            </div>
                                            <div className="flex justify-center items-center w-full text-lg font-semibold leading-none" id="#F_INTER">
                                                <ul className="flex justify-center items-end w-full space-x-[0.15rem]">
                                                    <li className={`flex justify-center items-center w-2 h-3 rounded-[2px] border border-[#394649] ${level > 0 ? 'bg-[#ffe03d]' : 'bg-[#dcdee1]'}`}></li>
                                                    <li className={`flex justify-center items-center w-2 h-5 rounded-[2px] border border-[#394649] ${level > 1 ? 'bg-[#ffe03d]' : 'bg-[#dcdee1]'}`}></li>
                                                    <li className={`flex justify-center items-center w-2 h-7 rounded-[2px] border border-[#394649] ${level > 2 ? 'bg-[#ffe03d]' : 'bg-[#dcdee1]'}`}></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block sm:block md:flex lg:flex xl:flex justify-start items-center w-full h-10 mt-4 space-x-0 sm:space-x-0 md:space-x-3 lg:space-x-3 xl:space-x-3 space-y-2 sm:space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0">
                                    <button className="flex justify-center items-center w-auto h-full px-4 bg-[#1f883d] rounded border border-[#1f793a] hover:bg-[#1b7135] active:border-[#1a7f37] focus:border-[#1a7f37] focus:ring-[2.5px] focus:ring-[#b4d4c5] text-white font-medium duration-100  no-focus select-none space-x-1.5">
                                        <svg className="flex justify-center items-center w-4 h-4" strokeWidth={1.5}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>

                                        <div> Apply now </div>
                                    </button>

                                    <button className="flex justify-center items-center w-auto h-full px-4 bg-[#fafafa] rounded border border-[#1f793a] hover:bg-[#fafafa] active:border-[#1a7f37] focus:border-[#1a7f37] focus:ring-[2.5px] focus:ring-[#b4d4c5] text-[#1f883d] hover:text-[#1b7135] font-medium duration-100  no-focus select-none space-x-1.5">
                                        <svg className="flex justify-center items-center w-4 h-4" strokeWidth={1.5}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>

                                        <div> Download Syllabus </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-full mt-20 sm:mt-20 md:mt-0 lg:mt-0 xl:mt-0 select-none">
                            <div className="block justify-start items-center w-full sm:w-full md:w-[86%] lg:w-[86%] xl:w-[86%] h-full overflow-hidden">
                                <Image
                                    className="flex justify-center items-center w-full h-full rounded-md overflow-hidden cursor-pointer"
                                    src={course.dimg}
                                    width={1280}
                                    height={720}
                                    alt={course.slug}
                                />
                            </div>
                        </div>
                    </div> : <div className="relative block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-full p-4 sm:p-4 m:p-8 lg:p-8 xl:p-8 bg-[#fafafa] border border-[#e5e5e5] rounded-lg">
                        <div className="block justify-start items-center w-full h-full space-y-4">
                            <div className="flex justify-center items-center w-[30%] sm:w-[30%] md:w-[22%] lg:w-[22%] xl:w-[22%] h-8 border border-[#e5e5e5] rounded" id="skeleton__anim" />

                            <div className="flex justify-center items-center w-[90%] sm:w-[90%] md:w-[65%] lg:w-[65%] xl:w-[65%] h-14 border border-[#e5e5e5] rounded" id="skeleton__anim" />

                            <div className="flex justify-center items-center w-[50%] sm:w-[50%] md:w-[30%] lg:w-[30%] xl:w-[30%] h-12 border border-[#e5e5e5] rounded" id="skeleton__anim" />

                            <div className="flex justify-start items-center w-[90%] sm:w-[90%] md:w-[65%] lg:w-[65%] xl:w-[65%] space-x-4">
                                <div className="flex justify-center items-center w-full h-20 border border-[#e5e5e5] rounded" id="skeleton__anim" />

                                <div className="flex justify-center items-center w-full h-20 border border-[#e5e5e5] rounded" id="skeleton__anim" />
                            </div>

                            <div className="flex justify-start items-center w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] space-x-4">
                                <div className="flex justify-center items-center w-full h-12 border border-[#e5e5e5] rounded" id="skeleton__anim" />

                                <div className="flex justify-center items-center w-full h-12 border border-[#e5e5e5] rounded" id="skeleton__anim" />
                            </div>
                        </div>

                        <div className="flex justify-end items-center w-full h-full mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                            <div className="flex justify-center items-center w-full sm:w-full md:w-[80%] lg:w-[80%] xl:w-[80%] h-64 border border-[#e5e5e5] rounded" id="skeleton__anim" />
                        </div>
                    </div>}
                </div>

                <div className="block justify-start items-center w-full mt-6 text-[#191919]">
                    <div className="flex justify-start items-center w-full border-y border-[#e5e5e5]">
                        <ul className="grid sm:grid md:flex lg:flex xl:flex grid-cols-2 justify-start items-end w-full text-sm select-none bg-white border-[#e5e5e5]">
                            {tabs.map((tab, index) => <li key={index} className="flex justify-center items-end w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 border-r border-[#e5e5e5]">
                                <button className={`flex justify-center items-center w-full py-3 capitalize cursor-pointer border-b border-[#e5e5e5] hover -b-2 focus -b-2 focus:border-[#1f883d] ${tab === selectedTab && 'border-b-2 border-[#1f883d]'}  no-focus`} onClick={() => setSelectedTab(tab)}>
                                    {tab.replaceAll('-', ' ')}
                                </button>
                            </li>)}
                        </ul>
                    </div>

                    <div className="flex justify-center items-center w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] h-full p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4 text-[#191919] select-none">
                        {selectedTab === 'lesson-in-this-class' && <div className="flex flex-col justify-start items-center w-full h-full p-2 bg-[#fafafa] border border-[#e5e5e5] rounded-lg">
                            <div className="flex justify-start items-center w-full font-medium text-base text-[#292929]">
                                Estimated lessons &#40;{
                                    lecturesSetArr?.length
                                }&#41;
                            </div>

                            {lecturesSetArr?.map((item, index) => <button key={index} className="flex justify-between items-center w-full h-10 py-1 px-2 mt-2 bg-[#fdfdfd] hover:bg-white border border-[#e5e5e5] hover:border-[#c0c0c0] focus:border-[#c0c0c0] active:border-[#767676] rounded space-x-2 no-focus text-sm sm:text-sm md:text-base lg:text-base xl:text-base group">
                                <div className="flex justify-start items-center w-auto h-full">
                                    <svg className="flex justify-center items-center w-6 h-6 text-[#767676]" strokeWidth={0.8}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                                </div>

                                <div className="flex justify-start items-center w-full h-full group-hover:font-medium">
                                    {item.name}
                                </div>

                                <div className="flex justify-end items-center w-44 h-full text-[#767676] space-x-1">
                                    <svg className="flex justify-center items-center w-5 h-5text-[#767676]" strokeWidth={0.8}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <div> {item.duration} </div>
                                </div>
                            </button>)}
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}