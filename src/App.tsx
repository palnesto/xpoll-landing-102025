import { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { FullScreenLoader } from "./components/full-screen-loader";

export function App() {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <DefaultLayout>{appRoutes}</DefaultLayout>
    </Suspense>
  );
}

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <MaxWidthLayout>{children}</MaxWidthLayout>;
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
}: {
  children: React.ReactNode;
}) => {
  const transitionBreakpoint = 1536;
  const calculateWidth = () =>
    Math.min(
      3840,
      window.innerWidth -
        Math.min(
          400,
          window.innerWidth *
            (window.innerWidth < transitionBreakpoint ? 0.1 : 1.5)
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
    <div className="relative w-full flex flex-col items-center font-poppins">
      <div
        style={{
          width: "100%",
          minHeight: "100dvh",
          maxWidth: `${maxWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
