import React, { forwardRef } from "react";

interface ButtonOptions {
  className: React.ReactNode;
  variant: string;
  disabled: boolean;
  height:string;
  width:string;
  fontSize:string;
  fontWeight:string
}
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;
const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond: string) => typeof cond === "string")
    .join(" ")
    .trim();
const classes = {
  base: "focus:outline-none transition ease-in-out duration-300",
  disabled: "bg-disable opacity-50 cursor-not-allowed",
  variant: {
    primary:
      "bg-primary font-poppins py-2 px-4 text-white rounded-[6px]",    
    secondary:
      "bg-secondary font-poppins py-2 px-4 text-primary border rounded-[6px]",
  },
};
type Ref = HTMLButtonElement;
const Button = forwardRef<Ref, ButtonProps>(
  ({ children, className, variant, disabled = false,height,width,fontSize,fontWeight, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      type="button"
      className={cls(`
                ${classes.base}
                ${classes.variant[variant]}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
export default Button;
