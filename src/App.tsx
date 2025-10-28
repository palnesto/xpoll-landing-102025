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
  return (
    <header className="hidden lg:block fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg bg-blur-lg h-24">
      <figure className="flex justify-center items-center py-3 h-24">
        <img
          src={ASSETS.images.xpollLogo}
          alt="Logo"
          className="h-full w-full"
        />
      </figure>
    </header>
  );
};

// const Navbar = () => {
//   return (
//     <header className="hidden lg:block lg:fixed bg-red-500 ">hello</header>
//   );
// };
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
              : 1.5)
        )
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
        className
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
