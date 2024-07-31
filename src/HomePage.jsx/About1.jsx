import AboutImg from "./../assets/Image.svg";
const About1 = () => {
  return (
    <section className="pb-[98px]">
      <div className="2xl:max-w-[1235px] max-w-[1180px] mx-auto grid grid-cols-2 justify-between items-center">
        <div className="pb-[26px]">
          <img src={AboutImg} />
        </div>
        <div className="flex justify-end">
          <article className="max-w-[517px]">
            <div className="uppercase flex items-center gap-[15px]">
              <span className="font-medium text-xs py-[5px] px-[18px] rounded-[20px] bg-[#20C5A8] text-white">
                new
              </span>
              <h2 className="text-base font-medium text-slate-900">
                start tracking visitors
              </h2>
            </div>
            <h1 className="font-bold text-[44px] text-slate-900 leading-[55px] pt-[15px] pb-[25px]">
              Know More About Our{" "}
              <span className="relative z-20">
                Product.
                <span className="absolute left-0 -z-50 bottom-[5px] w-full h-[11px] bg-cyan-200"></span>
              </span>{" "}
            </h1>
            <p className="text-slate-500 font-normal text-base leading-[26px] mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ultricies lacus non fermentum ultrices. Fusce consectetur le.
            </p>
            <div>
              <div className="flex gap-[22px] items-center mb-[30px]">
                <div className="border-[1px] border-[#EEE] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-slate-900">
                    01
                  </span>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-slate-900">
                    Lorem ipsum dolor.
                  </h2>
                  <p className="text-base font-normal text-slate-500">
                    Ut ultricies lacus non fermentum ultrices.
                  </p>
                </div>
              </div>
              <div className="flex gap-[22px] items-center mb-[30px]">
                <div className="border-[1px] border-[#EEE] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-slate-900">
                    01
                  </span>
                </div>
                <div>
                  <h2 className="text-[20px] font-medium text-slate-900">
                    Lorem ipsum dolor.
                  </h2>
                  <p className="text-base font-normal text-slate-500">
                    Ut ultricies lacus non fermentum ultrices.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About1;
