import React from "react";
import { MdVerified } from "react-icons/md";
import weeknd from "../assets/img/bg.jpg";
import img from "../assets/img/img.png";
import "./BannerComponent.styles.css";

function Bannercomponent() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${weeknd})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full h-72 rounded-3xl shadow-md relative "
      >
        <div
          className="absolute inset-0 bg-bgoverlay rounded-3xl flex items-end justify-between
            px-12 "
        >
          <div className="flex flex-col items-start gap-2 h-full justify-center">
            <div className="flex items-center justify-center gap-1">
              <MdVerified className="text-blue-500" />
              <p className="text-base text-gray-200">Verified</p>
            </div>
            <h1 className="capitalize font-medium text-[36px] text-primary">
              The Weeknd
            </h1>
            <p className="text-sm text-gray-200" las>
              <span className="text-base font-semibold">11,23,456</span> monthly
              fans count
            </p>
            
          </div>
          <img src={img} className="w-72 object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
