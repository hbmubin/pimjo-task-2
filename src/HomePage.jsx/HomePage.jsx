import About1 from "./About1";
import About2 from "./About2";
import Brands from "./Brands";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="inter overflow-x-hidden overflow-y-hidden relative">
      <Navbar></Navbar>
      <Hero></Hero>
      <Brands></Brands>
      <Features></Features>
      <About1></About1>
      <About2></About2>
    </div>
  );
};

export default HomePage;
