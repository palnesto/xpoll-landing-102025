import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

const app = createRoot(document.getElementById("root")!);

app.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
