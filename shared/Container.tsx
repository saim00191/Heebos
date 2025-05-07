import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className}  px-4 sm:px-7 md:px-10 lg:px-14 xl:px-16 2xl:px-20 max-w-[1440px] mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
