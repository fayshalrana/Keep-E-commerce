import React from 'react'
import postImg from '../../../../assets/images/blogGrid.png'
import postImg1 from '../../../../assets/images/blogDetails1.png'
import postImg2 from '../../../../assets/images/blogDetails2.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDribbble    } from "react-icons/fa";
const BlogMain = () => {
    return (
        <section>
            <div className="container_fluid">
            <div className='mx-auto w-full md:w-[80%] xl:w-[70%]'>
                <div className="w-full h-[260px] lg:h-[600px]">
                    <img className='w-full h-full object-cover' src={postImg} alt="" />
                </div>
                <div className="pt-[30px] lg:pt-[72px]">
                    <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>Lorem ipsum dolor sit amet consectetur. Vestibulum pulvinar ut convallis in nisi dolor sagittis. Eget blandit egestas a malesuada sagittis diam neque. Dignissim vitae pharetra tristique nisl arcu elementum congue. Leo in eget sollicitudin justo. Faucibus quis arcu ultrices tellus porttitor.</p>
                    <div className="py-10">
                        <h2 className='text-[24px] lg:text-[32px] font-[600] leading-[34px] lg:leading-[42px] -tracking-[.5px] text-black pb-3'>The Perfect Footwear Styles for Different Body Types</h2>
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>
                            Lorem ipsum dolor sit amet consectetur. Vestibulum pulvinar ut convallis in nisi dolor sagittis. Eget blandit egestas a malesuada sagittis diam neque. Dignissim vitae pharetra tristique nisl arcu elementum congue. Leo in eget sollicitudin justo. Faucibus quis arcu ultrices tellus porttitor. Praesent mauris aliquam pretium orci amet. Id sit mauris sapien arcu. Ac molestie consectetur felis eu ultrices. Morbi at ante vitae dictum in tortor vel.
                        </p>
                        <ul className='pt-6 pl-6 flex flex-col gap-[10px]'>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Fits true to size.</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>100% Recycled polyester upper</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Spot clean with water and mild soap</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Pull-on back tab</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Made in Thai Binh, VNSee the factory</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full h-[210px] lg:h-[350px]">
                            <img className='w-full h-full object-cover' src={postImg1} alt="" />
                        </div>
                        <div className="w-full h-[210px] lg:h-[350px]">
                            <img className='w-full h-full object-cover' src={postImg2} alt="" />
                        </div>
                    </div>
                    <div className="py-5">
                        <h2 className='text-[24px] lg:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black pb-3'>Footwear Styles</h2>
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>
                            Lorem ipsum dolor sit amet consectetur. Nisl aenean diam nisi egestas in porttitor nunc arcu. Pharetra egestas tincidunt mauris sed tincidunt cursus nisl suspendisse lacus. Suspendisse ac imperdiet feugiat vivamus proin eget vitae lectus. Pretium mauris massa habitant neque risus. Lectus et est fames orci. Id sagittis nec adipiscing enim scelerisque. Pellentesque congue posuere posuere et non at. <br /> <br />
                            Et vitae nibh tellus tincidunt maecenas pulvinar. Pulvinar massa volutpat tortor augue non risus lectus. Augue convallis adipiscing est eget viverra id sed velit. Ornare pellentesque aliquet urna eget arcu amet. Velit mauris amet turpis aliquam id vel aliquam. Leo aliquam ac quam pharetra vehicula pharetra. Ultrices arcu velit mauris sed sapien faucibus tincidunt est scelerisque. Elit diam vitae elementum praesent id cursus laoreet. <br /> <br />
                            At quis leo pharetra convallis iaculis. Cursus dolor tortor urna et tempor aliquam aliquam. Eleifend ut dis sit morbi sed faucibus neque. Placerat sed amet quis enim felis arcu. Ullamcorper et eu facilisi faucibus vestibulum. Sagittis aliquet cras diam nulla semper id malesuada et. Quam interdum sit sed ac diam non elit. Porta iaculis condimentum porta massa auctor ullamcorper.
                        </p>
                    </div>
                    <div className="py-5 w-full lg:w-[70%] mx-auto">
                        <h2 className='text-[20px] lg:text-[32px] font-[600] leading-[27px] lg:leading-[42px] -tracking-[.5px] text-black pb-3 text-center'>“Living out every single day and be brave to show off
                            your own true colors”</h2>
                    </div>
                    <div className="py-5">
                        <h2 className='text-[24px] lg:text-[32px] font-[600] leading-[42px] -tracking-[.5px] text-black pb-3'>Footwear Materials</h2>
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>
                            Lorem ipsum dolor sit amet consectetur. Vestibulum pulvinar ut convallis in nisi dolor sagittis. Eget blandit egestas a malesuada sagittis diam neque. Dignissim vitae pharetra tristique nisl arcu elementum congue. Leo in eget sollicitudin justo. Faucibus quis arcu ultrices tellus porttitor. Praesent mauris aliquam pretium orci amet. Id sit mauris sapien arcu. Ac molestie consectetur felis eu ultrices. Morbi at ante vitae dictum in tortor vel.
                        </p>
                        <ul className='pt-6 pl-6 flex flex-col gap-[10px]'>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Fits true to size.</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>100% Recycled polyester upper</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Spot clean with water and mild soap</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Pull-on back tab</li>
                            <li className='relative text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark before:content-[""] before:absolute before:w-2 before:h-2 before:-left-[20px] before:top-[50%] transform before:-translate-y-[50%] before:bg-primary before:rounded-sm before:rotate-45'>Made in Thai Binh, VNSee the factory</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark'>Lorem ipsum dolor sit amet consectetur. Nisl aenean diam nisi egestas in porttitor nunc arcu. Pharetra egestas tincidunt mauris sed tincidunt cursus nisl suspendisse lacus. Suspendisse ac imperdiet feugiat vivamus proin eget vitae lectus. Pretium mauris massa habitant neque risus. Lectus et est fames orci. Id sagittis nec adipiscing enim scelerisque. Pellentesque congue posuere posuere et non at. </p>
                    </div>
                </div>
                <div className="mt-10 py-5 border-t border-blue-200 flex justify-between md:items-center items-start flex-col md:flex-row gap-8 md:gap-0">
                    <div className="">
                        <ul className='flex gap-2'>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary'>Shoe</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary'>Running shoe</li>
                            <li className='text-[14px] font-[500] leading-[22px] -tracking-[.2px] rounded-md cursor-pointer py-[5px] px-2 border border-blue-200 text-primary'>Sneaker</li>
                        </ul>
                    </div>
                    <div className="flex gap-8 items-center">
                        <span>Share:</span>
                        <ul className='flex items-center gap-3'>
                            <li className='w-[30px] h-[30px] border border-blue-200 rounded-md p-2 text-[#AFBACA] flex justify-center items-center text-[20px] hover:bg-primary hover:text-white duration-200'><Link to='' target='_blank' ><FaFacebook /></Link></li>
                            <li className='w-[30px] h-[30px] border border-blue-200 rounded-md p-2 text-[#AFBACA] flex justify-center items-center text-[20px] hover:bg-primary hover:text-white duration-200'><Link to='' target='_blank' ><FaTwitter  /></Link></li>
                            <li className='w-[30px] h-[30px] border border-blue-200 rounded-md p-2 text-[#AFBACA] flex justify-center items-center text-[20px] hover:bg-primary hover:text-white duration-200'><Link to='' target='_blank' ><FaLinkedinIn  /></Link></li>
                            <li className='w-[30px] h-[30px] border border-blue-200 rounded-md p-2 text-[#AFBACA] flex justify-center items-center text-[20px] hover:bg-primary hover:text-white duration-200'><Link to='' target='_blank' ><FaDribbble /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BlogMain
