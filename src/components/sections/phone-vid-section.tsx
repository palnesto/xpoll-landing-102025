import { ASSETS } from "@/constants";

export const PhoneVidSection = () => {
  return (
    <div className="relative h-[80vh] md:h-auto overflow-hidden">
      <video
        src={ASSETS.vids.phoneVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="
          pointer-events-none
          absolute md:static
          left-1/2 top-1/2 md:left-0 md:top-0
          -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0
          h-full w-auto md:w-full md:h-auto
          object-cover object-center
        "
      />
    </div>
  );
};
