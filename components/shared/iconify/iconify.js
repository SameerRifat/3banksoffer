"use client";
import { forwardRef } from "react";
// icons
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, style, ...other }, ref) => (
  <Icon
    ref={ref}
    className="component-iconify"
    icon={icon}
    width={width}
    style={{ ...style }}
    {...other}
  />
));

Iconify.displayName = "Iconify"; // Add display name

export default Iconify;
