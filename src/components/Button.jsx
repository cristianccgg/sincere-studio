import React from "react";

const Button = ({
  children,
  icon,
  iconPosition = "right",
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-2",
    md: "px-4 py-2 text-[24px] gap-3",
    lg: "px-4 py-2 text-lg gap-[45px]",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-rajdhani font-semibold
        bg-[#E85102] text-white
        rounded-[100px]
        cursor-pointer
        transition-all duration-300
        border-2 border-transparent
        hover:bg-white hover:border-[#E85102] hover:text-[#262424]
        
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
};

export default Button;
