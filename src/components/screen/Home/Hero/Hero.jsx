import { Link } from "react-router-dom";
import bannerImg from '../../../../assets/images/banner.webp'
import underLineImg from '../../../../assets/images/sectionLine.png'
import Button from "../../../shared/Button/Button";
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-[42px] lx:gap-[100px] gap-[100px] justify-center items-center lg:px-[68px]">
      <div className="relative pt-[64px]">
        <span className='absolute -top-3 lg:top-0 lx:-top-16 left-0 lg:-left-16 text-[96px] lg:text-[100px] xl:text-[120px] font-semibold leading-[134px] lg:-tracking-[3.5px] -tracking-[2.5px] text-[#1C222B]/10'>-25%</span>
        <h1 className="text-[32px] lg:text-[48px] xl:text-[59px] font-[600] leading-[42px] lg:leading-[60px] xl:leading-[78px] -tracking-[.5px] lg:-tracking-[2.3px]">Discover the World of Online Shopping with Us.</h1>
        <img className="absolute w-[10rem] right-0 lg:top-[56%] xl:top-[47%] top-[38%] -z-10" src={underLineImg} alt="" />
        <p className="text-[16px] md:text-[18px] font-[500] leading-[24px] -tracking-[.3px] text-[#3D4A5C] mt-6 mb-10">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it</p>
        <Button className="py-4 w-full block text-center md:inline">Shop Now</Button>
      </div>
      <div className="relative">
        <div className="w-full h-[360px] md:h-auto rounded-t-[50%] overflow-hidden">
          <img src={bannerImg} alt="banner image" />
        </div>
        <div className="w-[162px] h-[162px] rounded-complete border-[2rem]  border-primary absolute -top-8 md:-top-[26px] lg:top-0 md:-left-12 lg:left-0"></div>
        <div className="w-[162px] h-[162px] rounded-complete bg-gray-200 absolute bottom-[1.5rem] md:-bottom-[2.5rem] -right-[67px] border-gray-200 -z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
