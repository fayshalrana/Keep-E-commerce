import underLineImg from '../../../assets/images/sectionLine.webp'
import BannerSection from "../../shared/BannerSection/BannerSection";


const Banner = () => {
  return <section className="pt-10 md:pt-[84px] pb-10">
    <div className="container_fluid">
      <BannerSection currentPage={"About Us"} />
      <div className="w-auto lg:w-[65rem] mx-auto mt-[32px] md:mt-[40px] relative">
        <h1 className="text-[30px] md:text-[34px] lg:text-[48px] font-[600] leading-[42px] md:leading-[47px] lg:leading-[60px] -tracking-[.5px] md:-tracking-[1.75px] text-black pb-6 text-center">Living out every single day and be brave to show off your own true colors</h1>
        <img className="absolute right-0 md:right-[11rem] -z-10 bottom-[160px] md:bottom-[110px] lg:bottom-[68px] w-[10rem]" src={underLineImg} alt="under line image" />
        <p className="text-[16px] font-[400] leading-[24px] -tracking-[.3px] text-dark md:px-32">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing Before & After magazine answered a curious reader.</p>
      </div>
    </div>
  </section>;
};

export default Banner;
