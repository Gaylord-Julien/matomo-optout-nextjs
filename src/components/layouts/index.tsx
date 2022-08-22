import React from 'react';

export const W70: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="mb-24 pt-24 mx-auto w-11/12 lg:w-10/12 xl:w-6/12 3xl:w-4/12">
      {children}
    </div>
  );
};

export const H1: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <h1 className="text-center font-silk text-5xl md:text-6xl lg:text-7xl xl:text-7xl xs:text-6xl">
      {children}
    </h1>
  );
};

export const BlockH2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <h2 className="p:text-base mb-3 border-b border-black pb-3 text-center font-sora text-3xl dark:border-white ">
      {children}
    </h2>
  );
};
