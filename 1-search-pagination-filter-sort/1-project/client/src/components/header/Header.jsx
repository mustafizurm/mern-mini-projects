import { useEffect } from "react";
import { useState } from "react";

const Header = () => {

  const [menu, setMenu] = useState(false)


  return (
    <header>
        <nav className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[624px] flex justify-between w-[95%] m-auto py-[15px] items-center">
            <div className="text-3xl">Mustafizur</div>
            <ul className={`md:flex md:gap-[40px] md:block absolute md:relative top-[70px] md:top-0 right-10 md:bg-slate-50 bg-slate-400 p-[23px] rounded-md md:rounded-none leading-10 md:leading-none px-[50px] text-white md:text-black ${menu ? "block" : "hidden"} z-50`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
            <i onClick={()=> setMenu(!menu)} className="fa-solid fa-bars block md:hidden text-2xl cursor-pointer"></i>
        </nav>
    </header>
  );
}

export default Header;
