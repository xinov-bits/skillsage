'use client'

import React, { useEffect, useState } from 'react'

// NEXT JS
import Link from 'next/link'
import Image from "next/image";

// FRAMER MOTION
import { AnimatePresence, motion } from 'framer-motion';

// AXIOS
import axios from 'axios';

// COMPONENTS
import { InputField } from '@/components/core/InputField';

// SHADCN UI
import toast, { Toaster } from 'react-hot-toast';

// CRYPTO JS
import CryptoJS from 'crypto-js';

const notify = (status, content) => toast.custom((t) => (
    <AnimatePresence>
        {t.visible && (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                // ease: 'linear',
                delay: 0,
                // duration: 0.1,
            }}
            className={
                `flex justify-between items-center max-w-72 w-full h-10 p-1 ${status === 'success' ? 'bg-[#F3F8F4]' : 'bg-[#FBF4F3]'} border ${status === 'success' ? 'ring-[3px] ring-[#1178291A] border-[#117829]' : 'ring-[3px] ring-[#AD23141A] border-[#ad2314]'} rounded pointer-events-auto`
            }

            onClick={() => toast.dismiss(t.id)}
        >
            <div className="flex justify-start items-center w-auto h-full space-x-1.5 select-none">
                <div className="flex justify-end items-center w-auto h-full">
                    <div className={
                        `flex justify-center items-center w-8 h-full bg-white border ${status === 'success' ? 'border-[#117829]' : 'border-[#ad2314]'} rounded-sm`
                    }>
                        {status === 'success' && (
                            <svg className="flex justify-center items-center w-5 h-5 text-[#117829]">
                                <use xlinkHref="/on/demandware/svg/non-critical.svg#icon-check"></use>
                            </svg>
                        )}
                        {status === 'error' && (
                            <svg className="flex justify-center items-center w-7 h-7 text-[#ad2314]">
                                <use xlinkHref="/on/demandware/svg/non-critical.svg#icon-close"></use>
                            </svg>
                        )}
                    </div>
                </div>

                <div className={
                    `flex justify-center items-center leading-none ${status === 'success' ? 'text-[#117829]' : 'text-[#ad2314]'}`
                }>
                    {content}
                </div>
            </div>
        </motion.div>)}
    </AnimatePresence>
))

