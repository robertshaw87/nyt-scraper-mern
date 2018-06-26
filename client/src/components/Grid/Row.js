import React from "react";

export const Row = ({ className="", fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""} ${className}`}>
    {children}
  </div>
);
