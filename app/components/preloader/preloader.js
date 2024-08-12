"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./preloader.css";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return loading ? (
    <div className="handle-preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading font-montserrat font-semibold">
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="G" className="letters-loading">
            G
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
        </div>
      </div>
    </div>
  ) : (
    children
  );
}
