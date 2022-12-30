import React from "react";
import { MdHome } from "react-icons/md";
import Logo from "../assets/img/logo.png";
import { menuitems } from "../utils/support";
import Menuitem from "./Menuitem";

const Leftcontainer = () => {
  return (
    <div className="col-span-2 flex flex-col items-center py-5 px-4">
      <div className="flex items-center justify-center gap-2">
        <img src={Logo} className="w-12" alt="" />
        <p className="text-2xl text-textcolor font-medium">
          <span className="text-orange-500">kiss </span>land
        </p>
      </div>

      <div className="mt-3 w-full flex flex-col items-center justify-center gap-2">
        {menuitems && menuitems.map((item) => <Menuitem key={item.id}
        icon={item.icon}
        name={item.name}
        uri={item.uri}/>)}
      </div>
    </div>
  );
};

export default Leftcontainer;
