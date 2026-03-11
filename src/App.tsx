import { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { FullScreenLoader } from "./components/full-screen-loader";
import { ASSETS } from "./constants";
import { cn } from "./lib/utils";
import { PartnerWithUsModal } from "./components/modal/partner-with-us-modal";

export function App() {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <DefaultLayout>
        {appRoutes}
        <PartnerWithUsModal />
      </DefaultLayout>
    </Suspense>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/10 backdrop-blur-lg bg-blur-lg h-20 md:h-24">
      <div className="relative h-24">
        <figure className="flex justify-center items-center py-3 h-20 md:h-24">
          <img
            src={ASSETS.images.xpollLogo}
            alt="Logo"
            className="h-full w-full"
          />
        </figure>

        <div className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 -mt-2 lg:mt-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0264FF] px-2 py-2 md:px-7 md:py-4 text-xs md:text-sm font-medium text-white shadow-sm transition hover:bg-[#0264FF]/80"
            >
              Our Products
              <span className="text-xs">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white py-2 text-sm text-slate-800 shadow-xl ring-1 ring-black/5">
                <a
                  href="https://app.xpoll.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  MarTech
                </a>
                <a
                  href="https://app.dredge.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  AI-Powered Data Processing & Analytics Tool
                </a>
                <a
                  href="https://app.xpoll.io/marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  DeFi
                </a>
                <a
                  href="https://grwb.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  SocialFi
                </a>
                <div className="block px-4 py-2 text-slate-400 cursor-default">
                  Web chat (coming soon)
                </div>
                <a
                  href="https://canvaslabs.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-slate-50"
                >
                  End-to-End Consulting
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthLayout>
      <Navbar />
      <main className="">{children}</main>
    </MaxWidthLayout>
  );
};

const MaxWidthLayout = ({ children }: { children: React.ReactNode }) => {
  const maxWidth = 3840;
  return (
    <div className="w-full flex flex-col items-center font-poppins">
      <div
        style={{
          width: "100%",
          minHeight: "100dvh",
          maxWidth: `${maxWidth}px`,
        }}
        className="bg-white"
      >
        {children}
      </div>
    </div>
  );
};

export const StandardWidthLayout = ({
  children,
  className,
  noOnMobile = false,
  transitionBreakpointProp,
}: {
  children: React.ReactNode;
  className?: string;
  noOnMobile?: boolean;
  transitionBreakpointProp?: number;
}) => {
  const transitionBreakpoint = transitionBreakpointProp ?? 1536;
  const calculateWidth = () =>
    Math.min(
      3840,
      window.innerWidth -
        Math.min(
          400,
          window.innerWidth *
            (window.innerWidth < transitionBreakpoint
              ? noOnMobile
                ? 0
                : 0.1
              : 1.5),
        ),
    );

  const [maxWidth, setMaxWidth] = useState(calculateWidth());

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(calculateWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center font-poppins",
        className,
      )}
    >
      <div
        style={{
          width: "100%",
          // minHeight: "100dvh",
          maxWidth: `${maxWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
