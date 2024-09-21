"use client";

import { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [onClickAway]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
