import { StandardWidthLayout } from "@/App";
import { ASSETS } from "@/constants";
import { cn } from "@/lib/utils";

export const FutureOfIntelligence = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <StandardWidthLayout noOnMobile={true} transitionBreakpointProp={1920}>
        <div className="w-full xl:rounded-3xl px-4 pt-12 xl:overflow-hidden bg-[#0964ff] relative">
          {/* background video */}
          <video
            className="absolute hidden lg:block inset-0 w-full h-full object-cover mix-blend-screen opacity-80 pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={ASSETS.vids.beamsBg} type="video/mp4" />
          </video>
          <div className="flex flex-col items-center w-full gap-8 lg:gap-20">
            {/* heading */}
            <h1 className="text-center text-3xl lg:text-5xl font text-white">
              Future of <br />{" "}
              <span className="text-beige-gradient text-4xl lg:text-6xl font-medium">
                Civic Intelligence
              </span>
            </h1>
            {/* mobile */}
            <div className="w-full xl:hidden flex flex-col items-center">
              {/* pointers */}
              <div className="flex flex-col items-center gap-4 w-full lg:grid lg:grid-cols-2">
                <Capsule
                  img={ASSETS.images.futureOfIntelligence.institutes}
                  heading="Institutes"
                  subHeading="Research & Analytics Portal"
                  description="Influence, Understand & Analyze"
                />
                <Capsule
                  img={ASSETS.images.futureOfIntelligence.communities}
                  heading="Communities"
                  subHeading="Connect causes"
                  description="Outreach, Organize & Engage"
                />
                <Capsule
                  img={ASSETS.images.futureOfIntelligence.web3}
                  heading="Web3"
                  subHeading="On-Chain Suite"
                  description="Understand, Distribute & Govern"
                />
                <Capsule
                  img={ASSETS.images.futureOfIntelligence.individuals}
                  heading="Individuals"
                  subHeading="Personal Civic Identity"
                  description="Verified, Credibility & Rewards "
                />
              </div>
              {/* img */}
              <div className="w-[250%] max-w-[70rem] relative">
                <div className="absolute top-1/2 left-1/2">
                  <ConcentricCircles
                    numberOfCircles={25}
                    gap={25}
                    borderWidth={2}
                  />
                </div>
                <img
                  className="relative w-full h-full z-20"
                  src={ASSETS.gifs.handPhoneGif}
                  alt=""
                />
              </div>
            </div>

            {/* desktop */}
            <div className="hidden xl:block">
              <div className="w-[250%] max-w-[70rem] relative">
                <Capsule
                  className="absolute top-[25%] left-[-32%]"
                  showRightHandler={true}
                  img={ASSETS.images.futureOfIntelligence.communities}
                  heading="Communities"
                  subHeading="Connect causes"
                  description="Outreach, Organize & Engage"
                />
                <Capsule
                  className="absolute top-[55%] left-[-37%] 2xl:left-[-45%]"
                  showRightHandler={true}
                  img={ASSETS.images.futureOfIntelligence.institutes}
                  heading="Institutes"
                  subHeading="Research & Analytics Portal"
                  description="Influence, Understand & Analyze"
                />

                <Capsule
                  className="absolute top-[25%] right-[-32%]"
                  showLeftHandler={true}
                  img={ASSETS.images.futureOfIntelligence.web3}
                  heading="Web3"
                  subHeading="On-Chain Suite"
                  description="Understand, Distribute & Govern"
                />
                <Capsule
                  className="absolute top-[55%] right-[-37%] 2xl:right-[-45%]"
                  showLeftHandler={true}
                  img={ASSETS.images.futureOfIntelligence.individuals}
                  heading="Individuals"
                  subHeading="Personal Civic Identity"
                  description="Verified, Credibility & Rewards "
                />
                <div className="absolute top-1/2 left-1/2">
                  <ConcentricCircles
                    numberOfCircles={15}
                    gap={25}
                    borderWidth={2}
                  />
                </div>
                <img
                  className="relative w-full h-full z-20"
                  src={ASSETS.gifs.handPhoneGif}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </StandardWidthLayout>
    </div>
  );
};

export const ConcentricCircles = ({
  numberOfCircles,
  gap,
  borderWidth = 1,
}: {
  numberOfCircles: number;
  gap: number; // gap between each circle in px
  borderWidth?: number; // optional, defaults to 1px
}) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      {Array.from({ length: numberOfCircles }).map((_, i) => {
        const size = (i + 1) * gap * 2; // diameter expands by gap
        return (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 bg-transparent"
            style={{
              width: size,
              height: size,
              borderWidth: borderWidth,
            }}
          />
        );
      })}
    </div>
  );
};

const Capsule = ({
  img,
  heading,
  subHeading,
  description,
  showLeftHandler,
  showRightHandler,
  className,
}: {
  img: string;
  heading: string;
  subHeading: string;
  description: string;
  showLeftHandler?: boolean;
  showRightHandler?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex items-center gap-5 w-full justify-center", className)}
    >
      {/* left handler */}
      {showLeftHandler && (
        <div className="aspect-square h-6 2xl:h-8 hidden md:block">
          <img
            className="h-full w-full"
            src={ASSETS.images.futureOfIntelligence.circleHandle}
          />
        </div>
      )}
      {/* main card */}
      <div
        className="rounded-full flex flex-nowrap items-center gap-5 p-4 w-full max-w-96"
        style={{
          background:
            "linear-gradient(89.8deg, rgba(0, 0, 0, 0.51) 0.15%, rgba(0, 0, 0, 0.12) 100.01%)",
          backdropFilter: "blur(166.60540771484375px)",
        }}
      >
        {/* Card Content */}
        <div className="overflow-hidden rounded-full aspect-square shrink-0 h-14 2xl:h-16">
          <img src={img} className="h-full" />
        </div>
        <div className="w-full flex flex-col gap-2 font-urbanist">
          <div className="w-full flex flex-col">
            <p className=" text-white text-base 2xl:text-lg font-bold">
              {heading}
            </p>
            <p className="text-white/70 text-sm 2xl:text-base font-semibold">
              {subHeading}
            </p>
          </div>
          <p className="text-white font-bold text-xs 2xl:text-sm">
            {description}
          </p>
        </div>
      </div>
      {/* right handler */}
      {showRightHandler && (
        <div className="aspect-square h-6 2xl:h-8 hidden md:block">
          <img
            className="h-full w-full"
            src={ASSETS.images.futureOfIntelligence.circleHandle}
          />
        </div>
      )}
    </div>
  );
};
