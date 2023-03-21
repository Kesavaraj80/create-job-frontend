import React, { forwardRef } from "react";

interface InputOptions {
  className: React.ReactNode;
  fontSize:string;
  fontWeight:string;
  height: string;
  width:string;
  holder:string;
  type:string;
}
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputOptions;

type Ref = HTMLInputElement;
const Input = forwardRef<Ref, InputProps>(
  ({ className, fontSize,fontWeight,width,height,holder,type='text', ...props }) => (
    <input
      className={`${height} ${width} focus:outline-none font-poppins text-holder ${fontSize} ${fontWeight} mt-1 rounded-[5px] py-2 px-3 border border-[#E6E6E6] ${className}` }
      {...props}
      type={type}
      placeholder={holder}
    />
  )
);
Input.displayName = "Input";
export default Input;
