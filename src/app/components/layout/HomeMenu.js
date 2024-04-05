import Image from "next/image";
import React from "react";
import MenuItems from "./MenuItems";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src={"/sallad1.png"}
            width={109}
            height={109}
            alt="Salad"
          ></Image>
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image
            src={"/sallad2.png"}
            width={107}
            height={195}
            alt="Salad"
          ></Image>
        </div>
      </div>
      <div className="text-center">
        <SectionHeaders
            subHeader={'Check Out'}
            mainHeader={'Menu'}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-14">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
};

export default HomeMenu;
