import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { AppProvider } from "./context/AppContext.tsx";

import { ToastProvider } from "./context/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
      <StrictMode>
            <BrowserRouter>
                  <AuthProvider>
                        <AppProvider>
                              <ToastProvider>
                                    <App />
                              </ToastProvider>
                        </AppProvider>
                  </AuthProvider>
            </BrowserRouter>
      </StrictMode>,
);
