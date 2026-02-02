import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);

  // Configuración de tamaños con animación de crecimiento
  const sizeConfig = {
    navbar: {
      classes: "text-[20px] xl:text-[24px]",
      initial: { padding: "8px 16px", gap: 45 },
      hover: { padding: "8px 16px", gap: 45 },
      iconStyle: false, // No tiene icono con estilo especial
    },
    hero: {
      classes: "text-base sm:text-lg lg:text-xl xl:text-[24px]",
      initial: { padding: "8px 16px", gap: 10 },
      hover: { padding: "10px 20px", gap: 20 },
      iconStyle: true, // Icono con borde que cambia en hover
    },
    md: {
      classes: "text-base sm:text-lg lg:text-xl",
      initial: { padding: "8px 16px", gap: 10 },
      hover: { padding: "12px 24px", gap: 10 },
      iconStyle: false,
    },
    lg: {
      classes: "text-base sm:text-lg lg:text-xl",
      initial: { padding: "12px 24px", gap: 10 },
      hover: { padding: "12px 24px", gap: 10 },
      iconStyle: false,
    },
    footer: {
      classes: "text-2xl sm:text-3xl lg:text-4xl",
      initial: { padding: "16px 24px", gap: 10 },
      hover: { padding: "16px 24px", gap: 10 },
      iconStyle: false,
    },
  };

  const config = sizeConfig[size] || sizeConfig.md;
  const currentState = isHovered ? config.hover : config.initial;

  // Estilo del icono para el tamaño "hero"
  // Usa ChevronRight (solo flecha) y crea el círculo con CSS
  const renderIcon = (iconElement) => {
    if (!iconElement) return null;

    if (config.iconStyle) {
      // Default: círculo con borde blanco, flecha blanca
      // Hover: círculo relleno naranja, flecha blanca
      return (
        <motion.span
          className="shrink-0 flex items-center justify-center rounded-full w-6 h-6"
          animate={{
            backgroundColor: isHovered ? "#E85102" : "transparent",
            borderColor: isHovered ? "#E85102" : "#FBFBFB",
            borderWidth: 2,
          }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 100,
            damping: 15,
          }}
          style={{ borderStyle: "solid", color: "#FBFBFB" }}
        >
          {iconElement}
        </motion.span>
      );
    }

    return <span className="shrink-0">{iconElement}</span>;
  };

  return (
    <motion.button
      className={`
        inline-flex items-center justify-center
        font-rajdhani font-${fontWeight}
        bg-[#E85102] text-[#FBFBFB]
        rounded-[100px]
        cursor-pointer
        border-2 border-transparent

        ${config.classes}
        ${className}
      `}
      style={{
        ...style,
        padding: currentState.padding,
        gap: currentState.gap,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "#FFFFFF" : "#E85102",
        borderColor: isHovered ? "#E85102" : "transparent",
        color: isHovered ? "#262424" : "#FBFBFB",
        padding: currentState.padding,
        gap: currentState.gap,
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      {...props}
    >
      {icon && iconPosition === "left" && renderIcon(icon)}
      {children}
      {icon && iconPosition === "right" && renderIcon(icon)}
    </motion.button>
  );
};

export default Button;
