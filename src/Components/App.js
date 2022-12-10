import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from "./Header";
import SearchParams from "./SearchParams";
import Detail from "./Detail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  console.log("App");
  return (
    <div className="app">
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Detail />} />
          </Routes>
        </QueryClientProvider>
      </HashRouter>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