const Page = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const [detailsFilled, setDetailsFilled] = useState(false);

    useEffect(() => {
        if (
            userEmail === ''
            || userEmail.length === 0
            || userPhone === ''
            || userPhone.length === 0
        ) {
            setDetailsFilled(false);
        }
    }, [userEmail, userPhone]);

    // SIGN IN
    const AES_SECRET = '09182__signin__65701';

    const [signinLoading, setSigninLoading] = useState(false);

    const handleSigninSubmit = async (event) => {
        event.preventDefault();

        const userData = [{
            email: userEmail,
            phone: parseInt(userPhone),
        }]

        setSigninLoading(true);

        setTimeout(async () => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/signin`, userData);

                if (res.status === 200) {
                    notify('success', 'Signed in successfully.');

                    let strUserData = [res.data.name, res.data.email, res.data.phone, res.data.token]
                    const encUserData = CryptoJS.AES.encrypt(JSON.stringify(strUserData), AES_SECRET).toString();

                    localStorage.setItem('user', encUserData);
                }
            } catch (error) {
                if (error.response?.data?.details?.includes('Invalid Credentials.')) {
                    notify('error', 'Invalid Credentials.');
                } else if (error.response?.data?.error?.includes('No Such User Found')) {
                    notify('error', 'User not found.');
                } else {
                    notify('error', JSON.stringify(error.response?.data?.details));

                    console.log(error);
                }
            }

            setSigninLoading(false);
        }, 1500);
    }

    return (
        <>
            <div className="flex justify-center items-center w-full h-full p-6 sm:p-6 md:p-14 lg:p-14 xl:p-14 bg-[#fdfdfd] text-[#191919]">
                <div className="flex flex-col justify-start items-center w-full sm:w-full md:w-[40%] lg:w-[40%] xl:w-[40%] h-auto px-4 pb-4 bg-white rounded-md border border-[#767676] ring-4 ring-[#f0f0f0]">
                    <div className="flex justify-start items-center w-full h-14 sm:h-14 md:h-12 lg:h-12 xl:h-12 text-xl sm:text-xl md:text-base lg:text-base xl:text-base border-b border-[#e5e5e5] leading-none font-semibold select-none">
                        Sign In
                    </div>

                    <div className="flex justify-start items-center w-full h-full mt-4">
                        <form className="block justify-start items-center w-full h-full space-y-4" onSubmit={(event) => handleSigninSubmit(event)}>
                            <div className="flex justify-start items-center w-full h-auto leading-none text-base sm:text-base md:text-sm lg:text-sm xl:text-sm font-semibold">
                                <InputField
                                    name={'sign_up-email'}
                                    type={'email'}
                                    placeholder={'Enter your email'}
                                    change={[userEmail, setUserEmail]}
                                />
                            </div>

                            <div className="flex justify-start items-center w-full h-auto leading-none text-base sm:text-base md:text-sm lg:text-sm xl:text-sm font-semibold">
                                <InputField
                                    name={'sign_up-phone'}
                                    type={'text'}
                                    placeholder={'Enter your phone number'}
                                    change={[userPhone, setUserPhone]}
                                />
                            </div>

                            <div className="flex flex-col justify-start items-end w-full h-[4.5rem] sm:h-[4.5rem] md:h-16 lg:h-16 xl:h-16 mt-1.5">
                                <div className="flex justify-end items-center w-full h-auto mb-2.5 leading-none text-base sm:text-base md:text-sm lg:text-sm xl:text-sm text-[#767676]">
                                    <div> or </div>
                                    &nbsp;
                                    <Link href="/auth/signup" className="underline text-[#292929] no-focus">
                                        sign up
                                    </Link>
                                </div>

                                {(!(userEmail === '' && userEmail.length === 0 && userPhone === '' && userPhone.length === 0) && (userEmail.includes('@') && userPhone.length === 10)) ? <div className="flex justify-start items-center w-full h-full leading-none text-xl sm:text-xl md:text-base lg:text-base xl:text-base font-semibold">
                                    {!signinLoading ? <button className="flex justify-center items-center w-full h-full px-6 bg-[#1f883d] rounded border border-[#1f793a] hover:bg-[#1a7f37] active:background-[#187733] focus:border-[#1f793a] focus:ring-[2.5px] focus:ring-[#6ea98d77] text-white font-medium duration-100  no-focus select-none space-x-1" type="submit">
                                        <svg className="flex justify-center items-center w-5 h-5" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <div>
                                            Sign In
                                        </div>
                                    </button>
                                        : <div className="flex justify-center items-center w-full h-full px-6 bg-[#1f883d] rounded border border-[#1f793a] ring-[2.5px] ring-[#6ea98d77] text-white no-focus select-none space-x-1 duration-100">
                                            <svg className="flex justify-center items-center w-4 h-4 animate-[spin_600ms_linear_infinite]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <mask
                                                    id="mask0_426_6"
                                                    style={{ maskType: "luminance" }}
                                                    width="24"
                                                    height="24"
                                                    x="0"
                                                    y="0"
                                                    maskUnits="userSpaceOnUse"
                                                >
                                                    <path fill="#fff" d="M24 0H0v24h24V0z"></path>
                                                </mask>
                                                <g mask="url(#mask0_426_6)">
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M22 12a9.999 9.999 0 01-19.239 3.827A10 10 0 012 12"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>}
                                </div> : <div className="flex justify-start items-center w-full h-full leading-none text-xl sm:text-xl md:text-base lg:text-base xl:text-base font-semibold">
                                    <div className="flex justify-center items-center w-full h-full px-6 bg-[#1f883d] rounded border border-[#1f793a] text-white font-medium no-focus select-none space-x-1 saturate-0 opacity-60">
                                        <svg className="flex justify-center items-center w-5 h-5" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <div>
                                            Sign In
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </form>
                    </div>
                </div>

                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </>
    )
}

export default Page