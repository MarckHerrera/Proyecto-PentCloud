import React from 'react'

import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavL } from '../../molecules/Nav/NavL';
import { menuItems } from '../../../../data/data';
import NextLink from 'next/link';

const navItems = ['Home', 'About', 'Contact'];

export const NavBar = () => {
  return (
      <AppBar component="nav" enableColorOnDark position='relative'>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            /* onClick={handleDrawerToggle} */
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NextLink href='/' passHref>
              <IconButton>
                DreamCloud
              </IconButton>
            </NextLink>
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavL menuItems={menuItems} />
          </Box>
        </Toolbar>
      </AppBar>
  )
}
