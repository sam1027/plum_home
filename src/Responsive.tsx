import React, { ReactElement } from 'react';
import {useMediaQuery} from 'react-responsive';

interface ResponsiveProps{
    children: ReactElement;
}

export const Mobile = ({children}: ResponsiveProps) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC = ({children}: ResponsiveProps) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  
  return <>{isPc && children}</>
}