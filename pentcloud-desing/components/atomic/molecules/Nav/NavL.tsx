import React from 'react'
import NextLink from 'next/link';
import Button from '@mui/material/Button';

export const NavL = ({ menuItems }: {
    menuItems: {
        href: string,
        nav: string,
    }[]
}) => {
    return (
        <>
            {menuItems.map((item) => (
                <NextLink href={item.href} passHref key={item.href}>
                    <Button  sx={{ color: '#fff' }}>
                        {item.nav}
                    </Button>
                </NextLink>
            ))}
        </>
    )
}
