import React from 'react';
import { ButtonProps } from '@mui/material';
import { GlassButton } from './StyledComponents';

export interface AdminButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  isIconButton?: boolean;
  sx?: any;
}

export const AdminButton: React.FC<AdminButtonProps> = ({
  children,
  buttonType = 'primary',
  isIconButton = false,
  className = '',
  ...props
}) => {
  const buttonClass = [
    className,
    buttonType === 'secondary' ? 'secondary' : 'primary',
    isIconButton ? 'icon-button' : '',
  ].filter(Boolean).join(' ');

  return (
    <GlassButton
      className={buttonClass}
      sx={{
        ...(isIconButton && {
          minWidth: 40,
          width: 40,
          height: 40,
          padding: 0,
        }),
        ...props.sx
      }}
      {...props}
    >
      {children}
    </GlassButton>
  );
};

export default AdminButton;
