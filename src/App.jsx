import "./App.css";
import "./Cursor.css";
import { useEffect, useRef } from "react";
import Intro from "./Intro.jsx";
import Profile from "./Profile.jsx";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      // Delegated hover check so it works for elements mounted later too
      cursor.classList.toggle("hover", !!e.target.closest("button, a"));
    };
    const onDown = () => cursor.classList.add("click");
    const onUp = () => cursor.classList.remove("click");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <div className="cursor-dot" />
      </div>

      <main className="layout">
        <Intro />
        <Profile />
      </main>
    </>
  );
}

export default App;
