import { ASSETS } from "@/constants";
import { usePartnerModal } from "@/store/partnerModal";

export const DecentralizeSection = () => {
  const { setOpen } = usePartnerModal();
  return (
    <div className="overflow-hidden flex flex-col items-center px-4 relative pt-14 lg:pt-40">
      <div className="absolute h-full w-full radial-blue-blur -top-[60%] lg:-top-[49%] scale-125 lg:scale-150" />
      <div className="absolute -left-[8%] aspect-square w-[35vw] xl:w-[30vw] z-50 scale-x-125 origin-left">
        <img
          style={{
            transform: "rotateZ(110deg)", // 👈 rotate by 25 degrees
          }}
          src={ASSETS.images.tentacles}
          className="h-full w-full object-contain opacity-15"
        />
      </div>
      <div className="absolute -right-[8%] top-[1%] md:top-[25%] aspect-square w-[40vw] xl:w-[30vw] z-50 scale-x-[-1]">
        <img
          style={{
            transform: "rotateZ(70deg)", // 👈 rotate by 25 degrees
          }}
          src={ASSETS.images.tentacles}
          className="h-full w-full object-contain opacity-15"
        />
      </div>
      {/* <div
        style={{
          transform: "rotateZ(100deg)", // 👈 rotate by 25 degrees
        }}
        className="absolute h-[4rem] left-0 z-50"
      >
        <img
          src={ASSETS.images.tentacles}
          className="h-full w-full object-contain"
        />
      </div> */}
      <div className="flex flex-col w-full items-center gap-10 relative">
        <div className="lg:hidden aspect-square h-16">
          <img className="h-full w-full" src={ASSETS.images.xpollLogo} alt="" />
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-black/50 font-normal text-lg sm:text-xl lg:text-2xl">
            This is Next
          </p>
          <p className="font-medium text-blue-radial text-3xl sm:text-4xl lg:text-5xl lg:leading-[5rem]">
            Decentralizing Public Consensus
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <a
            href="https://app.xpoll.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0264FF] border border-[#0264FF] rounded-full px-8 py-3 sm:text-lg sm:px-10 sm:py-4"
          >
            Join the movement
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-[#0264FF] text-white rounded-full px-8 py-3"
          >
            Partner with us
          </button>
        </div>
      </div>
      <div className="h-[calc(min(32rem,100vw))] aspect-square">
        <video
          src={ASSETS.vids.globeVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="pointer-events-none h-full w-full object-contain scale-[2.6] md:scale-[3.5] translate-y-[30vw] md:translate-y-[20rem]"
        />
      </div>
    </div>
  );
};
