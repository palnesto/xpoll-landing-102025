import { ASSETS } from "@/constants";

export const LLMQuerySection = () => {
  return (
    <div className="overflow-hidden bg-black relative pt-10 sm:pt-20 lg:pt-40 px-2">
      <div className="absolute inset-0 big-radial"></div>
      {/* grid */}
      <div className="absolute bottom-0 w-full h-full">
        <img
          src={ASSETS.images.squareGPattern}
          alt=""
          className="opacity-35 h-full w-full object-cover [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))] [mask-repeat:no-repeat] [mask-size:100%] [-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%]"
        />
      </div>
      {/* stars bg */}
      <div className="absolute h-full w-full -top-[20%] -translate-x-1/2 left-1/2">
        <img
          className="h-full w-full object-contain"
          src={ASSETS.images.starsBg}
        />
      </div>
      <div className="text-center flex flex-col items-center w-full gap-5 sm:px-10 lg:scale-125 xl:scale-125">
        <div className="font-semibold text-white-radial text-xl sm:text-3xl lg:text-4xl">
          <p>AI & DATA INTELLIGENCE</p>
          <p>Where Opinion Becomes Insight</p>
        </div>
        <p className="text-[#77798F] text-sm sm:text-lg lg:text-xl max-w-xl md:max-w-3xl">
          XPoll’s intelligence engine converts live consensus data into
          real-time dashboards, for governments, institutions, and Web3
          ecosystems.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[96rem] translate-y-[12%] relative">
          {/* tags */}
          <p className="backdrop-blur-lg bg-blur-lg hidden md:block absolute bg-[#FFFFFF17] text-white px-10 py-2 rounded-full z-50 left-[-0.5%] top-[15%] text-xs lg:text-base lg:left-[4%]">
            Political Dashboard
          </p>
          <p className="backdrop-blur-lg bg-blur-lg hidden md:block absolute bg-[#FFFFFF17] text-white px-10 py-2 rounded-full z-50 right-[5%] top-[27%] text-xs lg:text-base lg:right-[3%] lg:top-[25%]">
            Protocol Dashboard
          </p>
          <p className="backdrop-blur-lg bg-blur-lg hidden md:block absolute bg-[#FFFFFF17] text-white px-10 py-2 rounded-full z-50 right-[15%] top-[41%] text-xs lg:text-base lg:right-[10%] lg:top-[40%]">
            Institutional Dashboard
          </p>
          {/* left */}
          <div className="absolute scale-x-[-1] left-0 -translate-x-[40%] top-1/2 -translate-y-1/2">
            <img
              src={ASSETS.images.sideLinesPattern}
              className="h-full w-full"
            />
          </div>
          {/* right */}
          <div className="absolute right-0 translate-x-[40%] top-1/2 -translate-y-1/2">
            <img
              src={ASSETS.images.sideLinesPattern}
              className="h-full w-full"
            />
          </div>
          <img
            className="h-full scale-125 md:scale-100 w-full object-contain relative"
            src={ASSETS.gifs.llmQueryGif}
          />
        </div>
      </div>
    </div>
  );
};
