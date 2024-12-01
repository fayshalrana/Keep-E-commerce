import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import logo from '../../../assets/images/logo.png'
import LoginForm from "../../screen/Login/LoginForm";
import { useState } from "react";
import RegisterForm from "../../screen/Register/RegisterForm";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
const pages = [
  {
    name:'Home',
    path: '/'
  },
  {
    name:'Shop',
    path:'/shop'
  },
  {
    name:'Cart',
    path:'/cart'
  },
  {
    name:'About us',
    path:'/about'
  },
  {
    name:'Blog',
    path:'/blog'
  },
  {
    name:'Checkout',
    path:'/checkout'
  },
  {
    name:'contact us',
    path:'/contact'
  },
  {
    name:'Blog List',
    path:'/blog-list'
  },
]



const Navbar = () => {
  const [form, setForm] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showReg, setShowReg] = useState(false)
  const [showMobileMenus, setShowMObileMenus] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const [showPages, setShowPages] = useState(false)
  const [showOthers, setShowOthers] = useState(false);
  const handelShowForm = () => {
    setForm(!form)
  }

  //show login page
  const handleShowLogin = () => {
    setShowLogin(true)
    setShowReg(false)

  }
  //Show register page
  const handleShowReg = () => {
    setShowLogin(false)
    setShowReg(true)
    console.log("reg");
  }

  //Show mobile menus
  const handleShowMobileMenus = () => {
    setShowMObileMenus(!showMobileMenus)
  }
// show category menus 
const handleCategory =()=>{
  setShowCategory(!showCategory)
}
// show pages menus
const handlePages = ()=>{
  setShowPages(!showPages)
  }
