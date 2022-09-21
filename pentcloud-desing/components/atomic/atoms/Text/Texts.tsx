import React from 'react'
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';

export const Texts = ({variant, children, align, sx, ...rest }: {
    variant: 	
    'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2',
    align?: 
    'center'
    | 'inherit'
    | 'justify'
    | 'left'
    | 'right',
    sx?: SxProps<Theme>,
    children?: React.ReactNode,

  }) => {

  return (
    <Typography 
    variant={variant} 
    sx={sx}
    align={align}
    {...rest}
    >
      {children}
      </Typography>
  )
}
