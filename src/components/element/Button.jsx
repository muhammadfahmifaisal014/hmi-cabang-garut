import React from "react";

export default function Button({
 className,
 type = "button",
 children,
 onClick,
 fullWidth = false,
 disabled = false,
 id,
}) {
 return (
  <button
   id={id || children}
   aria-label={`${children} Button`}
   title={`${children} Button`}
   className={`p-2 rounded-md ${fullWidth && "w-full"} ${
    disabled ? "opacity-60" : "opacity-100"
   } ${className}`}
   type={type}
   onClick={onClick}
   disabled={disabled}>
   {children}
  </button>
 );
}
