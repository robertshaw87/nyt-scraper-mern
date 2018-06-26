import React from "react";

export const Container = ({ className="", fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} ${className}`}>
    {children}
  </div>
);
