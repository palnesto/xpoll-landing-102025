export const ContactUs = () => {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="mx-auto px-4 py-16 lg:px-10 lg:py-24 flex flex-col gap-10 lg:flex-row items-center justify-between text-center">
        <div className="lg:w-1/2 lg:text-left">
          <h1 className="text-xl font-extrabold lg:text-3xl lg:leading-tight font-manrope">
            The World’s First Post‑Web <br className="hidden 2xl:block" /> Civic
            Intelligence Marketplace
          </h1>

          <div className="mt-10">
            <p className="text-[84px] font-medium font-poppins text-[#185CFF] select-none lg:text-[112px]">
              1.2M<span className="align-top">+</span>
            </p>
            <p className="lg:text-xl text-gray-700">verified votes analyzed</p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:max-w-2xl lg:text-right flex flex-col lg:items-end">
          <h2 className="text-sm font-medium xl:text-xl 2xl:text-2xl text-[#5E5E5E] font-poppins">
            Powering evolving civic intelligence with real data
          </h2>
          <p className="pt-2 text-xs xl:text-lg text-[#717171]">
            Transparent polls, on‑chain verification, and{" "}
            <span className="text-[#0264FF]">AI‑driven</span>
            <br className="hidden xl:block" /> analysis built for{" "}
            <span className="font-medium">
              institutions, protocols, and communities.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row w-fit mx-auto lg:mx-0">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-[#0264FF] px-10 py-3 text-base text-[#0264FF] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
            >
              See dashboards
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#0264FF] px-10 py-3 text-base text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
