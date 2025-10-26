import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { FullScreenLoader } from "./components/full-screen-loader";

export function App() {
  const appRoutes = useRoutes(routes);

  return <Suspense fallback={<FullScreenLoader />}>{appRoutes}</Suspense>;
}
