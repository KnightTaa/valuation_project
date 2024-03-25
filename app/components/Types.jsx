import Image from "next/image";
import React from "react";
const Types = () => {
  return (
    <div className="p-10 mt-5">
      <h2 className="text-center mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">Types of Valuations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/handshake.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Sale and purchase</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/earth.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Visa purposes</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/tags.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Capital Gains Tax</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/house.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Mortgages</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/link.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Acquisitions and mergers</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/dollar.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Stamp duty and compulsory purchase</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/growth.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Accounting and financial purposes</h5>
        </div>
        <div className="flex flex-col items-center bg-accent/5 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-accent/20">
          <Image
            src={"/percentage.png"}
            width={60}
            height={60}
            alt="category"
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h5 className="text-black/80 text-center">Fix rent/leases</h5>
        </div>
      </div>
    </div>
  );
};

export default Types;
