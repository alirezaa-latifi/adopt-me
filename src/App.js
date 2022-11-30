import { createRoot } from "react-dom/client";
import Header from "./Header";
import SearchParams from "./SearchParams";
import { HashRouter, Routes, Route } from "react-router-dom";
import Details from "./Detail";
const App = () => {
  console.log("App");
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);