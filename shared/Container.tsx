import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} max-w-[1440px] mx-auto px-4 sm:px-7 md:px-10 lg:px-14 xl:px-16 2xl:px-20`}
    >
      {children}
    </div>
  );
};

export default Container;
