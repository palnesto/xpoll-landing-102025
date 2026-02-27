import { Check } from "lucide-react";
import soulBoundToken from "@/assets/soulBound.png";
import { motion } from "framer-motion";
const MARKETPLACE_URL = "https://app.xpoll.io/marketplace";

const TEAL = "#0F9BA3";

const cards = [
  {
    id: "soul-bound",
    title: "Soul-bound Subscription",
    price: "$7/mo",
    description:
      "Own your signal. Secure your history. Unlock a private AI layer on your participation.",
    features: [
      "Soul-bound token creation",
      "Personal signal history saved",
      <>AI insights layer (<span className="font-semibold text-slate-700">basic</span>)</>,
      "Private-by-design signal storage",
    ],
    comingSoon: "Soul Bound Token Coming soon",
    ctaText: "Secure My Signal",
  },
  {
    id: "ad-experience",
    title: "Ad Experience Subscription",
    price: "$150/mo",
    description:
      "Run a focused, measurable campaign with targeting, premium placement, and live optimization.",
    features: [
      "1 active ad campaign slot",
      "Premium placement surfaces",
      "Geo targeting",
      "Category targeting",
      <>1 destination link (<span className="font-semibold text-xteal">CTA</span>)</>,
      "Ad copy variants",
      "Creative swap support",
      "Views + clicks analytics",
      "Weekly optimization notes",
      "Live monitoring support",
    ],
    comingSoon: null,
    ctaText: "Launch My Ad",
  },
  {
    id: "web3-launch",
    title: "Web3 Launch Campaign",
    price: "$350/mo",
    description:
      "Launch with structure - narrative, rewards, sentiment capture, and a full signal report to close the loop.",
    features: [
      "Launch campaign setup",
      "Narrative + positioning",
      "Polls/trails creation",
      "Reward rules + caps",
      "Campaign landing page",
      "Share + growth hooks",
      "Verified sentiment capture",
      "Launch copy kit",
      "Post-launch signal report",
      "1 iteration update",
    ],
    comingSoon: null,
    ctaText: "Launch Campaign",
  },
] as const;

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.45, ease: "easeOut" as const },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: TEAL }}
      >
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </span>
      <div className="text-[13px] leading-[18px] text-slate-600">{children}</div>
    </div>
  );
}

function SoulBoundTokenIcon() {
  return (
    <span
      className=""
      aria-hidden
    >
      <img src={soulBoundToken} alt="Soul Bound Token"
        className="h-7 w-7 object-contain"
        style={{ animation: "spinY 2s linear infinite" }} />
    </span>
  );
}

export function MarketplaceSubscriptions() {
  return (
    <section className="w-full bg-slate-100 px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-7 text-center text-xl font-semibold text-slate-900 sm:mb-9 sm:text-2xl font-manrope">
          Marketplace Subscriptions
        </h2>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {cards?.map((card) => (

            <motion.div
              key={card.id}
              variants={item}
              whileHover={{
                y: -6,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="rounded-xl h-fit w-full bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.6)] ring-1 ring-slate-900/5"
            >
              <div className="font-semibold text-slate-800 font-manrope">
                {card.title}
              </div>
              <div className="mt-1 text-xl font-bold text-slate-900 font-manrope">
                {card.price}
              </div>

              <p className="mt-2 whitespace-pre-line text-[12.5px] leading-[18px] text-slate-500 font-manrope">
                {card.description}
              </p>

              <div className="space-y-3 py-5">
                {card.features.map((feature, idx) => (
                  <Bullet key={`${card.id}-${idx}`}>{feature}</Bullet>
                ))}
              </div>

              {card.comingSoon && (
                <p className="flex items-center gap-1.5 font-bold text-[13px] text-slate-800 font-manrope pb-4">
                  <SoulBoundTokenIcon />
                  {card.comingSoon}
                </p>
              )}

              <a
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-xteal/70 bg-white px-4 py-2.5 text-center text-sm font-semibold text-xteal shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-colors hover:bg-xteal hover:text-white focus:outline-none focus:ring-2 focus:ring-xteal/40 font-manrope"
              >
                {card.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketplaceSubscriptions;
