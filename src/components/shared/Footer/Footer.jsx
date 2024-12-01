import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../Button/Button";
const Footer = () => {
  return <section className="pt-[70px] pb-[50px] bg-[#F9FAFB]">
    <div className="container_fluid">
      <div className="flex flex-col lg:flex-row w-full pb-14 md:justify-center md:items-center lg:items-start">
        <div className="w-full lg:w-[35%] text-left">
          <h2 className='text-black text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Contact info</h2>
          <p className='text-dark text-[16px] font-[400] leading-[24px] -tracking-[0.3px] pt-6 pb-7'>3891 Ranchview Dr. Richardson, California <br /> 62639, USA</p>
          <div className="flex flex-col w-fit">
          <Link to="tel:+391 (0)35 2568 4593" className='text-primary text-[18px] font-[500] leading-[24px] -tracking-[0.3px]'>+391 (0)35 2568 4593</Link>
          <Link to='mailto:Hallo@support.com' className='text-dark text-[16px] font-[400] leading-[24px] -tracking-[0.3px]'>Hallo@support.com</Link>
          </div>
          <div className="flex gap-4 items-center md:justify-center lg:justify-start mt-8">
            <Link><FaFacebook className="text-[27px] text-dark hover:text-primary duration-300" /></Link>
            <Link><FaGithub className="text-[27px] text-dark hover:text-primary duration-300" /></Link>
            <Link><FaLinkedinIn className="text-[27px] text-dark hover:text-primary duration-300" /></Link>
            <Link><FaDribbble className="text-[27px] text-dark hover:text-primary duration-300" /></Link>
            <Link><IoLogoBehance className="text-[27px] text-dark hover:text-primary duration-300" /></Link>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex md:justify-center gap-[100px] py-10 lg:py-0">
          <div className="w-[50%]">
            <h2 className='text-black text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Explore</h2>
            <ul className="flex gap-6 xl:gap-6 lg:gap-4 flex-col justify-start mt-6">
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Instructions</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Style guide</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Licenses</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Solutions</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Pricing</Link></li>
            </ul>
          </div>
          <div className="w-[50%]">
            <h2 className='text-black text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Resources</h2>
            <ul className="flex gap-6 xl:gap-6 lg:gap-4 flex-col justify-start mt-6">
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">About us</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Help center</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Features</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Support</Link></li>
              <li className=""><Link className="hover:pl-[5px] hover:font-semibold transform duration-200 text-dark text-[16px] font-medium leading-[24px] -tracking-[0.3px]">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[70%] lg:w-[35%] md:pl-7 text-center lg:text-left">
          <h2 className='text-black text-[22px] font-[500] leading-[30px] -tracking-[0.3px]'>Subscribe newsletter</h2>
          <p className='text-dark text-[16px] font-[400] leading-[24px] -tracking-[0.3px] pt-6 pb-7'>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.</p>

          <div className="flex gap-4 items-center mt-8 flex-col md:flex-row">
            <input className="py-3 pl-[14px] text-[#3D4A5C] text-[14px] font-[400] leading-[22px] outline-primary border border-blue-200 rounded-md -tracking-[0.3px] w-full" type="email" placeholder="Enter your Email" />
            <Button path={"/subscribe"} className='py-3 flex items-center gap-2 w-full justify-center md:w-auto md:flex lg:text-[11px] xl:text-[16px]'>Subscribe <GoArrowUpRight /></Button>
          </div>
        </div>
      </div>
      <div className="pt-[50px] border-t border-blue-200 flex justify-between flex-col md:flex-row gap-8 md:gap-0 items-center">
        <div className="flex gap-2 items-center md:hidden lg:flex">
          <div className="w-12 h-[34px] rounded-md border flex justify-center  items-center border-blue-200 overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawSGOgyd65kWlQXrvx6vYodsAcVSFzkbbzg&usqp=CAU"} alt="" />
          </div>
          <div className="w-12 h-[34px] rounded-md border flex justify-center items-center border-blue-200 overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src={"https://upload.wikimedia.org/wikipedia/commons/0/06/Chase-bank-logo-bt.png"} alt="" />
          </div>
          <div className="w-12 h-[34px] rounded-md border flex justify-center items-center border-blue-200 overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src={"https://cdn.dribbble.com/users/371199/screenshots/14105772/media/b5edcbf0d3e8217cb343e38cce647e19.jpg?resize=400x300&vertical=center"} alt="" />
          </div>
          <div className="w-12 h-[34px] rounded-md border flex justify-center items-center border-blue-200 overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src={"https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2023/10/31/IFIC-New-Logo-with-I-space-copy-2f0e6991ffeee3633b0e6836700d729c.jpg"} alt="" />
          </div>
          <div className="w-12 h-[34px] rounded-md border flex justify-center items-center border-blue-200 overflow-hidden shadow-md">
              <img className="w-full h-full object-cover" src={"https://upload.wikimedia.org/wikipedia/commons/d/d1/Yes_Bank_Logo-01.png"} alt="" />
          </div>
        </div>
        <div className="">
          <p className="text-dark text-[14px] xl:text-[16px] font-[400] leading-[24px] -tracking-[0.3px] text-center ">@ 2023 Keep Design. All Rights Reserved</p>
        </div>
        <div className="">
          <ul className="flex items-center gap-4 flex-col md:flex-row">
            <li><Link className="text-dark xl:text-[16px] lg:text-[14px] font-[500] leading-[24px] -tracking-[0.3px]">Privacy Policy</Link></li>
            <li><Link className="text-dark xl:text-[16px] lg:text-[14px] font-[500] leading-[24px] -tracking-[0.3px]">Terms & Conditions</Link></li>
            <li><Link className="text-dark xl:text-[16px] lg:text-[14px] font-[500] leading-[24px] -tracking-[0.3px]">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>;
};

export default Footer;
