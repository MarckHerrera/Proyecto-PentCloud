/* import React from 'react'
import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';

export const Buttons = ({ variant, children, align, size, sx, href, fullWidth, ...rest }: {
    variant:
    'contained'
    | 'outlined'
    | 'text',
    size:
    'small'
    | 'medium'
    | 'large',
    href: string,
    fullWidth: boolean,
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
        <Button
            variant={variant}
            sx={sx}
            align={align}
            fullWidth={fullWidth}
            href={`${href}`}
            {...rest}
        >
            {children}
        </Button>
    )
} */
