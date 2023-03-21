import React, { forwardRef } from "react";

interface HeadingOptions {
  className: React.ReactNode;
  fontSize:string;
  fontWeight:string;
  height: string;
  width:string;
}
type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> &
  HeadingOptions;

type Ref = HTMLSpanElement;
const Heading = forwardRef<Ref, HeadingProps>(
  ({ children, className, fontSize,fontWeight,width,height, ...props }, ref) => (
    <span
      ref={ref}
      className={`${height} ${width} font-poppins text-dark ${fontSize} ${fontWeight} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
);
Heading.displayName = "Heading";
export default Heading;