//show others menus
const handleOthers = ()=>{
  setShowOthers(!showOthers)
}


  return <section className="py-[30px]">
    <div className="container_fluid">
      <div className="flex justify-between items-center">
        <nav className="hidden lg:inline">
          <ul className="flex justify-center items-center gap-5">
            <li className="text-[16px] leading-[24px] font-[500] -tracking-[.3px] flex items-center gap-1 text-black cursor-pointer group relative">Category <IoIosArrowDown />
            {/* category dropdown plate  */}
              <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-slate-200 absolute top-7 -left-[13px] p-2">
                <ul className="flex flex-col">
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Category 1</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Category 2</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Category 3</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Category 4</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Category 5</Link></li>
                </ul>
              </div>
            </li>
            <li className="text-[16px] leading-[24px] font-[500] -tracking-[.3px] flex items-center gap-1 text-black cursor-pointer group relative">Best Sellers <IoIosArrowDown />
            {/* Best Sales plate  */}
              <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-slate-200 absolute top-7 -left-3 p-2">
                <ul className="flex flex-col">
                  <li><Link to='/contact' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Contact us</Link></li>
                  <li><Link to='/blog-list' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Blog List</Link></li>
                  <li><Link to='/error' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Error page</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">page 4</Link></li>
                  <li><Link to='#' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">page 5</Link></li>
                </ul>
              </div></li>
            <li className="text-[16px] leading-[24px] font-[500] -tracking-[.3px] flex items-center gap-1 text-black cursor-pointer group relative">Others <IoIosArrowDown />
            {/* others page plate  */}
              <div className="group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-300 z-50 w-[10rem] rounded-md bg-slate-200 absolute top-7 -left-3 p-2">
                <ul className="flex flex-col">
                  <li><Link to='/about' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">About Us</Link></li>
                  <li><Link to='/shop' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Shop</Link></li>
                  <li><Link to='/blog' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Blog</Link></li>
                  <li><Link to='/cart' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Cart</Link></li>
                  <li><Link to='/checkout' className="text-[14px] font-semi text-dark w-full p-1 hover:bg-blue-400 hover:text-white  block">Checkout</Link></li>
                </ul>
              </div></li>
          </ul>
        </nav>
        <div className="">
          <Link className="flex justify-center items-center gap-[10px]">
            <div className="h-[34px] w-[34px] rounded-[10px] overflow-hidden">
              <img className="w-full h-full object-cover" src={logo} alt="Site logo" />
            </div>
            <h3 className="font-[500]">Keep</h3>
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-7">
          <button className="hidden lg:inline text-[24px]"><IoSearch /></button>
          <button onClick={handelShowForm} className="hidden lg:inline text-[24px]"><AiOutlineUser /></button>
          <div className={`${form ? "block absolute" : "hidden"}`}>
            {showLogin ?
              <LoginForm handleShowLogin={handleShowReg} handelShowForm={handelShowForm} /> :
              <RegisterForm handleShowLogin={handleShowLogin} handelShowForm={handelShowForm} />
            }
          </div>
          <Link to="/wish-list" className="hidden lg:inline text-[24px] relative"><FaRegHeart />
            <div className="hidden absolute w-5 h-5 rounded-complete bg-primary text-[14px] font-[500] leading-[22px] -tracking-[.2px] text-white md:flex justify-center items-center -top-2 -right-3">0</div>
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-[14px] md:text-[16px]  leading-[24px] font-[500] -tracking-[.3px] text-black cursor-pointer py-[7px] md:py-3 px-3 md:px-5 rounded-md border border-[#D7DFE9] hover:bg-primary hover:text-white duration-200">
            <CgShoppingCart />
            Card $0.00
          </Link>
          <button type="button" onClick={handleShowMobileMenus} className="text-[32px] lg:hidden"><FiMenu /></button>
        </div>
        <div className={`fixed left-0 top-0 w-full bg-black/30 p-5 h-full z-50 lg:hidden ${showMobileMenus ? "block" : "hidden"}`}>
          <div className="w-full h-full bg-white p-3 overflow-auto rounded-md">
            <div className="flex justify-between items-center">
              <div className="">
                <Link className="flex justify-center items-center gap-[10px]">
                  <div className="h-[34px] w-[34px] rounded-[10px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={logo} alt="Site logo" />
                  </div>
                  <h3 className="font-[500]">Keep</h3>
                </Link>
              </div>
              <button type='button' onClick={handleShowMobileMenus}>
              <IoCloseCircleOutline className="text-2xl hover:text-red-500" />
              </button>
            </div>
            <div className="mt-3">
              <ul className="flex flex-col gap-2">
                <li onClick={handleCategory} className="bg-primary px-2 py-3 flex justify-between items-center text-sm text-white rounded-md select-none">Category <TiArrowSortedDown /></li>
                <div className={`px-2 py-1 transform duration-200 ${showCategory? "h-auto":"h-0 overflow-hidden"}`}>
                  <ul className="flex flex-col gap-3">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Link onClick={handleShowMobileMenus} key={index} className='text-sm'>category {index + 1}</Link>
                    ))}
                  </ul>
                </div>
                <li onClick={handlePages} className="bg-primary px-2 py-3 flex justify-between items-center text-sm text-white rounded-md">Pages <TiArrowSortedDown /></li>
                <div className={`px-2 py-1 transform duration-200 ${showPages? "h-auto":"h-0 overflow-hidden"}`}>
                  <ul className="flex flex-col gap-3">
                    {
                      pages.map((page, index)=> <Link to={page.path} onClick={handleShowMobileMenus} key={index} className='text-sm'>{page.name}</Link>)
                    }
                  </ul>
                </div>
                <li onClick={handleOthers} className="bg-primary px-2 py-3 flex justify-between items-center text-sm text-white rounded-md">Others <TiArrowSortedDown /></li>
                <div className={`px-2 py-1 transform duration-200 ${showOthers? "h-auto":"h-0 overflow-hidden"}`}>
                  <ul className="flex flex-col gap-3">
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index} className='text-sm'>Others {index + 1}</li>
                    ))}
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Navbar;
