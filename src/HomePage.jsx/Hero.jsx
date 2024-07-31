import Banner from "./../assets/Image.png";
import Dot from "./../assets/Group 1000002986.svg";
import Sally from "./../assets/Saly-22.png";
import Star from "./../assets/62093bed21fdcc09e3609efb_abstract 1.svg";
const Hero = () => {
  const bannerShadow = {
    boxShadow: "0px 2px 15px 0px rgba(122, 135, 167, 0.08)",
  };
  return (
    <section className="2xl:max-w-[1440px] max-w-[1200px] pt-24 flex items-center mx-auto mt-20 2xl:translate-x-6 translate-x-3">
      <div className="flex-1">
        <div className="max-w-[587px]">
          <h2 className="text-lg font-medium text-slate-900">
            🔥 Solid is one of the best option for you.
          </h2>
          <h1 className="font-bold  text-[44px] text-slate-900 mb-5 mt-[18px] leading-[58px]">
            Complete Tailwind CSS{" "}
            <span className="relative z-20">
              Template
              <span className="absolute left-0 -z-50 bottom-[5px] w-full h-[11px] bg-cyan-200"></span>
            </span>{" "}
            for SaaS Website
          </h1>
          <p className="font-normal text-base leading-[26px] text-slate-500">
            Solid is a complete Tailwind CSS template crafted specially for
            SaaS, Software Mobile App and Web App Sites.
          </p>
          <div className="mt-10 mb-[22px]">
            <input
              className="mr-[20px] w-[312px] rounded-[30px] border-[1px] py-[12px] px-6 placeholder:text-slate-500 focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            />
            <button>
              <a
                className="text-base font-medium bg-slate-900 hover:text-slate-100 text-white py-[12px] px-[30px] rounded-[30px] hover:bg-black duration-200"
                href="#"
              >
                Get Started
              </a>
            </button>
          </div>
          <p className="font-normal text-base text-slate-900">
            Try for free no credit card required.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-end ">
        <div className="relative" style={bannerShadow}>
          <img className=" 2xl:min-w-[700px] max-w-[500px]" src={Banner} />
          <div className="absolute  z-10 left-[-46px] top-0">
            <img src={Sally} />
          </div>
          <div className="absolute z-10 right-[-26px] bottom-[-8px]">
            <img src={Star} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
