import { ASSETS } from "@/constants";
import { StandardWidthLayout } from "@/App";
import { GlowButton } from "../glow-button";
import { cn } from "@/lib/utils";
import { usePartnerModal } from "@/store/partnerModal";

export const EconomicTrustSection = () => {
  const { setOpen } = usePartnerModal();
  return (
    <div className="bg-black text-white flex flex-col gap-5 h-full items-center pt-40">
      <StandardWidthLayout>
        {/* UPPER */}
        <div className="border border-white/15 p-10 lg:p-20 rounded-xl">
          <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between">
            <div className="text-center flex flex-col gap-4 lg:text-start md:gap-8">
              <p className="text-3xl md:text-5xl font-medium xl:text-6xl 2xl:text-6xl 5xl:text-7xl">
                <span>
                  Turning <span className="text-nowrap">consensus into</span>
                </span>{" "}
                <span className="font-semibold text-radial-blue block">
                  Economy of trust
                </span>
              </p>

              <p className="text-base md:text-2xl xl:text-3xl 5xl:text-4xl tracking-wide lg:tracking-normal text-white/70">
                We make real participations into measurable intelligence
              </p>
            </div>
            {/* img */}
            <div className="aspect-square w-full max-w-[20rem] md:max-w-[30rem] lg:max-w-[35rem] 5xl:max-w-[45rem]">
              <img
                className="h-full w-full object-contain"
                src={ASSETS.images.economyOfTrust}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="py-14 md:py-20 flex flex-col items-center gap-8 border-b-[3px] border-white/10">
          {/* logo */}
          <div className="aspect-square h-16">
            <img
              className="h-full w-full object-contain"
              src={ASSETS.images.logo}
              alt="logo"
            />
          </div>
          {/* middle para */}
          <div className="max-w-72 sm:max-w-96 md:max-w-none text-center flex flex-col gap-5 mb-5">
            <p className="font-plusjakarta text-3xl md:text-5xl 2xl font-bold">
              Email us: <a href="mailto:hello@xpoll.io">hello@xpoll.io</a>
              {/* Stay <span className="text-nowrap">tuned for</span> XPOLL insights */}
            </p>
            <p className="font-inter font-normal text-base md:text-2xl text-[#A5ABB6]">
              Phone: <a href="tel:+1 860 655 0095">+1 860 655 0095</a>
            </p>
          </div>
          <div className="flex flex-col gap-24 md:gap-32 items-center">
            <>
              <GlowButton
                color="custom"
                customColor="rgba(10, 124, 255)"
                className="rounded-full 5xl:hidden max-w-60"
                size="lg"
                type="button"
                onClick={() => setOpen(true)}
              >
                Partner with us
              </GlowButton>
              <GlowButton
                color="custom"
                customColor="rgba(10, 124, 255)"
                className="rounded-full hidden 5xl:block"
                size="2xl"
                type="button"
                onClick={() => setOpen(true)}
              >
                Partner with us
              </GlowButton>
            </>
            <div className="flex items-center gap-12 md:gap-20">
              <GlowCircle
                img={ASSETS.images.icons.x}
                size="md"
                className="h-16 p-[1rem] md:h-20 mdp-[1.35rem]"
                onClick={() =>
                  window.open("https://x.com/xpollplatform", "_blank")
                }
              />
              <GlowCircle
                img={ASSETS.images.icons.instagram}
                size="md"
                className="h-16 p-[1rem] md:h-20 mdp-[1.35rem]"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/xpollplatform/",
                    "_blank"
                  )
                }
              />
              <GlowCircle
                img={ASSETS.images.icons.telegram}
                size="md"
                className="h-16 p-[1rem] md:h-20 mdp-[1.35rem]"
                onClick={() =>
                  window.open("https://t.me/xpollplatform", "_blank")
                }
              />
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col items-center gap-20 text-center py-16 md:py-20 text-sm md:text-lg lg:text-lg w-full">
          {/* <div className="hidden lg:flex lg:items-center lg:justify-center gap-x-5 lg:gap-x-10 gap-y-5 text-[#A5ABB6] w-full max-w-[60rem]">
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer">
              Product suite
            </div>
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer">
              Build For
            </div>
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer">
              Resources
            </div>
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer">
              About
            </div>
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer text-nowrap">
              Request admin demo
            </div>
            <div className="md:hover:text-white/80 md:transition md:duration-200 md:cursor-pointer">
              Sign In
            </div>
          </div> */}
          <p className="text-[#676D79] tracking-wide">
            © 2025 XPoll Inc. All rights reserved.
          </p>
        </div>
      </StandardWidthLayout>
    </div>
  );
};

type GlowCircleProps = {
  img: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const GlowCircle = ({
  img,
  onClick,
  size = "md",
  className,
}: GlowCircleProps) => {
  const sizeClasses = {
    sm: "h-12 p-2.5", // ~48px
    md: "h-20 p-[1.35rem]", // ~80px (your current default)
    lg: "h-28 p-6", // ~112px
  }[size];

  return (
    <div
      className={cn(
        `glow-circle aspect-square ${sizeClasses} overflow-hidden cursor-pointer`,
        className
      )}
      onClick={onClick}
    >
      <img
        src={img}
        alt="glow-icon"
        className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};
