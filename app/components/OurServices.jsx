import Image from "next/image";
import React from "react";
const OurServices = () => {
  return (
    <section className="mx-auto py-5 px-4">
      <h3 className="text-center text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
        What we offer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-2 md:p-8 lg:p-12">
        {/* <div className="group relative block bg-black ">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div href="#" className="group relative block h-48 md:h-48">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-red-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <Image src={"/house.png"} width={80} height={80} alt="category" />

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Property Valuation
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                Property Valuation
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Property valuation is an estimation which comprehends the value
                of a property while considering the improvements and
                depreciation; it is especially one carried out by a professional
                valuer.
              </p>

              <a className="mt-12 font-bold cursor-pointer">Read more</a>
            </div>
          </div>
        </div>
        <div href="#" className="group relative block h-48 md:h-48">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-red-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <Image src={"/eye.png"} width={80} height={80} alt="category" />

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Property Consultation
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                Property Consultation
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <a className="mt-8 font-bold cursor-pointer">Read more</a>
            </div>
          </div>
        </div>
        <div href="#" className="group relative block h-48 md:h-48">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-red-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <Image
                src={"/marketing.png"}
                width={80}
                height={80}
                alt="category"
              />

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">Brokerage</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-bold sm:text-2xl">Brokerage</h3>

              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <a className="mt-8 font-bold cursor-pointer">Read more</a>
            </div>
          </div>
        </div>
        <div href="#" className="group relative block h-48 md:h-48">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-red-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <Image
                src={"/office-building.png"}
                width={80}
                height={80}
                alt="category"
              />

              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Real Estate Development
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                Real Estate Development
              </h3>

              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <a className="mt-8 font-bold cursor-pointer">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
