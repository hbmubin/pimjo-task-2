import FeatureImg1 from "./../assets/Frame.svg";
import FeatureImg2 from "./../assets/Frame (1).svg";
import FeatureImg3 from "./../assets/Frame (2).svg";
import FeatureImg4 from "./../assets/Frame (3).svg";
import FeatureImg5 from "./../assets/Frame (4).svg";
import FeatureImg6 from "./../assets/Frame (5).svg";
const Features = () => {
  const cardShadow = {
    boxShadow: "0px 6px 90px 0px rgba(8, 14, 40, 0.07)",
  };
  return (
    <section className="2xl:max-w-[1315px] max-w-[1280px] mx-auto  pb-[150px] ">
      <div className="text-center">
        <h3 className="uppercase font-medium text-sm text-slate-900 py-[5px] px-[18px] rounded-[20px] inline-block bg-[#EDF5FF]">
          SaaS Features
        </h3>
        <h1 className="font-bold text-[44px] text-slate-900 my-[15px]">
          Our Software{"'"}s Core Features
        </h1>
        <p className="max-w-[595px] font-normal text-base text-slate-500 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
          maximus.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-3 2xl:gap-[50px]">
        <article
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg1} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            Crafted for SaaS
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </article>
        <div
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg2} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            High-quality Design
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </div>
        <div
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg3} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            All Essential Sections
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </div>
        <div
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg4} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            Speed Optimized
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </div>
        <div
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg5} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            Fully Customizable
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </div>
        <div
          style={cardShadow}
          className="w-[405px] h-[298px] rounded-lg flex flex-col border-[1px] p-[50px] border-white"
        >
          <div className="bg-[#006BFF] w-[64px] h-[64px] inline-block p-[14px] rounded">
            <img src={FeatureImg6} />
          </div>
          <h2 className="text-[26px] font-semibold text-slate-900 mt-[31px] flex-grow">
            Regular Updates
          </h2>
          <p className="font-normal text-base text-slate-500 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
