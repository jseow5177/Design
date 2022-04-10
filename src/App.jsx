import { useState } from "react";
import { Header, Body, Footer } from "./sections";
import { Sidebar } from "./components";
import "./App.css";

const ITEMS = [
  { label: "Button", children: [{ label: "IconButton" }] },
  { label: "Input", children: [{ label: "Select" }, { label: "Toggle" }] },
  { label: "Card", children: [{ label: "Modal" }] },
  { label: "Alert", children: [{ label: "Toast" }] },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar items={ITEMS} open={isSidebarOpen} />
      <section id="main">
        <Header title="Yo" toggleSidebar={toggleSidebar} />
        <Body />
        <Footer />
      </section>
    </>
  );
}

export default App;
