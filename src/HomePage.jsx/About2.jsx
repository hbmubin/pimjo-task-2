import AboutImg2 from "./../assets/Image (2).svg";
import Arrow from "./../assets/Frame (6).svg";
const About2 = () => {
  return (
    <section className="pb-40">
      <div className="2xl:max-w-[1235px] max-w-[1180px] mx-auto grid grid-cols-2 justify-between items-center">
        <div className="">
          <article className="max-w-[517px]">
            <h2 className="uppercase text-base font-medium text-slate-900">
              grow your business faster
            </h2>

            <h1 className="font-bold text-[44px] text-slate-900 leading-[55px] pt-[15px] pb-[25px]">
              Track Your Audience{" "}
              <span className="relative z-20">
                Activities
                <span className="absolute left-0 -z-50 bottom-[5px] w-full h-[11px] bg-amber-100"></span>
              </span>{" "}
            </h1>
            <p className="text-slate-500 font-normal text-base leading-[26px] mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ultricies lacus non fermentum ultrices. Fusce consectetur le.
            </p>
            <div className="inline-block">
              <a className="flex items-center gap-[5px]" href="#">
                <span className="uppercase text-base font-normal text-slate-900">
                  know more
                </span>
                <span>
                  <img src={Arrow} />
                </span>
              </a>
            </div>
          </article>
        </div>
        <div className="pb-[26px] flex justify-end">
          <img src={AboutImg2} />
        </div>
      </div>
    </section>
  );
};

export default About2;
