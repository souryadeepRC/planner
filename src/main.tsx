import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";

try {
  const rootElement: HTMLElement | null = document.getElementById("root");
  ReactDOM.createRoot(rootElement!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  /*eslint-disable */
} catch (err) {
  console.error("Not able to render application");
}
