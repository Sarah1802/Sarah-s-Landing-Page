// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useEffect, useRef } from "react";
import CatsInSpace from "./CatsInSpace.jsx";
import Profile from "./Profile.jsx";
import Cursor from "./Cursor.jsx";
import './Cursor.css';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      console.log(e.clientX, e.clientY);

      const cursorElement = cursorRef.current;
      if (!cursorElement) return;

      cursorElement.style.top = `${e.pageY - 15}px`;
      cursorElement.style.left = `${e.pageX - 15}px`;
    };

    const onClick = (e) => {
      const cursorElement = cursorRef.current;
      console.log("here");
      if (!cursorElement) return;

      cursorElement.classList.add("click");

      setTimeout(() => {
        cursorElement.classList.remove("click");

      }, 500);
    }
    
    document.querySelectorAll("button, a").forEach(el => {
      el.addEventListener("mouseenter", () =>
        cursorRef.current.classList.add("hover")
      );
      el.addEventListener("mouseleave", () =>
        cursorRef.current.classList.remove("hover")
      );
    });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);


  return (
    <>
      <div className='cursor' ref={cursorRef}>
      </div>

      <div className="flex-container">
        <div className="profile-component">
          <Profile />
        </div>
        <div className="catsinspace-component">
          <CatsInSpace />
        </div>
      </div>
    </>
  );
}
export default App;
