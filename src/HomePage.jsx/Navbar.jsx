import { useState } from "react";
import Logo from "./../assets/Logo.svg";
import Sun from "./../assets/Sun.svg";
import { useEffect } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    <nav className=" fixed z-40 bg-white w-full">
      <div className="2xl:max-w-[1390px] max-w-[1180px] mx-auto grid grid-cols-2 justify-between items-center pt-9 pb-4">
        <div className="flex justify-between items-center">
          <div>
            <img className="max-w-[120px]" src={Logo} alt="logo" />
          </div>
          <div>
            <ul className="flex gap-10 text-base font-medium text-slate-500">
              <li className="text-blue-600 hover:text-blue-600">
                <a href="#">Home</a>
              </li>
              <li className=" hover:text-blue-600">
                <a href="#">Features</a>
              </li>
              <li className=" hover:text-blue-600">
                <a href="#">Pages</a>
              </li>
              <li className=" hover:text-blue-600">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div onClick={handleTheme}>
            <img className="max-w-[22px] cursor-pointer" src={Sun} />
          </div>
          <div>
            <a
              className=" text-base font-medium text-slate-500 ml-8 mr-6"
              href="#"
            >
              Sign In
            </a>
          </div>
          <button>
            <a
              className=" text-base font-medium bg-blue-500 hover:bg-blue-600 duration-200 hover:text-slate-100 text-white py-[12px] px-[30px] rounded-[30px]"
              href="#"
            >
              Download
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
