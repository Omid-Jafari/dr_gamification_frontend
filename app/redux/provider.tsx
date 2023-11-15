"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </Provider>
  );
}
