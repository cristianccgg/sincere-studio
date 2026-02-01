import React from "react";

const Button = ({
  children,
  icon,
  iconPosition = "right",
  size = "md",
  fontWeight = "semibold",
  className = "",
  style = {},
  ...props
}) => {
  // Tamaños predefinidos basados en las especificaciones de diseño
  const sizes = {
    // Navbar: 105x42, padding 8/16
    navbar: "px-4 py-2 text-[20px] gap-[45px]",

    // Hero "See our Solutions": 243x52, padding 8/16
    // Mobile: tamaño base, Desktop: escala con viewport
    hero: "px-4 py-2 text-base sm:text-lg lg:text-xl gap-2.5",

    // Medium: "Let's create something great": 368x55, padding 12/24
    // Mobile: tamaño legible, Desktop: xl
    md: "px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg lg:text-xl gap-2.5",

    // Large: "Let's Get Started": 244x55, padding 12/24
    // Mobile: tamaño legible, Desktop: xl
    lg: "px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg lg:text-xl gap-2.5",

    // Footer "Let's work !": 215x78, padding 16/24
    footer: "px-6 py-4 text-2xl sm:text-3xl lg:text-4xl gap-2.5",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-rajdhani font-${fontWeight}
        bg-[#E85102] text-[#FBFBFB]
        rounded-[100px]
        cursor-pointer
        transition-all duration-300
        border-2 border-transparent
        hover:bg-white hover:border-[#E85102] hover:text-[#262424]

        ${sizes[size] || sizes.md}
        ${className}
      `}
      style={style}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </button>
  );
};

export default Button;
