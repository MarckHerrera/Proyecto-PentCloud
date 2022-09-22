import { Grid } from '@mui/material'
import React from 'react'
import { HomeGrid } from '../../molecules/HomeGrid/HomeGrid';
import { NavBar } from '../../organisms/NavBar/NavBar';

export const HomeTemplate = () => {
  return (
    <Grid
    container

          sx={{
            backgroundImage: 'url(https://cdn.suwalls.com/wallpapers/abstract/lines-8538-1920x1200.jpg)',

            backgroundPosition: 'center',
            height: '91vh',
          }}
    >
        

        <HomeGrid/>
    </Grid>
  )
}
