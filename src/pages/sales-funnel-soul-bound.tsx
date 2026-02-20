import { ASSETS } from "@/constants";
import { Icon } from "@iconify/react";
 
const XPOLL_LOGO =
  "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/994e20fc-d185-444f-8502-31239fa1f92a/1771284331687-4fe5d0e4/xpoll_logo_-fin.png";

export default function SalesFunnelSoulBound() {
  return (
    <>
      <style>{`@keyframes floatStar{0%,100%{opacity:0.03;transform:translateY(0)}50%{opacity:0.06;transform:translateY(-8px)}}`}</style>
    <div className="min-h-screen flex flex-col font-[Manrope] bg-[#FAFAF8] lg:pt-28">
      {/* Thin patriotic top bar — flag-inspired */}
      <div className="h-1.5 w-full shrink-0 flex">
        <div className="flex-1 bg-[#DC143C]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#0052CC]" />
      </div>

      {/* SECTION 1: HERO — CLEAN CREAM BACKGROUND */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden bg-[#FAFAF8]">
        {/* Stars pattern overlays */}
        <div
          className="absolute inset-0 pointer-events-none z-0 [background-image:radial-gradient(circle,rgba(197,165,90,0.04)_1px,transparent_1px),radial-gradient(circle,rgba(15,155,163,0.03)_1px,transparent_1px)] [background-size:60px_60px,40px_40px] [background-position:0_0,20px_20px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 [background-image:repeating-linear-gradient(180deg,rgba(220,20,60,0.025)_0px,rgba(220,20,60,0.025)_40px,rgba(255,255,255,0)_40px,rgba(255,255,255,0)_80px,rgba(0,82,204,0.02)_80px,rgba(0,82,204,0.02)_120px,rgba(255,255,255,0)_120px,rgba(255,255,255,0)_160px)]"
          aria-hidden
        />

        {/* White House / Capitol silhouette — top left */}
        <div className="absolute top-5 left-5 pointer-events-none z-0 hidden md:block opacity-[0.035]">
          <svg
            width="280"
            height="160"
            viewBox="0 0 280 160"
            fill="currentColor"
            className="text-[#0A1628]"
          >
            <rect x="80" y="120" width="120" height="40" rx="2" />
            <rect x="60" y="110" width="160" height="14" rx="2" />
            <rect x="90" y="80" width="100" height="32" rx="1" />
            <ellipse cx="140" cy="65" rx="50" ry="30" />
            <rect x="130" y="28" width="20" height="38" rx="3" />
            <ellipse cx="140" cy="22" rx="10" ry="12" />
            <rect x="138" y="6" width="4" height="16" />
            <rect x="95" y="82" width="6" height="28" />
            <rect x="110" y="82" width="6" height="28" />
            <rect x="125" y="82" width="6" height="28" />
            <rect x="149" y="82" width="6" height="28" />
            <rect x="164" y="82" width="6" height="28" />
            <rect x="179" y="82" width="6" height="28" />
            <rect x="20" y="125" width="44" height="30" rx="2" />
            <rect x="30" y="118" width="34" height="10" rx="1" />
            <rect x="216" y="125" width="44" height="30" rx="2" />
            <rect x="216" y="118" width="34" height="10" rx="1" />
          </svg>
        </div>

        {/* White House silhouette — top right */}
        <div className="absolute top-6 right-6 md:right-16 pointer-events-none opacity-[0.03] hidden md:block z-0">
          <svg
            width="220"
            height="120"
            viewBox="0 0 220 120"
            fill="currentColor"
            className="text-[#0A1628]"
          >
            <rect x="30" y="60" width="160" height="50" rx="2" />
            <rect x="20" y="55" width="180" height="10" rx="2" />
            <rect x="70" y="30" width="80" height="30" rx="1" />
            <polygon points="110,12 65,30 155,30" />
            <rect x="80" y="32" width="5" height="26" />
            <rect x="95" y="32" width="5" height="26" />
            <rect x="120" y="32" width="5" height="26" />
            <rect x="135" y="32" width="5" height="26" />
            <rect
              x="40"
              y="70"
              width="10"
              height="14"
              rx="1"
              fill="rgba(250,250,248,0.4)"
            />
            <rect
              x="58"
              y="70"
              width="10"
              height="14"
              rx="1"
              fill="rgba(250,250,248,0.4)"
            />
            <rect
              x="152"
              y="70"
              width="10"
              height="14"
              rx="1"
              fill="rgba(250,250,248,0.4)"
            />
            <rect
              x="170"
              y="70"
              width="10"
              height="14"
              rx="1"
              fill="rgba(250,250,248,0.4)"
            />
            <rect x="108" y="0" width="2" height="14" />
            <rect x="110" y="0" width="12" height="8" fill="#DC143C" opacity="0.5" />
          </svg>
        </div>

        {/* Scattered civic background icons */}
        <div className="absolute top-[15%] left-[3%] pointer-events-none z-0 opacity-[0.025]">
          <Icon icon="mdi:shield-star" className="text-[#0052CC] text-6xl" />
        </div>
        <div className="absolute bottom-[20%] right-[4%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:eagle" className="text-[#0A1628] text-7xl" />
        </div>
        <div className="absolute top-[45%] right-[18%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:star-circle" className="text-[#DC143C] text-4xl" />
        </div>
        <div className="absolute top-[70%] left-[12%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:vote" className="text-[#0052CC] text-5xl" />
        </div>

        {/* Subtle floating star decorations */}
        <div className="absolute top-20 left-[10%] pointer-events-none [animation:floatStar_6s_ease-in-out_infinite]">
          <Icon
            icon="mdi:star-four-points"
            className="text-[#0F9BA3] text-3xl opacity-[0.04]"
          />
        </div>
        <div className="absolute top-40 right-[15%] pointer-events-none [animation:floatStar_8s_ease-in-out_2s_infinite]">
          <Icon
            icon="mdi:star-four-points"
            className="text-[#DC143C] text-2xl opacity-[0.04]"
          />
        </div>
        <div className="absolute bottom-32 left-[20%] pointer-events-none [animation:floatStar_7s_ease-in-out_4s_infinite]">
          <Icon
            icon="mdi:star-four-points"
            className="text-[#C5A55A] text-4xl opacity-[0.03]"
          />
        </div>
        <div className="absolute bottom-48 right-[8%] pointer-events-none [animation:floatStar_6s_ease-in-out_infinite]">
          <Icon
            icon="mdi:star-four-points"
            className="text-[#0F9BA3] text-3xl opacity-[0.03]"
          />
        </div>
        <div className="absolute top-[60%] left-[5%] pointer-events-none [animation:floatStar_8s_ease-in-out_2s_infinite]">
          <Icon
            icon="mdi:star-four-points"
            className="text-[#DC143C] text-2xl opacity-[0.03]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full text-center py-16 md:py-24">
          {/* XPOLL Logo */}
          <div className="mb-10 flex justify-center items-center lg:hidden">
            <img
              src={XPOLL_LOGO}
              alt="XPOLL"
              className="h-24 w-auto"
            />
          </div>

          {/* Patriotic Star Divider */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#0F9BA3]" />
            <Icon icon="mdi:star" className="text-[#0F9BA3] text-sm" />
            <Icon icon="mdi:star" className="text-[#DC143C] text-xs" />
            <Icon icon="mdi:star" className="text-[#0F9BA3] text-sm" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#0F9BA3]" />
          </div>

          {/* Headline */}
          <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] mb-6 text-[#0A1628]">
            You need your driver&apos;s license to vote.
            <br className="hidden md:block" />
            Your passport to travel.
            <br />
            <span className="text-[#0F9BA3]">
            Soulbound Tokens are the future of Digital Identity 
            </span>
          </h1>

          {/* Subcopy */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-[Manrope]">
            XPOLL Soulbound Tokens create your sovereign, on-chain digital
            identity — secure, evolving, and owned by you. No intermediaries. No
            compromises.
          </p>

          {/* Trust Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium font-[Manrope]">
              <Icon icon="lucide:lock" className="text-[#0F9BA3] text-base" />
              Non-transferable
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium font-[Manrope]">
              <Icon icon="lucide:check-circle" className="text-[#0F9BA3] text-base" />
              Verified issuance
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium font-[Manrope]">
              <Icon icon="lucide:database" className="text-[#0F9BA3] text-base" />
              On-chain anchoring
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.xpoll.io/marketplace"
              target="_blank"
              id="hero-cta-primary"
              className="px-8 py-4 bg-[#DC143C] hover:bg-[#B01030] text-white rounded-xl font-[Poppins] font-semibold transition-all flex items-center gap-2 shadow-lg text-base tracking-wide [box-shadow:0_10px_15px_-3px_rgba(220,20,60,0.15)]"
            >
             Get Started today
              <Icon icon="lucide:arrow-right" className="text-lg" />
            </a>
            <a
              href="#works"
              id="hero-cta-secondary"
              className="px-8 py-4 text-[#0F9BA3] font-[Poppins] font-semibold hover:bg-[#0F9BA3]/5 transition-all rounded-xl border-2 border-[#0F9BA3]/30 text-base"
            >
              Learn How It Works
            </a>
          </div>
        </div>

        {/* Flag-inspired tri-color divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-[2px] bg-[#DC143C] opacity-20" />
          <div className="h-[1px] bg-white" />
          <div className="h-[2px] bg-[#0052CC] opacity-20" />
        </div>
      </section>

      {/* SECTION 2: ONBOARDING FLOW — LIGHT BG */}
      <section id="works" className="bg-white py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        {/* White patriotic stripes overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0 [background-image:repeating-linear-gradient(180deg,rgba(220,20,60,0.018)_0px,rgba(220,20,60,0.018)_60px,rgba(255,255,255,0)_60px,rgba(255,255,255,0)_120px,rgba(0,82,204,0.015)_120px,rgba(0,82,204,0.015)_180px,rgba(255,255,255,0)_180px,rgba(255,255,255,0)_240px)]"
          aria-hidden
        />
        {/* Very subtle stars background */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none z-0 bg-[length:50px_50px] [background-image:radial-gradient(circle,#0F9BA3_1px,transparent_1px)]"
          aria-hidden
        />

        {/* Scattered civic background icons for section 2 */}
        <div className="absolute top-[8%] right-[5%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:bank" className="text-[#0052CC] text-5xl" />
        </div>
        <div className="absolute bottom-[10%] left-[3%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:shield-star-outline" className="text-[#DC143C] text-6xl" />
        </div>
        <div className="absolute top-[50%] left-[6%] pointer-events-none z-0 opacity-[0.015]">
          <Icon
            icon="mdi:star-circle-outline"
            className="text-[#0052CC] text-4xl"
          />
        </div>
        <div className="absolute bottom-[35%] right-[3%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:scale-balance" className="text-[#0A1628] text-5xl" />
        </div>

        {/* Capitol silhouette — bottom left watermark */}
        <div className="absolute bottom-4 left-4 pointer-events-none opacity-[0.02] hidden lg:block z-0">
          <svg
            width="200"
            height="110"
            viewBox="0 0 280 160"
            fill="currentColor"
            className="text-[#0052CC]"
          >
            <rect x="80" y="120" width="120" height="40" rx="2" />
            <rect x="60" y="110" width="160" height="14" rx="2" />
            <rect x="90" y="80" width="100" height="32" rx="1" />
            <ellipse cx="140" cy="65" rx="50" ry="30" />
            <rect x="130" y="28" width="20" height="38" rx="3" />
            <ellipse cx="140" cy="22" rx="10" ry="12" />
            <rect x="138" y="6" width="4" height="16" />
            <rect x="95" y="82" width="6" height="28" />
            <rect x="110" y="82" width="6" height="28" />
            <rect x="125" y="82" width="6" height="28" />
            <rect x="149" y="82" width="6" height="28" />
            <rect x="164" y="82" width="6" height="28" />
            <rect x="179" y="82" width="6" height="28" />
            <rect x="20" y="125" width="44" height="30" rx="2" />
            <rect x="30" y="118" width="34" height="10" rx="1" />
            <rect x="216" y="125" width="44" height="30" rx="2" />
            <rect x="216" y="118" width="34" height="10" rx="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-[1.5px] bg-[#0F9BA3]/40" />
              <Icon icon="mdi:star" className="text-[#0F9BA3] text-xs" />
              <Icon icon="mdi:star" className="text-[#DC143C] text-[10px]" />
              <Icon icon="mdi:star" className="text-[#0F9BA3] text-xs" />
              <div className="w-10 h-[1.5px] bg-[#0F9BA3]/40" />
            </div>
            <h2 className="font-[Poppins] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0A1628]">
              Get Started with Your
              <br className="hidden md:block" /> Soulbound Experience
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-[Manrope] max-w-xl mx-auto">
            Activate and train your digital identity in three simple steps.
            </p>
          </div>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0F9BA3]/20 via-[#0F9BA3]/10 to-[#0F9BA3]/20 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 text-center group">
              <div className="mb-5 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#0F9BA3] text-white flex items-center justify-center font-[Poppins] font-bold text-lg shadow-md group-hover:scale-110 transition-transform [box-shadow:0_4px_6px_-1px_rgba(15,155,163,0.2)]">
                  1
                </div>
              </div>
              <h3 className="font-[Poppins] font-semibold text-base mb-2 text-[#0A1628]">
                Sign Up to XPOLL
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-[Manrope] px-2">
                Create your secure XPOLL account and establish your root
                environment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center group">
              <div className="mb-5 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#0F9BA3] text-white flex items-center justify-center font-[Poppins] font-bold text-lg shadow-md group-hover:scale-110 transition-transform [box-shadow:0_4px_6px_-1px_rgba(15,155,163,0.2)]">
                  2
                </div>
              </div>
              <h3 className="font-[Poppins] font-semibold text-base mb-2 text-[#0A1628]">
                Pay for your Subscription
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-[Manrope] px-2">
                Receive your identity credential and unique AI avatar upon
                verification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center group">
              <div className="mb-5 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#0F9BA3] text-white flex items-center justify-center font-[Poppins] font-bold text-lg shadow-md group-hover:scale-110 transition-transform [box-shadow:0_4px_6px_-1px_rgba(15,155,163,0.2)]">
                  3
                </div>
              </div>
              <h3 className="font-[Poppins] font-semibold text-base mb-2 text-[#0A1628]">
                Start Training
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-[Manrope] px-2">
                Engage with the ecosystem and begin building your verifiable
                digital footprint.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2.5 text-sm font-bold text-gray-600 uppercase tracking-wider font-[Manrope]">
              <div className="w-8 h-8 rounded-lg bg-[#0F9BA3]/5 flex items-center justify-center">
                <Icon icon="lucide:lock" className="text-[#0F9BA3] text-sm" />
              </div>
              Secure issuance
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold text-gray-600 uppercase tracking-wider font-[Manrope]">
              <div className="w-8 h-8 rounded-lg bg-[#0F9BA3]/5 flex items-center justify-center">
                <Icon icon="lucide:check-circle" className="text-[#0F9BA3] text-sm" />
              </div>
              Verified tokens
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold text-gray-600 uppercase tracking-wider font-[Manrope]">
              <div className="w-8 h-8 rounded-lg bg-[#0F9BA3]/5 flex items-center justify-center">
                <Icon icon="lucide:database" className="text-[#0F9BA3] text-sm" />
              </div>
              Decentralized records
            </div>
          </div>
        </div>

        {/* Flag-inspired tri-color divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="h-[2px] bg-[#DC143C] opacity-20" />
          <div className="h-[1px] bg-[#F3F2EF]" />
          <div className="h-[2px] bg-[#0052CC] opacity-20" />
        </div>
      </section>

      {/* SECTION 3: CLOSE — NAVY BACKGROUND */}
      <section className="bg-[#0A1628] relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
        {/* Navy stars pattern overlays */}
        <div
          className="absolute inset-0 pointer-events-none z-0 [background-image:radial-gradient(circle,rgba(197,165,90,0.03)_1.2px,transparent_1.2px),radial-gradient(circle,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:48px_48px,32px_32px] [background-position:0_0,16px_16px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 [background-image:repeating-linear-gradient(180deg,rgba(220,20,60,0.02)_0px,rgba(220,20,60,0.02)_50px,transparent_50px,transparent_100px,rgba(0,82,204,0.015)_100px,rgba(0,82,204,0.015)_150px,transparent_150px,transparent_200px)]"
          aria-hidden
        />

        {/* Subtle floating stars */}
        <div className="absolute top-16 right-[12%] pointer-events-none opacity-[0.04]">
          <Icon icon="mdi:star-four-points" className="text-white text-5xl" />
        </div>
        <div className="absolute bottom-20 left-[8%] pointer-events-none opacity-[0.03]">
          <Icon icon="mdi:star-four-points" className="text-[#C5A55A] text-4xl" />
        </div>

        {/* Civic icons on navy */}
        <div className="absolute top-[12%] left-[4%] pointer-events-none z-0 opacity-[0.025]">
          <Icon icon="mdi:eagle" className="text-white text-6xl" />
        </div>
        <div className="absolute bottom-[15%] right-[5%] pointer-events-none z-0 opacity-[0.02]">
          <Icon icon="mdi:shield-star" className="text-[#C5A55A] text-5xl" />
        </div>
        <div className="absolute top-[55%] right-[15%] pointer-events-none z-0 opacity-[0.015]">
          <Icon icon="mdi:bank-outline" className="text-white text-4xl" />
        </div>

        {/* Capitol silhouette — bottom right watermark on navy */}
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.025] hidden lg:block z-0">
          <svg
            width="320"
            height="160"
            viewBox="0 0 320 160"
            fill="currentColor"
            className="text-white"
          >
            <rect x="100" y="120" width="120" height="40" rx="2" />
            <rect x="80" y="110" width="160" height="14" rx="2" />
            <rect x="110" y="80" width="100" height="32" rx="1" />
            <ellipse cx="160" cy="65" rx="50" ry="30" />
            <rect x="150" y="28" width="20" height="38" rx="3" />
            <ellipse cx="160" cy="22" rx="10" ry="12" />
            <rect x="158" y="6" width="4" height="16" />
            <rect x="115" y="82" width="6" height="28" />
            <rect x="130" y="82" width="6" height="28" />
            <rect x="145" y="82" width="6" height="28" />
            <rect x="169" y="82" width="6" height="28" />
            <rect x="184" y="82" width="6" height="28" />
            <rect x="199" y="82" width="6" height="28" />
            <rect x="40" y="125" width="44" height="35" rx="2" />
            <rect x="50" y="118" width="34" height="10" rx="1" />
            <rect x="236" y="125" width="44" height="35" rx="2" />
            <rect x="236" y="118" width="34" height="10" rx="1" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#C5A55A]/40" />
            <Icon icon="mdi:star" className="text-xs text-[#C5A55A]/60" />
            <Icon icon="mdi:star" className="text-[10px] text-[#C5A55A]/40" />
            <Icon icon="mdi:star" className="text-xs text-[#C5A55A]/60" />
            <div className="w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#C5A55A]/40" />
          </div>

          <h2 className="font-[Poppins] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Verify Your
            <br />
            Digital Identity?
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-14 font-[Manrope] max-w-xl mx-auto">
            Our team can help you understand issuance, on-chain anchoring, and
            identity training.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            <div className="bg-[#111D33]/80 p-6 rounded-2xl border border-white/[0.06] flex items-center gap-4 text-left hover:border-[#0F9BA3]/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0F9BA3]/10 flex items-center justify-center shrink-0">
                <Icon icon="lucide:mail" className="text-[#0F9BA3] text-xl" />
              </div>
              <div>
                <p className="text-[11px] text-white/30 font-semibold uppercase tracking-wider font-[Manrope] mb-1">
                  Direct Support
                </p>
                <p className="font-[Poppins] font-semibold text-white text-base">
                  hello@xpoll.io
                </p>
              </div>
            </div>
            <div className="bg-[#111D33]/80 p-6 rounded-2xl border border-white/[0.06] flex items-center gap-4 text-left hover:border-[#0F9BA3]/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0F9BA3]/10 flex items-center justify-center shrink-0">
                <Icon icon="lucide:globe" className="text-[#0F9BA3] text-xl" />
              </div>
              <div>
                <p className="text-[11px] text-white/30 font-semibold uppercase tracking-wider font-[Manrope] mb-1">
                  Infrastructure Portal
                </p>
                <p className="font-[Poppins] font-semibold text-white text-base">
                  app.xpoll.io
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <a
            href="https://app.xpoll.io/marketplace"
            target="_blank"
            id="final-cta-btn"
            className="inline-flex items-center justify-center w-full md:w-auto px-12 py-4 bg-[#DC143C] hover:bg-[#B01030] text-white font-[Poppins] font-semibold rounded-xl transition-all shadow-lg text-base tracking-wide [box-shadow:0_10px_15px_-3px_rgba(220,20,60,0.2)]"
          >
           Get Started today
            <Icon icon="lucide:arrow-right" className="ml-2 text-lg" />
          </a>

          {/* Payment Icons */}
          <div className="mt-14 flex items-center justify-center gap-8 opacity-20">
            {/* <Icon icon="logos:visa" height={20} />
            <Icon icon="logos:mastercard" height={20} /> */}
            <Icon icon="logos:stripe" height={40} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1628] py-8 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src={ASSETS.images.logo}
              alt="XPOLL"
              className="h-16 w-auto"
            />
          </div> 
             
              
          <div className="flex flex-col md:flex-row items-center text-center gap-2 text-xs text-white/30 font-[Manrope]  uppercase tracking-[0.15em] font-[Manrope]">
            <a
              href="/privacy-policy"
              target="_blank"
              id="legal-privacy"
              className="text-white/50 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
 
            <p>&copy; 2026 XPOLL Infrastructure Group</p>
          </div>
        </div>
      </footer>

      {/* Thin patriotic bottom bar — flag-inspired */}
      <div className="h-1.5 w-full shrink-0 flex">
        <div className="flex-1 bg-[#DC143C]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#0052CC]" />
      </div>
    </div>
    </>
  );
}
