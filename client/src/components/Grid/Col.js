import React from "react";

export const Col = ({className="", size, children }) => (
  <div className={className + " " + size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
