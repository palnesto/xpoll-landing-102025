import { StandardWidthLayout } from "@/App";
import { usePartnerModal } from "@/store/partnerModal";

export const ContactUs = () => {
  const { setOpen } = usePartnerModal();
  return (
    <StandardWidthLayout>
      <div className="mx-auto w-full py-16 lg:py-24 2xl:py-32 flex flex-col gap-10 lg:flex-row items-center justify-between text-center">
        <div className="lg:text-left w-full">
          <h1 className="text-[22px] font-extrabold md:text-4xl lg:text-[25px] xl:text-3xl 2xl:text-[40px] lg:leading-tight font-manrope">
            The World’s First Post‑Web <br className="hidden xl:block" /> Civic
            Intelligence Marketplace
          </h1>

          <div className="mt-10 2xl:mt-5">
            <p className="text-[84px] font-medium font-poppins text-[#185CFF] select-none md:text-[112px] 2xl:text-[140px]">
              1.2M<span className="align-top">+</span>
            </p>
            <p className="text-lg md:text-2xl 2xl:text-3xl text-[#292D33]">
              verified votes analyzed
            </p>
          </div>
        </div>

        <div className="lg:text-right flex flex-col lg:items-end w-full">
          <h2 className="text-sm font-medium md:text-xl lg:text-base xl:text-[22px] 2xl:text-[27px] text-[#5E5E5E] font-poppins">
            Powering evolving civic intelligence with real data
          </h2>
          <p className="pt-4 2xl:pt-10 text-sm md:text-lg lg:text-sm xl:text-lg 2xl:text-2xl text-[#717171]">
            Transparent polls, on‑chain verification, and{" "}
            <span className="text-[#0264FF]">AI‑driven</span>
            <br className="hidden 2xl:block" /> analysis built for{" "}
            <span className="font-medium">
              institutions, protocols, and communities.
            </span>
          </p>

          <div className="pt-12 flex flex-col gap-4 lg:flex-row w-fit mx-auto lg:mx-0">
            <a
              href="https://app.xpoll.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#0264FF] px-10 py-3 lg:text-sm 2xl:text-xl text-[#0264FF] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
            >
              Join the movement
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#0264FF] px-10 py-3 lg:text-sm 2xl:text-xl text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
            >
              Partner with us
            </button>
          </div>
        </div>
      </div>
    </StandardWidthLayout>
  );
};
