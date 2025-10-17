import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Balance } from "./screens/Balance";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Balance />
  </StrictMode>,
);
