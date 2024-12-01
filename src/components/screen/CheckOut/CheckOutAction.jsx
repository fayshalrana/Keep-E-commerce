import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import BillingDetails from './BillingDetails/BillingDetails';
import YourItem from './YourItem/YourItem';
import Payment from './Payment/Payment';

const CheckOutAction = () => {
    return (
        <section className='py-6 lg:py-12 lg:pt-12 lg:pb-[100px]'>
            <div className="container_fluid">
                <div className="lg:px-10">
                    {/* Alert message  */}
                    <div id="alert-2" className="flex items-center py-2 md:py-4 px-2 md:px-7 mb-4 rounded-lg bg-[#F2F5FF] " role="alert">
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">

                            <p className="text-[12px] lg:text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark ">Have a coupon?<a className='no-underline text-blue-600' href="#"> Click to enter your code</a>.</p>
                        </div>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-dark rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:text-red-300 inline-flex items-center justify-center h-8 w-8 text-[20px]">
                            <RxCrossCircled />
                        </button>
                    </div>

                    {/* body  */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="">
                            <BillingDetails />
                        </div>
                        <div className="">
                            <h2 className='text-[26px] lg:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black'>Your order</h2>
                            <div className="px-4 py-4 flex justify-between border-b-2">
                                <span className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>Product</span>
                                <span className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>Total</span>
                            </div>
                            <div className="flex flex-col">
                                <YourItem />
                                <YourItem />
                                <YourItem />
                            </div>
                            <div className="px-6 py-5 flex justify-between border-b-2">
                                <span className='text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-black'>Subtotal</span>
                                <span className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>$79.00</span>
                            </div>
                            <div className="px-6 py-5 flex justify-between border-b-2">
                                <span className='text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-black'>Order Total</span>
                                <span className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>$79.00</span>
                            </div>
                            <div className="mt-[55px]">
                                <h2 className='text-[26px] lg:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black'>Payment</h2>
                                <div className="mt-8">
                                    <Payment />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default CheckOutAction
