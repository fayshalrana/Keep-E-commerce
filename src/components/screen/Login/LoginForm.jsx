import React from 'react'
import facebook from '../../../assets/images/facebook-svgrepo-com.svg'
import { IoLockClosedOutline } from "react-icons/io5";
import { BsEyeSlash, BsEye  } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const LoginForm = ({handelShowForm, handleShowLogin}) => {
    return (
        <section className='w-full h-full fixed md:overflow-hidden top-0 left-0 bg-black/30 flex justify-center items-center z-[9999] p-8'>
            <div className=" md:w-[450px] 2xl:w-[500px] bg-white p-6 2xl:p-8 rounded-md relative mt-16 md:mt-7">
                <div className="absolute right-3 top-3">
                    <button onClick={handelShowForm} type='button'><IoCloseCircleOutline className='text-[40px] hover:text-red-500 text-gray-400'/></button>
                </div>
                <div className="md:px-16 flex justify-center items-center flex-col">
                    <h2 className='text-[28px] 2xl:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black'>Welcome Back</h2>
                    <p className='text-[16px] 2xl:text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-dark text-center'>Please enter your details to log in.</p>
                </div>
                <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
                    <button
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="rounded-full">
                            <svg className="w-6" viewBox="0 0 533.5 544.3">
                                <path
                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                    fill="#4285f4" />
                                <path
                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                    fill="#34a853" />
                                <path
                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                    fill="#fbbc04" />
                                <path
                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                    fill="#ea4335" />
                            </svg>
                        </div>
                        <span className="ml-4 text-[16px]">
                            with Google
                        </span>
                    </button>

                    <button
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="rounded-full w-6">
                            <img className='w-full' src={facebook} alt="" />
                        </div>
                        <span className="ml-4 text-[16px]">
                            with Facebook
                        </span>
                    </button>
                </div>
                <div className="flex w-full items-center gap-2 py-2 2xl:py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>
                <form action="" className='flex flex-col gap-2'>
                    <div className="flex flex-col">
                        <label htmlFor="address" className='pb-1 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer'>User name or email*</label>
                        <input type="text" id='address' placeholder='Enter your email address' className='py-[14px] px-[14px] border border-blue-200 focus:outline-none focus:border-blue-500 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark/60 rounded-md' required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className='pb-1 text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark cursor-pointer'>Password*</label>

                        <div className="border flex items-center gap-2 border-blue-200 focus:outline-none focus:border-blue-500 rounded-md px-[14px] w-full">
                            <div className="pr-2 border-r-2">
                                <IoLockClosedOutline className='text-[20px]' />
                            </div>
                            <input type="text" id='password' placeholder='*****' className='py-[14px] text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-dark/60 focus:outline-none' required />
                            <div className="ml-auto">
                                <button> <BsEyeSlash className='text-[20px]' /></button>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                       <input id='check' type="checkbox" />
                        <label className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark text-center cursor-pointer' htmlFor="check">Remember for 30 days</label>
                       </div>
                        <div className="">
                        <Link className='text-primary font-semibold' href="">Lost your password?</Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button type='submit' className='py-4 px-5 rounded-md w-full bg-primary text-white text-[18px] font-[500] leading-[24px] -tracking-[.3px]'>Log in </button>
                    </div>
                    <div className="">
                        <p className='text-[16px] font-[500] leading-[24px] -tracking-[.3px] text-dark text-center'>Already have an account?
                            <button onClick={handleShowLogin} className='text-primary font-semibold'>Register</button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginForm
