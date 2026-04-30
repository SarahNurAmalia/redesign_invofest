import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  icon,
}) => {
  
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none";

  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  
  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md",
    outline:
      "border border-pink-600 text-pink-600 hover:bg-pink-50 hover:scale-105 active:scale-95",
  };

  
  const disabledStyle = "opacity-50 cursor-not-allowed hover:scale-100";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${
        disabled || loading ? disabledStyle : ""
      } ${className}`}
    >
      
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {!loading && icon && <span>{icon}</span>}

      <span>{label}</span>
    </button>
  );
};

export default Button;