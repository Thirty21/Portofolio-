"use client";
import { MaskContainer } from "@/component/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <>
      <div className="flex items-center  mt-10 space-x-40">
        <div className="h-[20rem] flex items-center justify-center  overflow-hidden lg:flex-row">
          <MaskContainer
            revealText={
              <p className=" text-white-800 text-left text-2xl  sm:text-5xl font-bold">
                Nice to meet you!👋 <br />
                <span className="underline underline-offset-4 decoration-green-500">
                  {"Im' Ahdikhf. "}
                </span>
              </p>
            }
            className="w-[20rem] h-[20rem] md:w-[23rem]    lg:w-[40rem] text-center rounded-md"
          >
            <div className="text-2xl sm:text-3xl">
              Based in <span className="text-green-500">Indonesia</span>,{" "}
              {"I'm a Frontend Developer"}
              <span className="text-indigo-500"> passionate </span>about
              building a modern web{" "}
              <span className="text-green-500">aplication</span> that user love.
            </div>
          </MaskContainer>
        </div>
        {/* <div>
          <div className="w-72 h-72 relative">
            <div className="flex gap-3 translate-x-8">
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-1/2 right-1/2 -z-10"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}
