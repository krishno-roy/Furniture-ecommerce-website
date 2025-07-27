import React from "react";
import LogoImg from "../../assets/Logo-7.png";
import LogoImg2 from "../../assets/Logo-6.png";
import LogoImg3 from "../../assets/Logo-4.png";
import LogoImg4 from "../../assets/8.png";
import LogoImg5 from "../../assets/7.png";
import LogoImg6 from "../../assets/6.png";

const LogoSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
        <img src={LogoImg} alt="Logo 1" className=" object-contain" />
        <img src={LogoImg2} alt="Logo 2" className=" object-contain" />
        <img src={LogoImg3} alt="Logo 3" className=" object-contain" />
        <img src={LogoImg4} alt="Logo 4" className=" object-contain" />
        <img src={LogoImg5} alt="Logo 5" className=" object-contain" />
        <img src={LogoImg6} alt="Logo 6" className="object-contain" />
      </div>
    </div>
  );
};

export default LogoSection;
