import { StandardWidthLayout } from "@/App";
import { ASSETS } from "@/constants";

const data = [
  {
    title: "Sentiment Heatmaps",
    description:
      "Visual breakdown of positive, negative, neutral, and skeptical opinions across regions, cohorts, or demographics.",
    children: (
      <div className="h-full w-full">
        <img
          className="object-contain h-full w-full"
          src={ASSETS.images.aiInsights.img1}
          alt="sentiment-heatmap"
        />
      </div>
    ),
  },
  {
    title: "AI Predictive Insights",
    description:
      "AI-driven summaries forecasting likely outcomes, behavioral shifts, and sentiment trends.",
    children: (
      <video
        src={ASSETS.vids.waterBall}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="pointer-events-none static left-0 top-0 translate-x-0 -translate-y-10 w-full h-auto object-cover object-center"
      />
    ),
  },
  {
    title: "Demographic Splits",
    description:
      "Segment poll results by age, location, occupation, or civic score tiers to reveal group-level patterns.",
    children: (
      <div className="h-full w-full">
        <img
          className="object-contain h-full w-full scale-[1.75] translate-y-11 lg:translate-y-[3.25rem]"
          src={ASSETS.images.aiInsights.img3}
          alt="sentiment-heatmap"
        />
      </div>
    ),
  },
  {
    title: "Engagement Depth",
    description:
      "Measure active participation, repeat voting, retention, and weighted responses based on civic scores.",
    children: (
      <div className="h-full w-full">
        <img
          className="object-contain h-full w-full"
          src={ASSETS.images.aiInsights.img4}
          alt="sentiment-heatmap"
        />
      </div>
    ),
  },
  {
    title: "Comparative Benchmarks",
    description:
      "Side-by-side comparisons of multiple polls, campaigns, products, or governance proposals for clarity.",
    children: (
      <div className="h-full w-full">
        <img
          className="object-contain h-full w-full scale-x-[1.15] -translate-x-1.5"
          src={ASSETS.images.aiInsights.img5}
          alt="sentiment-heatmap"
        />
      </div>
    ),
  },
  {
    title: "Trend Trajectories",
    description:
      "Track how sentiment and support shift over time, highlighting momentum and inflection points.",
    children: (
      <div className="h-full w-full">
        <img
          className="object-contain h-full w-full scale-x-[1.15] -translate-x-1"
          src={ASSETS.images.aiInsights.img6}
          alt="sentiment-heatmap"
        />
      </div>
    ),
  },
];
export const InsightsSection = () => {
  return (
    <div className="bg-black py-16 px-5 relative overflow-hidden">
      <div className="absolute inset-0 z-10 -translate-y-56 scale-x-125">
        <div className="h-full w-full relative">
          <div className="absolute inset-0 z-10 bg-radial-darkblue"></div>
        </div>
      </div>
      <StandardWidthLayout>
        <div className="flex flex-col items-center w-full gap-7 relative z-20">
          <div className="flex gap-3 items-center justify-center">
            <div className="aspect-square h-10">
              <img
                className="h-full w-full"
                src={ASSETS.images.sparkle}
                alt=""
              />
            </div>
            <span className="font-medium text-linear-blue block uppercase text-center tracking-widest text-xl">
              Get Ai driven Insights
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {data?.map(({ title, description, children }) => {
              return (
                <InsightCard
                  key={title + description}
                  title={title}
                  description={description}
                  children={children}
                />
              );
            })}
          </div>
        </div>
      </StandardWidthLayout>
    </div>
  );
};

const InsightCard = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col h-80 lg:h-96 aspect-[2.2/2] rounded-xl overflow-hidden">
      <div className="basis-[60%] overflow-hidden bg-white/[0.07] p-3">
        {children}
      </div>
      <div className="basis-[40%] overflow-auto bg-white/[0.10] flex flex-col gap-2 py-3 px-3 lg:py-6 lg:px-5 w-full">
        <h2 className="uppercase text-white text-lg lg:text-xl tracking-wide">
          {title}
        </h2>
        <p className="text-white/60 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};
