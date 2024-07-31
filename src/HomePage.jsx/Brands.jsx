import Logitech from "./../assets/logitech-2-1-1.svg";
import Dropcam from "./../assets/dropcam-1-1.svg";
import AMD from "./../assets/amd-logo-1.svg";
import Nike from "./../assets/nike-4.svg";
import Mandiri from "./../assets/Frame 4.svg";
import Amazon from "./../assets/amazon-2.svg";
const Brands = () => {
  return (
    <section className="py-[45px]  mt-[108px] mb-[125px] bg-[#FBFBFB] border-y-[1px] border-y-[#EEE]">
      <div className="flex 2xl:gap-[105px] 2xl:max-w-[1187px] max-w-[1000px] mx-auto justify-between">
        <img src={Logitech} />
        <img src={Dropcam} />
        <img src={AMD} />
        <img src={Nike} />
        <img src={Mandiri} />
        <img src={Amazon} />
      </div>
    </section>
  );
};

export default Brands;
