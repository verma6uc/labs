import { SvgIcon, SvgIconProps } from '@mui/material';

const BeakerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" sx={{ 
      strokeWidth: 1.5,
      fill: 'none',
      stroke: 'currentColor',
      ...props.sx 
    }}>
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </SvgIcon>
  );
};

export default BeakerIcon;
