import React from 'react';
import { H1, W70 } from './layouts';
import OptIn from './optIn';

const CookiesWrapper: React.FC<{ doNotTrack: string; trackMe: string }> = ({
  doNotTrack,
  trackMe,
}) => {
  if (typeof window !== 'undefined') {
    return (
      <div>
        <H1>Gestion des cookies</H1>
        <W70>
          <div className="mx-auto w-10/12 font-sora text-base font-light xl:w-9/12 2xl:w-10/12 3xl:w-full">
            <OptIn trackMe={trackMe} doNotTrack={doNotTrack} />
          </div>
        </W70>
      </div>
    );
  }
  return <div></div>;
};

export default CookiesWrapper;
