// export const FeaturesSection = () => {
//   return (
//     <div className="flex items-center justify-center h-full bg-green-500 font-plusjakarta font-semibold">
//       <div className="space-y-4">
//         <p className="text-semibold text-fluid-xs">This is fluid XS text</p>
//         <p className="text-semibold text-fluid-sm">This is fluid SM text</p>
//         <p className="text-semibold text-fluid-base">This is fluid BASE text</p>
//         <p className="text-semibold text-fluid-lg">This is fluid LG text</p>
//         <p className="text-semibold text-fluid-xl">This is fluid XL text</p>
//         <p className="text-semibold text-fluid-2xl">
//           This is fluid 2XL heading
//         </p>
//         <p className="text-semibold text-fluid-3xl">
//           This is fluid 3XL heading
//         </p>
//         {/* <p className="font-manrope text-semibold text-fluid-4xl">
//           This is fluid 4XL heading
//         </p>
//         <p className="text-semibold text-fluid-5xl">
//           This is fluid 5XL heading
//         </p>
//         <p className="text-semibold text-fluid-6xl">
//           This is fluid 6XL heading
//         </p> */}
//       </div>
//     </div>
//   );
// };
import { ASSETS } from "@/constants";

export const FeaturesSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Inline keyframes so no Tailwind config changes are required */}
      <style>{`
@keyframes slide-bg-x {
0% { background-position: 0 0; }
100% { background-position: -2000px 0; }
}
.bg-scroll-x {
background-image: url('${ASSETS.images.featuresBg}');
background-repeat: repeat-x;
background-size: auto 100%; /* keep full height, repeat horizontally */
animation: slide-bg-x 6s linear infinite; /* smooth continuous slide */
will-change: background-position;
}
@media (max-width: 1023px) { /* slower on large screens for subtlety */
.bg-scroll-x { animation-duration: 12s; }
}
@media (min-width: 1024px) { /* slower on large screens for subtlety */
.bg-scroll-x { animation-duration: 9s; }
}
`}</style>

      {/* Animated background layer */}
      <div className="absolute inset-0 bg-scroll-x" aria-hidden="true" />

      {/* Optional subtle overlay for readability */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70"
        aria-hidden="true"
      /> */}

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        {/* Paragraph headline */}
        <p className="mx-auto max-w-4xl text-center text-sm sm:text-base text-gray-700">
          The civic intelligence marketplace for institutions, analysts, and
          Web3.5 communities
          <br className="hidden sm:block" />
          powered by transparent polls, AI insights, and reward‑based
          participation.
        </p>

        {/* Videos */}
        <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:items-start lg:justify-between">
          <FeatureVideo
            src={ASSETS.vids.phoneVideo}
            title="Transparent polls"
            posterText="Do you think the recent surge in global AI regulations will accelerate or slow down innovation?"
          />
          <FeatureVideo
            src={ASSETS.vids.ai}
            title="AI Insights"
            posterText="AI‑driven signal extraction from verified votes"
          />
          <FeatureVideo
            src={ASSETS.vids.reward}
            title="Reward based participation"
            posterText="Real rewards for real participation"
          />
        </div>
      </div>
    </section>
  );
};

function FeatureVideo({
  src,
  title,
}: // posterText,
{
  src: string;
  title: string;
  posterText?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
        {/* Light glassy header strip (optional text overlay) */}
        {/* {posterText ? (
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 m-3 rounded-md bg-white/10 px-3 py-2 text-[11px] font-medium leading-tight text-white backdrop-blur">
            {posterText}
          </div>
        ) : null} */}
        <video
          className="block h-[200px] w-full object-cover sm:h-[220px] md:h-[240px]"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="mt-3 text-center text-sm font-semibold text-[#10327E]">
        {title}
      </div>
    </div>
  );
}
