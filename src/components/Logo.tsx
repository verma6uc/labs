import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Logo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M4.5 3h15" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }} />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }} />
      <path d="M6 14h12" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }} />
    </SvgIcon>
  );
};

export default Logo;
